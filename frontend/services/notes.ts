import { supabase } from "@/lib/supabase";

/**
 * Get All Notes
 */
export async function getNotes() {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

/**
 * Create Note
 */
export async function createNote(
  user_id: string
) {
  const { data, error } = await supabase
    .from("notes")
    .insert([
      {
        user_id,
        title: "Untitled Note",
        content: "",
        favorite: false,
      },
    ])
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Update Note
 */
export async function updateNote(
  id: string,
  updates: any
) {
  const { data, error } = await supabase
    .from("notes")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Delete Note
 */
export async function deleteNote(
  id: string
) {
  const { error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id);

  if (error) throw error;
}