import { Axios } from "axios";

export const api = new Axios({
    baseURL: import.meta.env.VITE_BACKEND_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
    },
    validateStatus(status) {
        return status < 400;
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `bearer ${token}` : "";

    return config;
});