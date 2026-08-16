import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController';

const router = Router();

// TODO: Mapear as rotas do CRUD associando os verbos HTTP aos controladores
// Exemplo:
// router.get('/products', getAllProducts);
// router.get('/products/:id', getProductById);
// router.post('/products', createProduct);
// router.put('/products/:id', updateProduct);
// router.delete('/products/:id', deleteProduct);

export default router;
