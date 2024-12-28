import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AppError } from "../utils/app-error";
import { AppZodError } from "../utils/app-error";

import z from "zod";

const prisma = new PrismaClient();
const authSchema = z.object({
    name: z.
        string({message:"O nome deve ser um texto!"}).
        min(3, {message: "O nome deve ter no mínimo 3 letras!"}).
        max(40, {message: "O nome deve ter no máximo 40 letras!"}),
    username: z.
        string({message: "O nome de usuário deve ser um texto!"}).
        min(3, {message: "O nome de usuário deve ter no mínimo 3 letras!"}).
        max(20, {message: "O nome de usuário deve ter no máximo 20 letras!"}),
    password: z.
        string({message: "A senha deve ser um texto!"}).
        min(6, {message: "A senha deve ter no mínimo 6 letras!"}).
        max(30, {message: "A senha deve ter no máximo 30 letras!"})
});

export class AuthController {
    public async register(req : Request, res : Response, next : NextFunction) {
        try {
            const { name, username, password } = req.body;
            const validatedData = authSchema.parse(req.body);
            res.json({ message: "Register route" });
        } catch (error) {
            if (error instanceof z.ZodError) {
                new AppZodError(error, res);
            } else {
                next(error);
            }
        }
    }

    public async login(req : Request, res : Response) {
        res.json({ message: "Login route" });
    }
}