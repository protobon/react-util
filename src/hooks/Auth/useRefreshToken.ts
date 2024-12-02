import { useMutation } from "react-query";
import api from "../../common/api";
import { endpoints } from "../../common/endpoints";
import { AuthResponse } from "./useLogin";

export async function refreshAuth(): Promise<AuthResponse> {
    const email = localStorage.getItem('email');
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
        throw new Error('No refresh token found');
    }
    const { data } = await api.post<AuthResponse>(
        endpoints.auth.refresh,
        {
            email,
            token: refreshToken 
        }
    );
    localStorage.setItem('authToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);
    return data;
}

export const useRefreshToken = () => useMutation({mutationFn: refreshAuth});
