const asyncHandler = require("../utils/asyncHandler.js");
const apiError = require("../utils/apiError.js");

const isTeacher = asyncHandler(async(req, res, next) => {
    if (req.user.role !== "Teacher") {
        throw new apiError(401, "You are a student..");
    }
    next();
});

module.exports = isTeacher;