const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal server error";
    let errors = err.errors || [];

    // Handle mongoose cast error (Invalid objectId)
    if(err.name === "CastError"){
        statusCode = 400;
        message = `Invalid ${err.path}: ${err.value}`;
    }

    // Handle mongoose duplicate key error
    if(err.code || err.code === 11000){
        statusCode = 400;
        const field = Object.keys(err.keyValue)[0];
        message = `${field} already exists`;
    }

    // Handle Mongoose Validation Error
    if(err.name === "ValidationError"){
        statusCode = 422;
        errors = Object.values(err.errors).map(val => ({
            field: val.path,
            message: val.message
        }));
        message = "Validation Failed";
    }

    // Hide stack trace in production
    const response = {
        success: false,
        errors,
        message
    };

    res.status(statusCode).json(response);
}

module.exports = errorHandler;