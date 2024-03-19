import { Response, Request } from "express";
import { createUser, getUserById, getUsers, removeUser, updateUser } from "../../db/User";
import { z } from "zod";

const CreateUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string(),
  telephone: z.number(),
});

const UpdateUserSchema = z.object({
  name: z.string().min(1).optional(),
  password: z.string().optional(),
  telephone: z.number().optional(),
});


export const GetUser = async(req: Request, res: Response) => {
  try {
    const response = await getUsers();
    res.status(200).send({ status:"success", data:response });
  } catch (error) {
    throw new Error(`Erro ao  buscar usuário ${ error }`);
  }
}

export const GetUserById = async(req:Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = getUserById(id);
    if(!user) return  res.status(404).send({ status:'fail', message: 'Usuario não encontrado' });
    res.status(200).send({ status: 'success', data: user });
  } catch (error) {
    throw new Error(`Algo deu errado ${ error }`)
  }
}

export const UpdateProfileUser = async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = UpdateUserSchema.parse(req.body);
    const update = await updateUser(id, { ...updateData });
    if(!update) return res.status(401).send({ status:'fail', msg:`Não foi possível atualizar o perfil do usuário` });
    res.status(201).send({ status: 'success', msg: "O usuario foi atualizado" })
  } catch (error) {
    throw new Error(`Erro ao atualizar o usuario ${ error }`)
  }
}

export const RemoveUser = async(req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteUser = await removeUser(id);
    if(!deleteUser) return res.status(400).send({ status:'fail', msg:`Usuario com ID "${ id }" não encontrado` })
    res.status(200).json({ status:'success', msg:'Usuario deletado' });
  } catch (error) {
    throw new Error(`Algo deu errado ${ error }`)
  }
}

export const CreateUser = async(req:Request, res:Response) => {
  try {
    const { name, email, password, telephone } = CreateUserSchema.parse(req.body);
    const CreateNewUser = await createUser({ name, email, password, telephone });
    if(!CreateNewUser) {
      return res.status(500).send({ status:'fail', msg:`Email "${email}" já cadastrado.`})
    } else {
      res.status(201).json({ status:'success', msg:'Usuário criado.' })
    }
  } catch (error) {
    throw new Error(`algo deu errado ${ error }`)
  }
}