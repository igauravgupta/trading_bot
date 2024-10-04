import { Router } from "express";
import { tradeStrategyController } from "../controllers/tradeStrategy.controller.js";
const router = Router();

// routes
router.route("/trade").get(tradeStrategyController);

export default router;
