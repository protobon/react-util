import axios from "axios";
import { refreshAuth } from "../hooks/Auth/useRefreshToken";

const api = axios.create({
    baseURL: "http://localhost:3000/api/",
});

api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('authToken') || "";
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    if (error.response.status >= 400 && error.response.status <= 500) {
      if (error.response.status === 401) {
        try {
          await refreshAuth()
          // Retry the original request
          return api.request(error.config);
        } catch (refreshError) {
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;