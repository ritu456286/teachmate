import {Router} from "express";
import { v1Routes } from "./v1/index.js";
const router = Router();

// /api/v1
router.use("/v1", v1Routes);

export const apiRoutes = router;