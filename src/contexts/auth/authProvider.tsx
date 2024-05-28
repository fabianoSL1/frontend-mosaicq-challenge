import { ReactNode, useState } from "react";
import { authContext } from "./authContext";

export function AuthProvider({ children }: { children: ReactNode }) {
    const [auth, setAuth] = useState(false);

    return (
        <authContext.Provider value={{ auth, setAuth }}>
            {children}
        </authContext.Provider>
    );
}
