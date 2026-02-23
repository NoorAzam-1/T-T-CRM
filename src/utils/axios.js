import useAuthStore from "@/store/useAuthStore";
import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8001",
  baseURL: "https://itinerary-planner-8wpi.onrender.com",
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await api.post("/api/auth/refresh");
        const newAccessToken = res.data.accessToken;
        useAuthStore.getState().setToken(newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

export default api;
