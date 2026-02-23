"use client";
import { useEffect, useState } from "react";
import useAuthStore from "@/store/useAuthStore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { loading, success, error, login, token } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      await login(data);
      router.push("/")

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (token) {
      toast.success(success);
    }
    if (error) {
      toast.error(error)
    }
  }, [error, token, success])



  return (
    <section className="w-full h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-8 shadow-2xl rounded-xl w-100 border border-slate-700">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="bg-orange-500 p-2 rounded-md">
            <span className="text-white font-bold">T</span>
          </div>
          <h1 className="text-2xl font-bold text-white">
            TRAVEL<span className="text-orange-500">_CRM</span>
          </h1>
        </div>

        <h2 className="text-xl text-gray-200 font-semibold text-center mb-6">
          Login to your account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-400 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 px-3 py-2 rounded-md bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-1 px-3 py-2 rounded-md bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-2 rounded-md font-semibold cursor-pointer"
          >
            {`${loading ? "Loging...." : "Log In"}`}{" "}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          © 2026 Travel CRM. All rights reserved.
        </p>
      </div>
    </section>
  );
}
