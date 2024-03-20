import { Request, Response } from "express";
import { addToCart, removeToCart } from "../../db/Cart";
import { z } from "zod";

const ICartSchema = z.object({
  productId: z.string(),
  quantity: z.number().positive()
})

export const addItem = async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = ICartSchema.parse(req.body);
  
    const { userId } = req.params;
  
    if (!productId || !quantity) return res.status(400).send({ message: "productId e quantity são campos obrigatórios" });
  
    const cartItem = await addToCart({ productId, quantity, userId });
  
    res.status(201).json({ message: "Item adicionado ao carrinho com sucesso", cartItem });
  
  } catch (error) {
    
    console.error("Erro ao adicionar item ao carrinho:", error);
    
    res.status(500).send({ message: "Ocorreu um erro ao adicionar item ao carrinho" });
  }
};

export const removeItemCart = async (req: Request, res: Response) => {
  try {
    const { itemId } = req.params;

    if (!itemId) return res.status(400).send({ message: "O ID do item do carrinho é obrigatório" });
    
    const removedItem = await removeToCart(itemId);
    
    if (!removedItem) return res.status(404).send({ message: "Item do carrinho não encontrado" });
    
    res.status(200).send({ message: "Item removido do carrinho com sucesso", removedItem });
  
  } catch (error) {
    
    console.error("Erro ao remover item do carrinho:", error);
    
    res.status(500).send({ message: "Ocorreu um erro ao remover item do carrinho" });
  }
};

