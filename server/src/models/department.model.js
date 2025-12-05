const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    departmentName: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
    
}, { timestamps: true });

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;