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
router.get("/fetch", verifyJwt, getNoteBySub);
router.get("/fetch/:noteId", verifyJwt, getNoteById);
router.put("/update", verifyJwt, isTeacher, updateNotes);
router.delete("/delete", verifyJwt, isTeacher, deleteNotes);

module.exports = router;