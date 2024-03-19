import jwt from "jsonwebtoken";

interface IPayload {
  name: string,
  email:  string,
  password: string,
}

interface IToken {
  payload: IPayload;
  chaveSecreta: string;
  expiresIn: number;
}

export const generateToken = ({ payload, chaveSecreta, expiresIn }: IToken): string => {
  try {
    const token = jwt.sign(payload, chaveSecreta, { expiresIn });
    return token;
  } catch (error) {
    throw new Error(`Não foi possível gerar o token: ${error}`);
  }
};
