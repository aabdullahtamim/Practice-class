import httpStatus from "http-status-codes";
export const globalErrorHandler = (err, req, res, next) => {
    const statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    const responseError = {
        status: "error",
        message: "",
        errors: []
    };
    // zod error check
    if (err.name == "ZodError") {
        const updateErrors = JSON.parse(err.message).map((error) => {
            return {
                path: error.path[0],
                message: error.message
            };
        });
        responseError.message = err.name;
        responseError.errors = updateErrors;
    }
    res.status(statusCode).json(responseError);
};
//# sourceMappingURL=globalErrorHandler.js.map