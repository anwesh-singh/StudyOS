"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

import {
  signUp,
  signIn,
  signOut,
} from "@/services/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isLoggedIn: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  signup: (
    fullName: string,
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;
}

const AuthContext = createContext<
  AuthContextType | undefined
>(undefined);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setUser(session?.user ?? null);
      setLoading(false);
    }

    loadUser();

    const {
      data: { subscription },
    } =
      supabase.auth.onAuthStateChange(
        (_event, session) => {
          setUser(session?.user ?? null);
        }
      );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Signup
  const signup = async (
    fullName: string,
    email: string,
    password: string
  ) => {
    await signUp(
      fullName,
      email,
      password
    );
  };

  // Login
  const login = async (
    email: string,
    password: string
  ) => {
    await signIn(
      email,
      password
    );
  };

  // Logout
  const logout = async () => {
    await signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isLoggedIn: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}