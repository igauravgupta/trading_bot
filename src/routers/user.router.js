import { Router } from "express";
import { register } from "../controllers/user.controller.js";
const router = Router();

// routes
router.route("/register").post(register);

export default router;
