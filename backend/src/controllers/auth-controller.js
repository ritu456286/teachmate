import { StatusCodes } from "http-status-codes"
import { SuccessResponse, ErrorResponse } from "../utils/common/index.js"
import { AuthService } from "../services/index.js";
import { generateToken } from "../utils/lib/auth-utils.js";
import { AppError } from "../utils/error/app-error.js";

const authService = new AuthService();

/**
 * POST: /auth/signup
 * Handles user signup and sets authentication token in a cookie.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body containing user data.
 * @param {string} req.body.email - User's email address.
 * @param {string} req.body.fullName - User's full name.
 * @param {string} req.body.password - User's password.
 * @param {string} req.body.role - User's role (either "student" or "teacher").
 * @param {Object} res - Express response object.
 * 
 * @returns {Object} JSON response with the newly created user data.
 * 
 * @throws {AppError} If required fields are missing, email already exists, or an internal error occurs.
 */
const signup = async (req, res) => {
    try {
        
        const newUser = await authService.signup(req.body);    
        
        generateToken(newUser._id, res);
        
        SuccessResponse.data = newUser;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);    
    } catch (error) {
       
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

const login = (req, res) => {
    const { email, password, role } = req.body;

    // if(!email || )
}

const logout = (req, res) => {
    
}

const forgotPassword = (req, res) => {

}

export const AuthController = {
    signup,
    login,
    logout,
    forgotPassword,
}
