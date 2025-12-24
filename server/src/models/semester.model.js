const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const semesterSchema = new Schema({
    semesterName: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    },
    
}, {timestamps: true});

const Semester = mongoose.model("Semester", semesterSchema);

module.exports = Semester;