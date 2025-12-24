const express = require("express");
const router = express.Router();
const {
    addSubject,
    getSubjectBySem,
    getSubjectById,
    updateSubject,
    deleteSubject
} = require("../controllers/subject.controller.js");
const verifyJwt = require("../middlewares/auth.middleware.js");
const isTeacher = require("../middlewares/isTeacher.middleware.js");

router.post("/add", verifyJwt, isTeacher, addSubject);
router.get("/fetch/:semesterId", verifyJwt, getSubjectBySem);
router.get("/fetch/subject/:subjectId", verifyJwt, isTeacher, getSubjectById);
router.put("/update/:subjectId", verifyJwt, isTeacher, updateSubject);
router.delete("/delete/:subjectId", verifyJwt, isTeacher, deleteSubject);

module.exports = router;