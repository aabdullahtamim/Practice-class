import type { Request, Response } from "express"
import httpStatus from "http-status-codes"
import { User } from "./user.model.js"
import { encryptPassword } from "../../../utils/password.js"

const createUser = async (req: Request, res: Response,) => {
    const user = await User.find({ email: req.body.email })

    if (user.length > 0) {
        res.status(httpStatus.UNAUTHORIZED).json({
            status: "error",
            message: "user already exist",
        })
    }


    const createdUser = await User.insertOne({
        ...req.body,
        password: await encryptPassword(req.body.password)
    });

    return createdUser;
}


export const UserServices = {
    createUser,
}