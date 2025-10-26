import type { NextFunction, Request, Response } from "express";


export const validationCheck = (scema: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            await scema.parseAsync(req.body);
            next();
        } catch (error: any) {
            const newArr = JSON.parse(error).map((errorItem: any) => {
                return {
                    path: errorItem.path[0],
                    message: errorItem.message
                }
            })
            console.log(newArr);

            next({
                type: "ZodError",
                error: newArr
            })
        }

    }
}