import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// TODO: Acoplar o roteador de produtos na aplicação Express
// Exemplo: app.use('/', productRoutes);

// Rota de Health Check
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'OK', message: 'API de Gestão de Estoque funcionando!' });
});

// Inicialização da aplicação
const startServer = async () => {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📡 Endpoints disponíveis: http://localhost:${PORT}/products`);
  });
};

startServer();
