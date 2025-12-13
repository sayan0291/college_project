const asyncHandler = require("../utils/asyncHandler.js");
const apiResponse = require("../utils/apiResponse.js");
const apiError = require("../utils/apiError.js");
const Subject = require("../models/subject.model.js");
const Semester = require("../models/semester.model.js");

const addSubject = asyncHandler(async(req, res) => {
    const { subjectName, departmentId, semesterId } = req.body;
    
    if (!subjectName || !departmentId || !semesterId) {
        throw new apiError(400, "All fielda are required..");
    }

    const existingSub = await Subject.find({subjectName});
    if (existingSub) {
        throw new apiError(400, "Subject already exists..");
    }

    const subject = await Subject.create({
        subjectName,
        department: departmentId,
        semester: semesterId
    });

    return res.status(201).json(
        new apiResponse(201, subject, "New subject added successfully..")
    )
});

const getSubjectBySem = asyncHandler(async(req, res) => {
    const { semesterId } = req.params;

    if (!semesterId) {
        throw new apiError(400, "Semester id is required..");
    }

    const semester = await Semester.findById(semesterId);
    if (!semester) {
        throw new apiError(404, "No semester found..");
    }

    const subjects = await Subject.find({ semester: semesterId });
    if (!subjects) {
        throw new apiError(404, "No subjects found..");
    }

    return res.status(200).json(
        new apiError(200, subjects, "Subjects fetched successfully..")
    )
});

const getSubjectById = asyncHandler(async(req, res) => {
    const { subjectId } = req.params;

    if (!subjectId) {
        throw new apiError(400, "Subject id is required..");
    }

    const subject = await Subject.findById(subjectId);
    if (!subject) {
        throw new apiError(404, "No subject found..");
    }

    return res.status(200).json(
        new apiError(200, subject, "Subject fetched successfully..")
    )
});

const updateSubject = asyncHandler(async(req, res) => {
    const { subjectName } = req.body;
    const { subjectId } = req.params;

    if (!subjectId) {
        throw new apiError(400, "Subject id is required..");
    }

    const subject = await Subject.findById(subjectId);
    if (!subject) {
        throw new apiError(404, "No subject found..");
    }

    const updateFields = {};
    if(subjectName) updateFields.subjectName = subjectName;

    const updatedSubject = await Subject.findByIdAndUpdate(
        subjectId,
        { $set: updateFields },
        { new: true }
    );

    return res.status(200).json(
        new apiResponse(200, updatedSubject, "Subject updated successfully..")
    )
});

const deleteSubject = asyncHandler(async(req, res) => {
    const { subjectId } = req.params;

    if (!subjectId) {
        throw new apiError(400, "Subject id is required..");
    }

    await Subject.findByIdAndDelete(subjectId);

    return res.status(200).json(
        new apiResponse(200, "Deleted subject successfully..")
    )
});

module.exports = {
    addSubject,
    getSubjectBySem,
    getSubjectById,
    updateSubject,
    deleteSubject
}