"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { useAuth } from "@/components/context/AuthContext";

export default function SignupForm() {
  const router = useRouter();
  const { signup } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const [error, setError] = useState("");

  const handleSignup = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await signup(
        name,
        email,
        password
      );

      alert(
        "Account created successfully!"
      );

      router.push("/login");
    } catch (err: any) {
      setError(
        err?.message ||
          "Something went wrong."
      );
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8"
    >
      <h1 className="mb-8 text-center text-4xl font-bold">
        Create Account
      </h1>

      {/* Name */}

      <div className="mb-5">
        <label className="mb-2 block text-gray-400">
          Full Name
        </label>

        <div className="relative">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            required
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Email */}

      <div className="mb-5">
        <label className="mb-2 block text-gray-400">
          Email
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="email"
            required
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Password */}

      <div className="mb-5">
        <label className="mb-2 block text-gray-400">
          Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="password"
            required
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Confirm Password */}

      <div className="mb-6">
        <label className="mb-2 block text-gray-400">
          Confirm Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {error && (
        <p className="mb-5 text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
      >
        <UserPlus size={18} />
        Create Account
      </button>

      <p className="mt-6 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-cyan-400 hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
}