import {Router} from "express";
import { AuthController } from "../../controllers/index.js";
import { AuthMiddleware } from "../../middlewares/auth-middleware.js";
import { loginSchema, signupSchema } from "../../utils/lib/auth-validator.js";
const router = Router();

// /api/v1/auth/signup : POST signup
router.post("/signup", AuthMiddleware.validateRequest(signupSchema), AuthController.signup)

// /api/v1/auth/login : POST login
router.post("/login", AuthMiddleware.validateRequest(loginSchema), AuthController.login)

// /api/v1/auth/logout : POST : logout
router.post("/logout", AuthController.logout)

// /api/v1/auth/forgot-password : POST forgot-password
router.post("/forgot-password", AuthController.forgotPassword)

// router.get("/check", )
export const authRoutes = router;