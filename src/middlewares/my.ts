import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app-error";
import { ZodError } from "zod";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    } else if (err instanceof ZodError) {
        return res.status(400).json({ message: err.errors, issues: err.format() });
    } else if (err instanceof Error) {
        return res.status(500).json({ message: 'Erro interno no servidor!' });
    }
    next();
}