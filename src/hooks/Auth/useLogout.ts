export const logout = async () => {
    localStorage.removeItem('email');
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
}

export const useLogout = () => {
    return logout;
}