"use client";

import { useEffect, useState } from "react";
import { User, Mail, Save } from "lucide-react";
import { useSettings } from "@/components/context/SettingsContext";

export default function ProfileCard() {
  const { profile, updateProfile } = useSettings();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  useEffect(() => {
    setName(profile.name);
    setEmail(profile.email);
  }, [profile]);

  const handleSave = () => {
    updateProfile({
      ...profile,
      name,
      email,
    });

    alert("Profile updated successfully!");
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="mb-8 text-3xl font-bold text-white">
        Profile
      </h2>

      <div className="flex flex-col gap-8 md:flex-row">

        {/* Avatar */}
        <div className="flex justify-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-cyan-500 bg-cyan-500/10">
            <User
              size={60}
              className="text-cyan-400"
            />
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 space-y-6">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Full Name
            </label>

            <div className="relative">

              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
              />

            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Email
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
              />

            </div>
          </div>

          {/* Save */}
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            <Save size={18} />
            Save Profile
          </button>

        </div>

      </div>

    </div>
  );
}