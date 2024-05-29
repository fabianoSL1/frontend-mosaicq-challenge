import { useContext } from "react";
import { authContext } from "../contexts/auth/authContext";

export function useAuth() {
    const context = useContext(authContext);

    if (!context) {
        throw new Error("auth context not load")
    }

    return context;
}