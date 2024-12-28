import { Router } from "express";

// IMPORTANDO ROTAS
import { authRoutes } from "./auth-routes";

export const routes = Router();

routes.get("/", (req, res) => {
    res.json({ message: "Hello World from TaskPilot" });
});

routes.use("/auth", authRoutes);