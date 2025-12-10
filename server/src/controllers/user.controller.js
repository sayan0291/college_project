const asyncHandler = require("../utils/asyncHandler.js");
const apiResponse = require("../utils/apiResponse.js");
const apiError = require("../utils/apiError.js");
const User = require("../models/uesr.model.js");
const jwt = require("jsonwebtoken");

const generateAccessAndRefreshToken = async(userId) => {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: true });

    return { accessToken, refreshToken };
}

const register = asyncHandler(async(req, res) => {
    const { userName, email, registrationNumber, password, department, semester } = req.body;

    if (!email && !registrationNumber) {
        throw new apiError(400, "Email or registration number is needed..");
    }

    const existingUser = await User.find({$or: [{email}, {registrationNumber}]});

    if (!existingUser) {
        throw new apiError(400, "User already exists..");
    }

    const user = await User.create({
        userName,
        email,
        registrationNumber,
        password,
        department,
        semester
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createdUser) {
        throw new apiError(500, "Something happend during registration process..");
    }

    return res.status(201).json(
        new apiResponse(201, createdUser, "Registered successfully..")
    )
});

const logIn = asyncHandler(async(req, res) => {
    const { email, registrationNumber, password } = req.body;

    if (!email && !registrationNumber) {
        throw new apiError(400, "email or registration number is required..");
    }

    const user = await User.find({$or: [{email}, {registrationNumber}]});
    if (!user) {
        throw new apiError(400, "Register first..");
    }

    if (password) {
        const isPasswordValid = await user.isPasswordCorrect(password);
        if (!isPasswordValid) {
            throw new apiError(400, "Incorrect password..");
        }
    };

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    const option = {
        httpOnly: true,
        secure: true
    };

    return res
    .status(200)
    .cookies("accessToken", accessToken, option)
    .cookies("refreshToken", refreshToken, option)
    .json(
        new apiResponse(
            200,
            {
                user: loggedInUser,
                refreshToken,
                accessToken
            },
            "User logged in successfully.."
        )
    )
});

const logOut = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: { refreshToken: undefined }
        },
        { new: true }
    );

    const option = {
        httpOnly: true,
        secure: true
    };

    return res
    .status(200)
    .cookies("accessToken", option)
    .cookies("refreshToken", option)
    .json(
        new apiResponse(200, "", "user logged out successfully..")
    )
});

const refreshAccessToken = asyncHandler(async(req, res) => {
    const isComingRefreshToken = req.cookies.accessToken || req.body.accessToken;

    if (!isComingRefreshToken) {
        throw new apiError(400, "Unauthorized access..");
    }

    try {
        const decodedToken = jwt.verify(
            isComingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        const user = await User.findById(decodedToken._id)
        if (!user) {
            throw new apiError("Invalid token..")
        }

        if (isComingRefreshToken !== user?.refreshToken) {
            throw new apiError(400, "Token is invalid or expired..");
        }

        const { accessToken, newRefreshToken } = await generateAccessAndRefreshToken(user._id);

        const option = {
            httpOnly: true,
            secure: true
        }

        return res
        .status(200)
        .cookies("accessToken", accessToken, option)
        .cookies("refreshToken", newRefreshToken, option)
        .json(
            new apiResponse(
                200, 
                { accessToken, refreshToken: newRefreshToken},
                "Access Token refreshed.."
            )
        );
    } catch (error) {
        throw new apiError(500, error.message);
    }
})

module.exports = {
    register,
    logIn,
    logOut,
    refreshAccessToken
}