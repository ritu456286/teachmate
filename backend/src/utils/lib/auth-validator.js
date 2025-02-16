import Joi from "joi";

export const signupSchema = Joi.object({
    fullName: Joi.string().min(3).max(50).required().messages({
        "string.empty": "Full Name is required",
        "string.min": "Full name must be at least 3 characters",
        "string.max": "Full name must be at most 50 characters",
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email format",
    }),
    password: Joi.string().min(6).max(30).required().messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 6 characters",
        "string.max": "Password must be at most 30 characters",
    }),
    role: Joi.string().valid("student", "teacher").required().messages({
        "string.empty": "Role is required",
        "any.only": "Role must be either 'student' or 'teacher'",
    }),
});
