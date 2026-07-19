"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

interface SettingsContextType {
  profile: UserProfile;
  updateProfile: (profile: UserProfile) => void;
}

const defaultProfile: UserProfile = {
  name: "StudyOS User",
  email: "user@example.com",
  avatar: "",
};

const SettingsContext = createContext<
  SettingsContextType | undefined
>(undefined);

export function SettingsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [profile, setProfile] =
    useState<UserProfile>(defaultProfile);

  useEffect(() => {
    const saved =
      localStorage.getItem("studyos_profile");

    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "studyos_profile",
      JSON.stringify(profile)
    );
  }, [profile]);

  const updateProfile = (
    newProfile: UserProfile
  ) => {
    setProfile(newProfile);
  };

  return (
    <SettingsContext.Provider
      value={{
        profile,
        updateProfile,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettings must be used inside SettingsProvider"
    );
  }

  return context;
}