const asyncHandler = require("../utils/asyncHandler.js");
const apiError = require("../utils/apiError.js");
const apiResponse = require("../utils/apiResponse.js");
const Semester = require("../models/semester.model.js");
const Department = require("../models/department.model.js");

const addSemester = asyncHandler(async(req, res) => {
    const { semesterName, number, departmentId } = req.body;

    if (!semesterName || !number || !departmentId) {
        throw new apiError(400, "All fields are required..");
    }

    const deptExist = await Department.findById(departmentId);
    if (!deptExist) {
        throw new apiError(404, "Department not found..");
    }

    const existingSem = await Semester.findOne({ number, department: departmentId});
    if (existingSem) {
        throw new apiError(400, "Semester already exists for this department..");
    }

    const semester = await Semester.create({
        semesterName,
        number,
        department: departmentId
    });

    return res.status(201).json(
        new apiResponse(201, semester, "Add semester successfully..")
    )
});

const getSemesterByDepartment = asyncHandler(async(req, res) => {
    const { departmentId } = req.params;

    if (!departmentId) {
        throw new apiError(400, "Department id is required..");
    }

    const department = await Department.findById(departmentId);
    if (!department) {
        throw new apiError(404, "No department found..");
    }

    const semesters = await Semester.find({ department: departmentId });
    if (!semesters || semesters.length === 0) {
        throw new apiError(404, "No semester found..");
    }

    return res.status(200).json(
        new apiResponse(200, semesters, "Fetched all semester through department..")
    )
});

const getSemesterById = asyncHandler(async(req, res) => {
    const { semesterId } = req.params;

    if (!semesterId) {
        throw new apiError(400, "semesterId is required..");
    }

    const semester = await Semester.findById(semesterId);
    if (!semester) {
        throw new apiError(404, "No semester found..");
    }

    return res.status(200).json(
        new apiResponse(200, semester, "Fetched semester successfully..")
    )
});

const updateSemester = asyncHandler(async(req, res) => {
    const { semesterName, number, departmentId } = req.body;
    const { semesterId } = req.params;

    if (!semesterId) {
        throw new apiError(400, "Semester id is required..");
    }

    const semester = await Semester.findById(semesterId);
    if (!semester) {
        throw new apiError(404, "No semester found..");
    }

    const updatedSemester = {};
    if(semesterName) updatedSemester.semesterName = semesterName;
    if(number) updatedSemester.number = number;
    if(departmentId) updatedSemester.department = departmentId;

    const update = await Semester.findByIdAndUpdate(
        semesterId,
        { $set: updatedSemester },
        { new: true }
    );

    return res.status(200).json(
        new apiResponse(200, update, "Update semester successfully..")
    )
});

const deleteSemester = asyncHandler(async(req, res) => {
    const { semesterId } = req.params;

    if (!semesterId) {
        throw new apiError(400, "Semester id is required..");
    }

    await Semester.findByIdAndDelete(semesterId);

    return res.status(200).json(
        new apiResponse(200, "Delete semester successfully..")
    )
});

module.exports = {
    addSemester,
    getSemesterByDepartment,
    getSemesterById,
    updateSemester,
    deleteSemester
}