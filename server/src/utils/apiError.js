class apiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error = null,
        stack
    ){
        super(message)
        this.name = this.constructor.name
        this.statusCode = statusCode
        this.message = message
        this.data = null,
        this.error = error
        this.success = false
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = apiError;