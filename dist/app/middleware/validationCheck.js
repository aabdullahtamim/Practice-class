export const validationCheck = (scema) => {
    return async (req, res, next) => {
        try {
            await scema.parseAsync(req.body);
            next();
        }
        catch (error) {
            const newArr = JSON.parse(error).map((errorItem) => {
                return {
                    path: errorItem.path[0],
                    message: errorItem.message
                };
            });
            console.log(newArr);
            next({
                type: "ZodError",
                error: newArr
            });
        }
    };
};
//# sourceMappingURL=validationCheck.js.map