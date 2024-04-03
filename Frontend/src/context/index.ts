import { createContext } from "react";

export interface IUsuarioLogadoContextData {
  token: string
  name: string
  id: string
  email: string
}

const UserContext = createContext<IUsuarioLogadoContextData | null>(null);

export default UserContext;
