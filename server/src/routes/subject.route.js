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
router.get("/fetch", verifyJwt, getSubjectBySem);
router.get("/fetch/:subjectId", verifyJwt, isTeacher, getSubjectById);
router.put("/update", verifyJwt, isTeacher, updateSubject);
router.delete("/delete", verifyJwt, isTeacher, deleteSubject);

module.exports = router;