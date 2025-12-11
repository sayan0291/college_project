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
    },
    isActive: {
        type: Boolean,
        default: true
    }
    
}, { timestamps: true });

departmentSchema.pre("findOneAndDelete", async function (next) {
    const departmentId = this.getQuery()._id;

    const Semester = mongoose.model("Semester");
    const Subject = mongoose.model("Subject");
    const Note = mongoose.model("Note");

    const semesters = await Semester.find({department: departmentId});
    const semesterIds = semesters.map(sem => sem._id)

    const subjects = await Subject.find({ semester: {$in: semesterIds}});
    const subjectIds = subjects.map(sub => sub._id);

    await Note.deleteMany({ subject: {$in: subjectIds}});

    await Subject.deleteMany({ _id: { $in: subjectIds }});

    await Semester.deleteMany({ _id: { $in: semesterIds }});

    next();
})

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;