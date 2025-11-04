import { User } from "../user/user.model.js";
import bcrypt from "bcryptjs";
const login = async (payload, res) => {
    const { email, password } = payload;
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
        // throw new Error("user doesn't exist")
        res.status(400).json({
            status: "error",
            // message: "user doesn't exist"
            message: "email doesn't match"
        });
    }
    const isPasswordMatch = await bcrypt.compare(payload.password, isUserExist?.password);
    return isPasswordMatch;
};
export const AuthServices = {
    login,
};
//# sourceMappingURL=auth.services.js.map