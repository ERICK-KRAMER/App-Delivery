import { Request, Response } from "express";
import { z } from "zod";
import { getUserByEmail } from "../../db/User";
import { generateToken } from "../../helpers/index";

const LoginShema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const Login = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = LoginShema.parse(req.body);

    // Verifica se o usuário existe
    const findUser = await getUserByEmail(email);
    if (!findUser) {
      return res.status(401).json("Usuário não encontrado");
    }

    // Verifica se a senha está correta
    if (password !== findUser.password) {
      return res.status(422).json("Credenciais inválidas");
    }

    const { id } =  findUser;
    const Payload = { name, email, password }
    const Time = Number(60 * 30); // 30min

    // Gera um token para o usuário
    const token = generateToken({ payload: Payload, chaveSecreta: id, expiresIn: Time });

    // Retorna o token
    res.json({ token });
    
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.status(500).send({ msg: "Ocorreu um erro ao fazer login" });
  }
};
