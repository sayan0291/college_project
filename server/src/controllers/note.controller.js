const asyncHandler = require("../utils/asyncHandler.js");
const apiResponse = require("../utils/apiResponse.js");
const apiError = require("../utils/apiError.js");
const Note = require("../models/notes.model.js");
const Subject = require("../models/subject.model.js");
const uploadToCloudinary  = require("../config/cloudinary.js");

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

    return res.status(201).json(
        new apiResponse(201, notes, "Note added successfully..")
    )
});

const getNoteBySub = asyncHandler(async(req, res) => {
    const { subjectId } = req.params;

    if (!subjectId) {
        throw new apiError(400, "Subject id is required..");
    }

    const subject = await Subject.findById(subjectId);
    if (!subject) {
        throw new apiError(404, "No such subject found..");
    }

    const notes = await Note.find({ subject: subjectId });
    if (!notes || notes.length === 0) {
        throw new apiError(400, "No  such notes found..");
    }

    return res.status(200).json(
        new apiResponse(200, notes, "Fetched notes successfully..")
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

module.exports = {
    addNotes,
    getNoteBySub,
    getNoteById
}