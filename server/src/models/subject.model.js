const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subjectName: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    }
    
}, {timestamps: true});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;