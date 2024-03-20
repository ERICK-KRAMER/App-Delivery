import { Router } from "express";
import { Login } from "../controller/Login";
// import { SendSMS } from "../SendSMS/index";
// import twilio from "twilio";
import { addToCart, removeToCart } from "../db/Cart";
import { GetUser, CreateUser, GetUserById, RemoveUser, UpdateProfileUser } from "../controller/User/index";
import { CreateProduct, DeleteProduct, GetAllProducts, GetProductById, UpdateProduct } from "../controller/Products/index";

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

// Login Route 
router.post('/login', Login);

// Cart Routes
router.post('/cart/add', addToCart);
router.delete('/cart/remove/:id', removeToCart);

// SMS Route 
// router.post("/message",twilio.webhook({ validate: true }), SendSMS);

export default router;
