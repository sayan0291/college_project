const express = require("express");
const router = express.Router();
const {
    addNotes,
    getNoteBySub,
    getNoteById,
    updateNotes,
    deleteNotes
} = require("../controllers/note.controller.js");
const verifyJwt = require("../middlewares/auth.middleware.js");
const isTeacher = require("../middlewares/isTeacher.middleware.js");
const upload = require("../middlewares/multer.middleware.js");

router.post("/add", verifyJwt, isTeacher, upload.single("noteUrl"), addNotes);
router.get("/fetch/:subjectId", verifyJwt, getNoteBySub);
router.get("/fetch/note/:noteId", verifyJwt, getNoteById);
router.put("/update/:noteId", verifyJwt, isTeacher, upload.single("noteUrl"), updateNotes);
router.delete("/delete/:noteId", verifyJwt, isTeacher, deleteNotes);

module.exports = router;