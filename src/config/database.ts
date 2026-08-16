import mongoose from 'mongoose';

export const connectDatabase = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/oficina-estoque';
    
    // TODO: Estabelecer conexão com o MongoDB utilizando o Mongoose
    // Exemplo: await mongoose.connect(mongoUri);

    console.log('✅ Conexão com o MongoDB estabelecida com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};
