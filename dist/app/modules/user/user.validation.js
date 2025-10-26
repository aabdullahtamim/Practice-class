import * as z from "zod";
export const createUserValidation = z.object({
    name: z
        .string()
        .min(3, { message: "Please write your full name (at least 3 characters)" }),
    email: z
        .string()
        .email({ message: "Please enter a valid email address" }),
    password: z
        .string()
        .min(3, { message: "Password must be at least 3 characters long" }),
    avatar: z
        .string()
        .url({ message: "Avatar must be a valid URL" })
        .optional(),
    isVerified: z
        .boolean()
        .default(false),
    isPremium: z
        .boolean()
        .default(false),
});
//# sourceMappingURL=user.validation.js.map