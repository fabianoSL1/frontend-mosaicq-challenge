import { ReactNode, useState } from "react";
import { authContext } from "./authContext";
import { Token } from "../../api/auth/dtos/token";

export function AuthProvider({ children }: { children: ReactNode }) {
    const [auth, setAuth] = useState<Token>({
        token: "",
        expiresIn: 0
    });

    return (
        <authContext.Provider value={{ auth, setAuth }}>
            {children}
        </authContext.Provider>
    );
}
