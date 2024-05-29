import { createContext } from "react";
import { Token } from "../../api/auth/dtos/token";

type AuthContextType = {
    auth: Token;
    setAuth: (auth: Token) => void;
};

export const authContext = createContext<AuthContextType | undefined>(undefined);
