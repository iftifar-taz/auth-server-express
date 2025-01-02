import { Router } from "express";
import { createUser } from "../controllers/user.controller";

const router = Router();

router.post("/", createUser);
router.post("/:id", createUser);

export default router;
