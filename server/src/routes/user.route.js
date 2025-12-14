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
router.get("/refreshAccessToken", verifyJwt, refreshAccessToken);

module.exports = router;