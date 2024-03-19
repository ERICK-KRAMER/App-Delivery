import { Response, Request } from "express";
import { createNewProduct, getALlProducts, getProductById, removeProduct, updateProduct } from "../../db/Products";
import { z } from "zod";

const CreateProductSchema = z.object({
  name: z.string().min(3),
  price: z.number(),
  description: z.string().optional(),
  img: z.string().url().optional(),
});

const UpdateProductSchema = z.object({
  name: z.string().min(3),
  price: z.number(),
  description: z.string().optional(),
  img: z.string().url().optional()
});

export const GetAllProducts = async(req:Request, res: Response) => {
  try {
    const response = await getALlProducts();
    if(!response) return  res.status(404).send({ message:"No se encontraron productos"});
    return res.status(200).send(response);
  } catch (error) {
    throw new Error(`Algo deu errado , ${ error }`)
  }
}

export const CreateProduct = (req: Request, res: Response) => {
  try {
    const values = CreateProductSchema.parse(req.body);
    const response = createNewProduct({ ...values }) ;
    if(!response)  return res.status(500).send("Erro ao criar o produto");
    return res.status(201).send(response);
  } catch (error) {
    throw new Error(`Algo deu errado, ${ error }`)
  }
}

export const GetProductById = async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getProductById(id);
    if(!response) return  res.status(404).send({ status: "fail" , msg: "Nao foi possivel localizar o produto" });
    return res.status(200).send({ status: "success", data: response });
  } catch (error) {
    throw new Error(`Algo de errdo aconteceu,  ${ error }`)
  }
}

export const UpdateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const update = UpdateProductSchema.parse(req.body);
    const response = await updateProduct(id, { ...update });
    if(!response) return  res.status(404).send({ status: "fail", msg: "Nao foi possivel alterar o produto" });
    return res.status(200).send({ status: "success", data: `O item foi atualizado ${ response }` })
  } catch (error) {
    throw new Error(`Algo de errado aconteceu, ${ error }`)
  }
}

export const  DeleteProduct = async (req: Request, res :Response ) => {
  try {
    const { id } = req.params;
    const response = await removeProduct(id);
    if(!response) return res.status(400).json({ status:"fail", msg:"Produto não encontrado"});
    return res.status(200).send({ status: "success", data: `O item foi removido ${ response }` })
  } catch (error) {
    throw new Error(`Algo de errado aconteceu, ${ error }`)
  }
}