"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  Moon,
  UserCircle,
} from "lucide-react";

import { useAuth } from "@/components/context/AuthContext";
import { supabase } from "@/lib/supabase";

export default function Topbar() {
  const { user } = useAuth();

  const [fullName, setFullName] =
    useState("Loading...");

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .single();

      if (!error && data) {
        setFullName(data.full_name);
      } else {
        setFullName(
          user.email?.split("@")[0] || "User"
        );
      }
    }

    loadProfile();
  }, [user]);

  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-[#0b0b0b] px-8 py-5">
      {/* Search */}

      <div className="relative w-[420px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full rounded-xl border border-white/10 bg-[#151515] py-3 pl-11 pr-4 outline-none transition focus:border-cyan-400"
        />
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">
        <button className="rounded-xl bg-[#151515] p-3 hover:bg-cyan-500/20">
          <Bell size={20} />
        </button>

        <button className="rounded-xl bg-[#151515] p-3 hover:bg-cyan-500/20">
          <Moon size={20} />
        </button>

        <div className="flex items-center gap-3">
          <UserCircle
            size={42}
            className="text-cyan-400"
          />

          <div>
            <h3 className="font-semibold">
              {fullName}
            </h3>

            <p className="text-sm text-gray-400">
              Welcome Back 👋
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}