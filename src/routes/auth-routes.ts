import { Router } from "express";
import { AuthController } from "../controllers/auth-controllers";

const authController = new AuthController();
export const authRoutes = Router();

authRoutes.post("/register", authController.register);
authRoutes.post("/login", authController.login);