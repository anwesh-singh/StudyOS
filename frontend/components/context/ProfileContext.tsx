"use client";

import {
  createContext,
  useContext,
} from "react";

const ProfileContext = createContext(null);

export function ProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileContext.Provider value={null}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      "useProfile must be used inside ProfileProvider"
    );
  }

  return context;
}
