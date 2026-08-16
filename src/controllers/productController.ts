import { Request, Response } from 'express';
import { Product } from '../models/Product';

// GET /products - Listar todos os produtos
export const getAllProducts = async (_req: Request, res: Response): Promise<void> => {
  try {
    // TODO: Buscar todos os produtos no banco ordenados por data de criação
    // Exemplo: const products = await Product.find().sort({ createdAt: -1 });

    const products: any[] = []; // Remover quando implementar
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos', error });
  }
};

// GET /products/:id - Obter produto por ID
export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // TODO: Buscar o produto pelo ID fornecido na URL
    // Exemplo: const product = await Product.findById(id);

    const product = null; // Remover quando implementar

    if (!product) {
      res.status(404).json({ message: 'Produto não encontrado' });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: 'ID do produto inválido ou formato incorreto', error });
  }
};

// POST /products - Criar um novo produto
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, sku, category, quantity, price, minStock } = req.body;

    // TODO: Instanciar e salvar o novo produto no MongoDB
    // Exemplo:
    // const newProduct = new Product({ name, sku, category, quantity, price, minStock });
    // const savedProduct = await newProduct.save();

    const savedProduct = {}; // Remover quando implementar
    res.status(201).json(savedProduct);
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'SKU já cadastrado. Utilize um SKU exclusivo.' });
      return;
    }
    res.status(400).json({ message: 'Erro ao cadastrar produto', error: error.message || error });
  }
};

// PUT /products/:id - Atualizar um produto por ID
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, sku, category, quantity, price, minStock } = req.body;

    // TODO: Atualizar o produto pelo ID utilizando findByIdAndUpdate
    // Exemplo:
    // const updatedProduct = await Product.findByIdAndUpdate(id, { name, sku, category, quantity, price, minStock }, { new: true, runValidators: true });

    const updatedProduct = null; // Remover quando implementar

    if (!updatedProduct) {
      res.status(404).json({ message: 'Produto não encontrado para atualização' });
      return;
    }

    res.status(200).json(updatedProduct);
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'SKU já cadastrado em outro produto.' });
      return;
    }
    res.status(400).json({ message: 'Erro ao atualizar produto', error: error.message || error });
  }
};

// DELETE /products/:id - Deletar um produto por ID
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // TODO: Remover o produto pelo ID no MongoDB
    // Exemplo: const deletedProduct = await Product.findByIdAndDelete(id);

    const deletedProduct = null; // Remover quando implementar

    if (!deletedProduct) {
      res.status(404).json({ message: 'Produto não encontrado para exclusão' });
      return;
    }

    res.status(200).json({ message: 'Produto removido com sucesso', id });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao excluir produto', error });
  }
};
