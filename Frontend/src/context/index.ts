import { createContext } from "react";

interface UserContextType {
  token: string | null;
}

const defaultValue: UserContextType = {
  token: null,
};

const UserContext = createContext<UserContextType>(defaultValue as UserContextType);

export default UserContext;
