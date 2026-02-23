import AuthServices from "@/services/authServices";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      customer: [],
      token: null,
      loading: false,
      success: null,
      error: null,

      setToken: (token) => set({ token }),

      login: async (data) => {
        try {
          set({ loading: true, error: null });

          const res = await AuthServices.login(data);

          set({
            loading: false,
            error: null,
            success: res.message,
            token: res.accessToken,
          });
        } catch (err) {
          set({ error: err?.message, loading: false });
        }
      },

      register: async (data) => {
        try {
          set({ loading: true, error: null });

          const res = await AuthServices.register(data);

          set({
            loading: false,
            success: res.message,
            customer: res.data,
            error: null,
          });
        } catch (err) {
          set({ error: err?.message, loading: false });
        }
      },

      logout: () => {
        set({ token: null, customer: [] });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);

export default useAuthStore;
