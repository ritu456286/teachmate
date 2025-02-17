import { StatusCodes } from "http-status-codes";
import { AuthService } from "../services/index.js";
import { ErrorResponse } from "../utils/common/index.js";
import { AppError } from "../utils/error/app-error.js";

const authService = new AuthService();

const authenticateJWT = async (req, res, next) => {
    try {

        const user = await authService.findUserByToken(req.cookies.jwt);
        
        req.user = user;
        
        next();

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

const validateRequest = (schema) => (req, res, next) => {

    // console.log("Inside middleware")
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        const validationErrors = error.details.map((err) => err.message);
        ErrorResponse.error = new AppError(validationErrors, StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next(); 
};


export const AuthMiddleware = {
    authenticateJWT,
    validateRequest,
}