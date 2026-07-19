import { supabase } from "@/lib/supabase";

export async function signUp(
  fullName: string,
  email: string,
  password: string
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  if (!data.user) {
    throw new Error("User was not created.");
  }

  const { error: profileError } = await supabase
    .from("profiles")
    .insert({
      id: data.user.id,
      full_name: fullName,
      email,
    });

  if (profileError) {
    console.error(profileError);
    throw profileError;
  }

  return data;
}

export async function signIn(
  email: string,
  password: string
) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signOut() {
  return await supabase.auth.signOut();
}

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function getSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
}