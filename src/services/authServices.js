import api from "@/utils/axios";

const AuthServices = {
  login: async (data) => {
    const res = await api.post("/api/auth/login", data);
    return res.data;
  },
  register: async (data) => {
    const res = await api.post("/api/auth/register", data);
    return res.data;
  },
};

export default AuthServices;
