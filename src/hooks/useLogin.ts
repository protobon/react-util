import { useMutation } from "react-query";
import api from "../common/api";
import { endpoints } from "../common/endpoints";

interface AuthLogin {
    email: string;
    password: string;
}

interface AuthResponse {
    access_token: string;
    refresh_token: string;
}

async function login(input: AuthLogin): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>(endpoints.auth.login, {
        email: input.email,
        password: input.password
    });
    return data;
}

export const useLogin = () => useMutation({mutationFn: login});
