import type { Response } from "express";
import { User } from "../user/user.model.js";
import type { IAuth } from "./auth.interface.js"

import bcrypt from "bcryptjs";

const login = async (payload: IAuth, res: Response) => {
    const { email, password } = payload;

    const isUserExist = await User.findOne({ email })

    if (!isUserExist) {
        // throw new Error("user doesn't exist")
        res.status(400).json({
            status: "error",
            // message: "user doesn't exist"
            message: "email doesn't match"
        })
    }

    const isPasswordMatch = await bcrypt.compare(payload.password, isUserExist?.password as string);

    return isPasswordMatch;
}




export const AuthServices = {
    login,
}