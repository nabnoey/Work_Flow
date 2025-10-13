import axios from "axios";
import TokenService from "./token.service.js";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
