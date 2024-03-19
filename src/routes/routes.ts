import { Router } from "express";
import { GetUser, CreateUser, GetUserById, RemoveUser, UpdateProfileUser } from "../controller/User/index";
import { CreateProduct, DeleteProduct, GetAllProducts, GetProductById, UpdateProduct } from "../controller/products/index";

const router = Router();

// Rotas de Usuário
router.get('/users', GetUser);
router.get('/users/:id', GetUserById);
router.post('/users/create', CreateUser);
router.delete('/users/remove/:id', RemoveUser);
router.put('/users/update/:id', UpdateProfileUser);

// Rotas de Produtos
router.get('/products', GetAllProducts);
router.get('/products/:id', GetProductById);
router.post('/products/create', CreateProduct);
router.delete('/products/remove/:id', DeleteProduct);
router.put('/products/update/:id', UpdateProduct);

export default router;
