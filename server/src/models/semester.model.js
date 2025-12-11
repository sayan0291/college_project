const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const semesterSchema = new Schema({
    semester: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    },
    
}, {timestamps: true});

const Semester = mongoose.model("Semester", semesterSchema);

module.exports = Semester;