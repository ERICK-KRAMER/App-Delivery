import { Router } from "express";
import { GetUser, CreateUser, GetUserById, RemoveUser, UpdateProfileUser } from "../controller/User/index";
import { CreateProduct, DeleteProduct, GetAllProducts, GetProductById, UpdateProduct } from "../controller/products/index";

const router = Router();

// Rotas de Usuário
router.get('/users', GetUser);
router.post('/users', CreateUser);
router.get('/users/:id', GetUserById);
router.delete('/users/:id', RemoveUser);
router.put('/users/:id', UpdateProfileUser);

// Rotas de Produtos
router.get('/products', GetAllProducts);
router.post('/products', CreateProduct);
router.get('/products/:id', GetProductById);
router.delete('/products/:id', DeleteProduct);
router.put('/products/:id', UpdateProduct);

export default router;
