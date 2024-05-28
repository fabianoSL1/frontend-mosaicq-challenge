import { createContext } from "react";

type AuthContextType = {
    auth: boolean;
    setAuth: (auth: boolean) => void;
};

export const authContext = createContext<AuthContextType | undefined>(undefined);
