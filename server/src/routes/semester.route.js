const express = require("express");
const router = express.Router();
const {
    addSemester,
    getSemesterByDepartment,
    getSemesterById,
    updateSemester,
    deleteSemester
} = require("../controllers/semester.controller.js");
const verifyJwt = require("../middlewares/auth.middleware.js");
const isTeacher = require("../middlewares/isTeacher.middleware.js");

router.post("/add", verifyJwt, isTeacher, addSemester);
router.get("/fetch/:departmentId", verifyJwt, getSemesterByDepartment);
router.get("/fetch/:semesterId", verifyJwt, getSemesterById);
router.put("/update", verifyJwt, isTeacher, updateSemester);
router.delete("/delete", verifyJwt, isTeacher, deleteSemester);

module.exports = router;