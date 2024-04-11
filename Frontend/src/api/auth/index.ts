import { IDataLogin } from "../../types/User";

const endpoint = "http://localhost:4000/login";

interface IAuth {
  email: string;
  password: string;
}

export const Login = async ({ email, password }: IAuth): Promise<IDataLogin | null> => {
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
    const dataString = JSON.stringify(data);

    sessionStorage.setItem("login", dataString);
    
    return data; 
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return null;
  }
};

