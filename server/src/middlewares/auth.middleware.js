const asyncHandler = require("../utils/asyncHandler.js");
const apiError = require("../utils/apiError.js");
const jwt = require("jsonwebtoken");
const User = require("../models/uesr.model.js");

const verifyJwt = asyncHandler(async(req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new apiError(400, "Unauthorized access..");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken._id).select(
            "-password -refreshToken"
        );

        if (!user) {
            throw new apiError(400, "Invalid or expired accessToken..");
        }

        req.user = user;
        next();

    } catch (error) {
        throw new apiError(401, "Invalid access token", error.message);
    }
});

module.exports = verifyJwt;