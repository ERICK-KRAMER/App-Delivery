import { createContext } from "react";

interface IUsuarioLogadoContextData {
  token: string;
}

export const UserLoginContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLoginProvider = ({ children }: { children: React.ReactNode }) => {
  return(
    <UserLoginContext.Provider value={{token: "erick"}}>
      {children}
    </UserLoginContext.Provider>
  )
}