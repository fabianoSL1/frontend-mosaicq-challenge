import { api } from "../api";
import { Token } from "./dtos/token";

class AuthService {
    async createToken(): Promise<Token> {
        const response = await api.post(`/auth`, JSON.stringify({}));
        const data: Token = JSON.parse(response.data);

        localStorage.setItem("token", data.token);
        
        return data;
    }
}

export const authService = new AuthService();
