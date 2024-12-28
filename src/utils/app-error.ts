import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export class AppError {
    public readonly message: string;
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400, res: Response) {
        this.message = message;
        this.statusCode = statusCode;

        res.json({message: `Houve um erro no processamento da requisição: ${message} e foi finalizada com código de status ${statusCode}`});
    }
}

export class AppZodError extends Error {
    public readonly errors: string[];

    constructor(zodError: ZodError, res: Response) {
        super('Validation error');
        this.errors = zodError.errors.map(err => err.message);

        res.status(400).json({
            message: 'Erro na validação dos dados!',
            errors: this.errors
        });
    }
}