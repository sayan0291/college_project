const asyncHandler = require("../utils/asyncHandler.js");
const apiResponse = require("../utils/apiResponse.js");
const apiError = require("../utils/apiError.js");
const User = require("../models/uesr.model.js");
const jwt = require("jsonwebtoken");

const generateAccessAndRefreshToken = async (userId) => {
  const user = await User.findById(userId);

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: true });

  return { accessToken, refreshToken };
};

const register = asyncHandler(async (req, res) => {
  const {
    userName,
    email,
    registrationNumber,
    password,
    role,
    department,
    semester,
  } = req.body;

  if (!email && !registrationNumber) {
    throw new apiError(400, "Email or registration number is needed..");
  }

  const query = [];
  if (email) query.push({ email });
  if (registrationNumber) query.push({ registrationNumber });

  const existingUser = await User.findOne({ $or: query });
  // console.log(existingUser);
  if (existingUser) {
    throw new apiError(400, "User already exists..");
  }

  // Validate semester is provided for students
  if (role === "Student" && !semester) {
    throw new apiError(400, "Semester is required for students..");
  }

  const user = await User.create({
    userName,
    role,
    email,
    registrationNumber,
    password,
    department,
    semester,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new apiError(500, "Something happend during registration process..");
  }

  return res
    .status(201)
    .json(new apiResponse(201, createdUser, "Registered successfully.."));
});

const logIn = asyncHandler(async (req, res) => {
  const { email, registrationNumber, password } = req.body;

  if (!email && !registrationNumber) {
    throw new apiError(400, "email or registration number is required..");
  }

  const user = await User.findOne({
    $or: [{ email }, { registrationNumber }],
  }).select("+password");
  if (!user) {
    throw new apiError(400, "Register first..");
  }

  if (user.role === "Teacher") {
    if (!email) {
        throw apiError(400, "Email is required..");
    }
    if (!password) {
      throw new apiError(400, "Password is required..");
    }
    
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      throw new apiError(400, "Incorrect password..");
    }
  }

  if (user.role === "Student") {
    if (!registrationNumber) {
        throw new apiError(400, "Registration Number is required..");
    }
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const option = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, option)
    .cookie("refreshToken", refreshToken, option)
    .json(
      new apiResponse(
        200,
        {
          user: loggedInUser,
          refreshToken,
          accessToken,
        },
        "User logged in successfully.."
      )
    );
});

const logOut = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    { new: true }
  );

  const option = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", "", { ...option, maxAge: 0 })
    .cookie("refreshToken", "", { ...option, maxAge: 0 })
    .json(new apiResponse(200, "", "user logged out successfully.."));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const isComingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!isComingRefreshToken) {
    throw new apiError(400, "Unauthorized access..");
  }

  try {
    const decodedToken = jwt.verify(
      isComingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken._id);
    if (!user) {
      throw new apiError(401, "Invalid token..");
    }

    if (isComingRefreshToken !== user?.refreshToken) {
      throw new apiError(400, "Token is invalid or expired..");
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    const option = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, option)
      .cookie("refreshToken", newRefreshToken, option)
      .json(
        new apiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access Token refreshed.."
        )
      );
  } catch (error) {
    throw new apiError(500, error.message);
  }
});

module.exports = {
  register,
  logIn,
  logOut,
  refreshAccessToken,
};
