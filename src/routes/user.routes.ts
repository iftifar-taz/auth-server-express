import { Router } from "express";
import {
  createUser,
  getAuthenticatedUser,
  getUsers,
} from "../controllers/user.controller";
import { authenticated } from "../middlewares/authenticated.middleware";

const router = Router();

router.post("/", createUser);
router.get("/", authenticated, getUsers);
router.get("/me", authenticated, getAuthenticatedUser);

export default router;
