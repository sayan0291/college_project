const express = require("express");
const router = express.Router();
const {
    register,
    logIn,
    logOut,
    refreshAccessToken
} = require("../controllers/user.controller.js");
const verifyJwt = require("../middlewares/auth.middleware.js");

router.post("/register", register);
router.post("/login", logIn);
router.post("/logout", verifyJwt, logOut);
router.post("/refreshAccessToken", refreshAccessToken);

module.exports = router;