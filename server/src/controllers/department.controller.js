const asyncHandler = require("../utils/asyncHandler.js");
const apiError = require("../utils/apiError.js");
const apiResponse = require("../utils/apiResponse.js");
const Department = require("../models/department.model.js");
const Subject = require("../models/subject.model.js");
const Semester = require("../models/semester.model.js");
const Note = require("../models/notes.model.js");

const addDepartment = asyncHandler(async (req, res) => {
  const { departmentName, year, isActive } = req.body;

  if (!departmentName || !year) {
    throw new apiError(400, "Department name and year is required..");
  }

  const existingDepartment = await Department.findOne({ departmentName });
  if (existingDepartment) {
    throw new apiError(400, "Department name already exists..");
  }

  const department = await Department.create({
    departmentName,
    year,
    isActive: Boolean(isActive),
  });

  const newDepartment = await Department.findById(department._id);
  if (!newDepartment) {
    throw new apiError(500, "Something happend during server issue..");
  }

  return res
    .status(201)
    .json(new apiResponse(201, newDepartment, "Department add successfully.."));
});

const getAllDepartments = asyncHandler(async (req, res) => {
  const departments = await Department.find();

  if (!departments || departments.length === 0) {
    throw new apiError(404, "No departments found");
  }

  return res
    .status(200)
    .json(
      new apiResponse(200, departments, "All department fetched successfully..")
    );
});

const getDepartmentById = asyncHandler(async (req, res) => {
  const { departmentId } = req.params;

  if (!departmentId) {
    throw new apiError(400, "Department id is required..");
  }

  const department = await Department.findById(departmentId);

  if (!department) {
    throw new apiError(404, "No department found..");
  }

  return res
    .status(200)
    .json(
      new apiResponse(200, department, "Department fetched successfully..")
    );
});

const updateDepartment = asyncHandler(async (req, res) => {
  const { departmentId } = req.params;
  const { departmentName, isActive } = req.body;

  if (!departmentId) {
    throw new apiError(400, "Department id is required..");
  }

  const department = await Department.findById(departmentId);

  if (!department) {
    throw new apiError(404, "No department found..");
  }

  const updatedFields = {};
  if (departmentName) updatedFields.departmentName = departmentName;
  if (typeof isActive === "boolean") updatedFields.isActive = isActive;

  const updatedDepartment = await Department.findByIdAndUpdate(
    departmentId,
    { $set: updatedFields },
    { new: true }
  );

  return res
    .status(200)
    .json(
      new apiResponse(
        200,
        updatedDepartment,
        "Department updated successfully.."
      )
    );
});

const deleteDepartment = asyncHandler(async (req, res) => {
  const { departmentId } = req.params;

  if (!departmentId) {
    throw new apiError(400, "department id is required..");
  }

  await Department.findByIdAndDelete(departmentId);

  return res
    .status(200)
    .json(new apiResponse(200, "", "Department deleted successfully.."));
});

module.exports = {
  addDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
