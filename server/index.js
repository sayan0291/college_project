const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDb = require("./src/config/db");
const userRoute = require("./src/routes/user.route.js");
const departmentRoute = require("./src/routes/department.route.js");

const app = express();
const port = process.env.PORT;

app.use(cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use("/user", userRoute);
app.use("/department", departmentRoute);

connectDb()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is listening at http://localhost:${port}`);
    })
})
.catch((error) => {
    console.log("MongoDb connection lost.. ", error.message);
})