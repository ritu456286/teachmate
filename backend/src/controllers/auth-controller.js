import { StatusCodes } from "http-status-codes"
import { SuccessResponse } from "../utils/common/index.js"

const signup = (req, res) => {
    const { fullName, email, password} = req.body;
    try {
        
    } catch (error) {
        
    }
}

const login = (req, res) => {

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
