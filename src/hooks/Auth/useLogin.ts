import { useMutation } from "react-query";
import api from "../../common/api";
import { endpoints } from "../../common/endpoints";

interface AuthLogin {
    email: string;
    password: string;
}

export interface AuthResponse {
    access_token: string;
    refresh_token: string;
}

async function login(input: AuthLogin): Promise<AuthResponse> {
    try {
        const res = await api.post<AuthResponse>(endpoints.auth.login, {
            email: input.email,
            password: input.password
        });
    
        if (res.status !== 200 && res.status !== 201) {
            throw new Error("Login failed with status " + res.status);
        }
    
        const data = res.data;
        localStorage.setItem('email', input.email);
        localStorage.setItem('authToken', data.access_token);
        localStorage.setItem('refreshToken', data.refresh_token);
        return data;
    } catch (error) {
        throw new Error("Login failed");
    }
}

export const useLogin = () => useMutation({mutationFn: login});
