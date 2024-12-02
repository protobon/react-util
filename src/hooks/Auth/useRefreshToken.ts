import { useMutation } from "react-query";
import api from "../../common/api";
import { endpoints } from "../../common/endpoints";
import { AuthResponse } from "./useLogin";

export async function refreshAuth(): Promise<void> {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            throw new Error('No refresh token found');
        }
        const email = localStorage.getItem('email');
        if (!email) {
            throw new Error('No email found');
        }

        const res = await api.post<AuthResponse>(
            endpoints.auth.refresh,
            {
                email,
                token: refreshToken 
            }
        );
        if (res.status !== 200 && res.status !== 201) {
            throw new Error("Refresh auth failed with status " + res.status);
        }
        
        const data = res.data;
        localStorage.setItem('authToken', data.access_token);
        localStorage.setItem('refreshToken', data.refresh_token);
    } catch (error) {
        throw new Error("Refresh auth failed");
    }
}

export const useRefreshToken = () => useMutation({mutationFn: refreshAuth});
