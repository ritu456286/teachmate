import {Router} from "express";
import { authRoutes } from "./auth-routes.js";
import { InfoController } from "../../controllers/index.js";

const router = Router();
// /api/v1/auth
router.use("/auth", authRoutes)

router.get("/info", InfoController.info);

export const v1Routes = router;