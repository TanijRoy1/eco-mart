"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email === "admin@example.com" && password === "123456") {
      document.cookie = "auth=true; path=/;";
      router.push("/items");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Email address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //   placeholder="admin@example.com"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //   placeholder="123456"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full border border-primary cursor-pointer text-primary hover:bg-primary hover:text-white transition py-2 rounded-md text-sm font-medium"
        >
          Sign In
        </button>
      </form>

      {/* DIVIDER */}
      <div className="my-6 flex items-center gap-3">
        <div className="flex-1 h-px bg-base-300"></div>
        <span className="text-sm text-base-content/60">OR</span>
        <div className="flex-1 h-px bg-base-300"></div>
      </div>

      {/* GOOGLE LOGIN */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/items" })}
        className="w-full flex items-center justify-center cursor-pointer gap-3 border border-base-300 py-2 rounded-md hover:bg-base-300 transition"
      >
        <FcGoogle className="text-xl" />
        <span className="text-sm font-medium">Continue with Google</span>
      </button>
    </div>
  );
};

export default LoginForm;
