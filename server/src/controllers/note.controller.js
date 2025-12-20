const asyncHandler = require("../utils/asyncHandler.js");
const apiResponse = require("../utils/apiResponse.js");
const apiError = require("../utils/apiError.js");
const Note = require("../models/notes.model.js");
const Subject = require("../models/subject.model.js");
const uploadToCloudinary  = require("../config/cloudinary.js");
const cloudinary = require("cloudinary").v2;

const addNotes = asyncHandler(async(req, res) => {
    const { title, description, subjectId, semesterId, departmentId } = req.body;

    if (!title || !description || !subjectId || !semesterId || !departmentId) {
        throw new apiError(400, "All fields are required..")
    }

    const noteLocalFilePath = req.file?.path;
    if (!noteLocalFilePath) {
        throw new apiError(400, "Note file path is required..");
    }

    const note = await uploadToCloudinary(noteLocalFilePath);
    if (!note) {
        throw new apiError(400, "Note is required..");
    }

    const notes = await Note.create({
        title,
        description,
        noteUrl: note.secure_url,
        notePublicId: note.public_id,
        subject: subjectId,
        semester: semesterId,
        department: departmentId
    });
    console.log(note);
    return res.status(201).json(
        new apiResponse(201, notes, "Note added successfully..")
    )
});

const getNoteBySub = asyncHandler(async(req, res) => {
    const { subjectId } = req.params;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    if (!subjectId) {
        throw new apiError(400, "Subject id is required..");
    }

    const subject = await Subject.findById(subjectId);

    if (!subject) {
        throw new apiError(404, "No such subject found..");
    }

    const notes = await Note.find({ subject: subjectId })
    .sort({createdAt: -1})
    .limit(limit)
    .skip((page-1) * limit)
    .populate("subject", "subjectName")

    const count = await Note.countDocuments({ subject: subjectId });

    if (!notes || notes.length === 0) {
        throw new apiError(400, "No  such notes found..");
    }

    return res.status(200).json(
        new apiResponse(
            200,
            {
                notes,
                totalPage: Math.ceil(count/limit),
                currentPage: page
            }, 
            "Fetched notes successfully..")
    )
});

const getNoteById = asyncHandler(async(req, res) => {
    const { noteId } = req.params;

    if (!noteId) {
        throw new apiError(400, "Note id is required..");
    }

    const note = await Note.findById(noteId);
    if (!note) {
        throw new apiError(404, "No such note found..");
    }

    return res.status(200).json(
        new apiResponse(200, note, "Fetched successfully..")
    )
});

const updateNotes = asyncHandler(async(req, res) => {
    const { title, description, subjectId, semesterId, departmentId } = req.body;
    const { noteId } = req.params;

    if (!noteId) {
        throw new apiError(400, "Note id is required..");
    }

    const note = await Note.findById(noteId)
    .populate("subject", "subjectName")

    if (!note) {
        throw new apiError(404, "No such note found..");
    }

    const noteNewFilePath = req.files?.path;
    
    if (noteNewFilePath) {
        try {
            await cloudinary.uploader.destroy(note.notePublicId, {
                resource_type: "auto"
            })
        } catch (error) {
            throw new apiError(500, "Failed to change note file", error.message);
        }
    }

    let newNotes;
    if (noteNewFilePath) {
        newNotes = await uploadToCloudinary(noteNewFilePath);

        if (!newNotes) {
            throw new apiError(400, "Note new file path is required..");
        }
    }

    const updatedFields = {};
    if(title) updatedFields.title = title;
    if(description) updatedFields.description = description;
    if(subjectId) updatedFields.subject = subjectId;
    if(semesterId) updatedFields.semester = semesterId;
    if(departmentId) updatedFields.department = departmentId;
    if(newNotes) {
        updatedFields.noteUrl = newNotes.secure_url;
        updatedFields.notePublicId = newNotes.public_id;
    }

    const updatedNote = await Note.findByIdAndUpdate(
        noteId,
        { $set: updatedFields },
        { new: true }
    )
    .populate("subject", "subjectName")

    return res.status(200).json(
        new apiResponse(200, updatedNote, "Notes updated successfully..")
    )
});

const deleteNotes = asyncHandler(async(req, res) => {
    const { noteId } = req.params;

    if (!noteId) {
        throw new apiError(400, "Note id is required...");
    }

    await Note.findByIdAndDelete(noteId);

    return res.status(200).json(
        new apiResponse(200, "", "Note deleted successfully..")
    )
});

module.exports = {
    addNotes,
    getNoteBySub,
    getNoteById,
    updateNotes,
    deleteNotes
}