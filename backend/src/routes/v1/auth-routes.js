import {Router} from "express";
import { AuthController } from "../../controllers/index.js";
const router = Router();

// /api/v1/auth/ : POST signup
router.post("/signup", AuthController.signup)

// /api/v1/auth/ : POST login
router.post("/login", AuthController.login)

// /api/v1/auth/ : POST : logout
router.post("/logout", AuthController.logout)

// /api/v1/auth/ : POST forgot-password
router.post("/forgot-password", AuthController.forgotPassword)

router.get("/check", )
export const authRoutes = router;