import { Router } from "express";
const router = Router();

// routes
router.route("/trade").get();
router.route("/trades").get();

export default router;
