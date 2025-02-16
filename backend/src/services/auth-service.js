import { UserRepository, TeacherRepository, StudentRepository } from "../repositories/index.js";
import jwt from "jsonwebtoken"
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/error/app-error.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/lib/auth-utils.js";


export class AuthService {
   

    constructor() {
        this.userRepo = new UserRepository();
        this.studentRepo = new StudentRepository();
        this.teacherRepo = new TeacherRepository();
    }


    async signup(userData){
    
        try {

            const {email, password, fullName, role} = userData; 
            // if(!email || !password || !fullName || !role){
            //     throw new AppError("All fields are required!", StatusCodes.BAD_REQUEST);
            // }
            const existingUser = await this.userRepo.findByEmail(email);
            if(existingUser){
                throw new AppError("Email already exists", StatusCodes.CONFLICT);
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            userData.password = hashedPassword;
            
            // Remove role before creating a user (Mongoose sets it automatically)
            delete userData.role;
            
            let newUser;
            // Store user based on role

            if (role === "student") {
                newUser = await this.studentRepo.create(userData);
            } else if (role === "teacher") {
                newUser = await this.teacherRepo.create(userData);
            } else {
                throw new AppError("Invalid role! Must be either 'student' or 'teacher'", StatusCodes.BAD_REQUEST);
            } 

            return newUser;

        } catch (error) {
           
        
            if (error instanceof AppError) {
                throw error;
            }

            throw new AppError("An error occurred while signing up the user", StatusCodes.INTERNAL_SERVER_ERROR);
        }       
    }


    async login(){

    }

    async findUserByToken(token){ //token is jwt token
        if (!token) {
            throw new AppError("Invalid or expired token", StatusCodes.UNAUTHORIZED);
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            throw new AppError("Invalid or expired token", StatusCodes.UNAUTHORIZED);
        }

        const user = await userRepo.findUserById(decoded.userId);
        if (!user) {
            throw new AppError("User not found", StatusCodes.NOT_FOUND);
        }

        return user;
    }

}