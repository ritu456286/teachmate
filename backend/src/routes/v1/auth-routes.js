import {Router} from "express";
import { AuthController } from "../../controllers/index.js";
import { AuthMiddleware } from "../../middlewares/auth-middleware.js";
import { signupSchema } from "../../utils/lib/auth-validator.js";
const router = Router();

// /api/v1/auth/ : POST signup
router.post("/signup", AuthMiddleware.validateCreateRequest(signupSchema), AuthController.signup)

// /api/v1/auth/ : POST login
router.post("/login", AuthController.login)

// /api/v1/auth/ : POST : logout
router.post("/logout", AuthController.logout)

// /api/v1/auth/ : POST forgot-password
router.post("/forgot-password", AuthController.forgotPassword)

router.get("/check", )
export const authRoutes = router;