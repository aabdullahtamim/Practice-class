import httpStatus from "http-status-codes";
import { User } from "./user.model.js";
const createUser = async (req, res) => {
    const user = await User.find({ email: req.body.email });
    if (user.length > 0) {
        res.status(httpStatus.UNAUTHORIZED).json({
            status: "error",
            message: "user already exist",
        });
    }
    const createdUser = await User.insertOne(req.body);
    return createdUser;
};
export const UserServices = {
    createUser,
};
//# sourceMappingURL=user.services.js.map