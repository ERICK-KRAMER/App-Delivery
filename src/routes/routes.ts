import { Router } from "express";
import { GetUser } from "../controller/User/index"
const router = Router();

router.get('/', GetUser);
