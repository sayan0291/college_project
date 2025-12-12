const asyncHandler = require("../utils/asyncHandler.js");
const apiResponse = require("../utils/apiResponse.js");
const apiError = require("../utils/apiError.js");
const Subject = require("../models/subject.model.js");

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

module.exports = {
    addSubject
}