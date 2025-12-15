const express = require("express");
const router = express.Router();
const {
  addDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/department.controller.js");
const verifyJwt = require("../middlewares/auth.middleware.js");
const isTeacher = require("../middlewares/isTeacher.middleware.js");

router.post("/add", verifyJwt, isTeacher, addDepartment);
router.get("/fetch", verifyJwt, getAllDepartments);
router.get("/fetch/:departmentId", verifyJwt, getDepartmentById);
router.put("/update/:departmentId", verifyJwt, isTeacher, updateDepartment);
router.delete("/delete/:departmentId", verifyJwt, isTeacher, deleteDepartment);

module.exports = router;