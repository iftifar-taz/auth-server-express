import { Router } from "express";
import { createSession, checkStatus } from "../controllers/session.controller";
import { authenticated } from "../middlewares/authenticated.middleware";

const router = Router();

router.post("/", createSession);
router.get("/check-status", authenticated, checkStatus);

export default router;
