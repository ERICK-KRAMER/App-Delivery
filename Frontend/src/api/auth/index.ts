import { IUser } from "../../types/User";

const endpoint = "http://localhost:4000/login";

interface IAuth {
  email: string;
  password: string;
}

export const Login = async ({ email, password }: IAuth): Promise<IUser | null> => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer login');
    }

    const data = await response.json();
    const token = data.token;

    localStorage.setItem("token", token);
    
    return data; 
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return null;
  }
};
