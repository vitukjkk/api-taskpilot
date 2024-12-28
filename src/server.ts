// IMPORTANDO MÓDULOS
import express, { Request, Response } from 'express';
import { routes } from './routes';
import { errorHandler } from './middlewares/my';

// DEFININDO VARIÁVEIS
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
