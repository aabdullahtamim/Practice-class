import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            minlength: [2, "Name must be at least 2 characters long"],
            max_length: [20, "Name can't exceed 20 characters"],
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please provide a valid email address",
            ],
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [3, "Password must be at least 3 characters long"],
            select: false, // hide password in queries by default
        },

        avatar: {
            type: String,
            default:
                "",
        },

        isVerified: {
            type: Boolean,
            default: false,
        },

        isPremium: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, // adds createdAt & updatedAt automatically
        versionKey: ""
    }
);

export const User = mongoose.model("User", userSchema);