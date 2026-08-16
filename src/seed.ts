import dotenv from 'dotenv';
import { connectDatabase } from './config/database';
import { Product } from './models/Product';
import mongoose from 'mongoose';

dotenv.config();

const INITIAL_PRODUCTS = [
  { name: "Fone de Ouvido Bluetooth", sku: "ELE-001", category: "Eletrônicos", quantity: 34, price: 189.9, minStock: 10 },
  { name: "Camiseta Algodão Premium", sku: "VES-002", category: "Vestuário", quantity: 5, price: 59.9, minStock: 15 },
  { name: "Azeite Extra Virgem 500ml", sku: "ALI-003", category: "Alimentos", quantity: 120, price: 24.5, minStock: 30 },
  { name: "Chave de Fenda 6 peças", sku: "FER-004", category: "Ferramentas", quantity: 18, price: 45.0, minStock: 8 },
  { name: "Hidratante Facial FPS30", sku: "COS-005", category: "Cosméticos", quantity: 3, price: 79.9, minStock: 20 },
  { name: "Cabo USB-C 2m", sku: "ELE-006", category: "Eletrônicos", quantity: 67, price: 29.9, minStock: 20 },
  { name: "Calça Jeans Slim", sku: "VES-007", category: "Vestuário", quantity: 22, price: 129.9, minStock: 10 },
  { name: "Café Torrado 500g", sku: "ALI-008", category: "Alimentos", quantity: 88, price: 18.9, minStock: 25 },
];

const seedDatabase = async () => {
  try {
    await connectDatabase();
    
    console.log('🧹 Limpando produtos existentes no banco...');
    // TODO: Limpar documentos antigos da coleção
    // Exemplo: await Product.deleteMany({});

    console.log('🌱 Populando produtos iniciais...');
    // TODO: Inserir a lista INITIAL_PRODUCTS no banco
    // Exemplo: await Product.insertMany(INITIAL_PRODUCTS);

    console.log('✨ Produtos cadastrados com sucesso no MongoDB Atlas!');
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro ao popular o banco de dados:', error);
    process.exit(1);
  }
};

seedDatabase();
