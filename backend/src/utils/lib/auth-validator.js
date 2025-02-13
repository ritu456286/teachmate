import Joi from "joi";
export const signupSchema = Joi.object({
    fullName: Joi.string().min(3).max(50).required().messages({
        "string.empty": "Full Name is required",
        "string.min": "Full name must be atleast 3 characters",
    }),
    
})