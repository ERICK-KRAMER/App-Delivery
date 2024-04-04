import { createContext } from "react";
import { IDataLogin } from "../types/User";

interface ILoginContext {
  data: IDataLogin | undefined;
}

export const loginContext = createContext<ILoginContext>({ data: undefined });
