"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface Note {
  id: number;
  title: string;
  content: string;
  favorite: boolean;
  createdAt: string;
}

interface NotesContextType {
  notes: Note[];
  selectedNote: Note | null;

  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

  addNote: () => void;
  deleteNote: (id: number) => void;
  updateNote: (
    id: number,
    updates: Partial<Note>
  ) => void;
  selectNote: (id: number) => void;
  toggleFavorite: (id: number) => void;
}

const NotesContext = createContext<
  NotesContextType | undefined
>(undefined);

export function NotesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] =
    useState<Note | null>(null);

  const [searchQuery, setSearchQuery] =
    useState("");

  // Load Notes
  useEffect(() => {
    const saved =
      localStorage.getItem("studyos_notes");

    if (saved) {
      const parsed: Note[] = JSON.parse(saved);

      setNotes(parsed);

      if (parsed.length > 0) {
        setSelectedNote(parsed[0]);
      }
    }
  }, []);

  // Save Notes
  useEffect(() => {
    localStorage.setItem(
      "studyos_notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  // Create Note
  const addNote = () => {
    if (
      selectedNote &&
      selectedNote.title.trim() ===
        "Untitled Note" &&
      selectedNote.content.trim() === ""
    ) {
      return;
    }

    const newNote: Note = {
      id: Date.now(),
      title: "Untitled Note",
      content: "",
      favorite: false,
      createdAt:
        new Date().toLocaleDateString(),
    };

    setNotes((prev) => [
      newNote,
      ...prev,
    ]);

    setSelectedNote(newNote);
  };

  // Delete Note
  const deleteNote = (id: number) => {
    const updated = notes.filter(
      (note) => note.id !== id
    );

    setNotes(updated);

    if (selectedNote?.id === id) {
      setSelectedNote(
        updated.length ? updated[0] : null
      );
    }
  };

  // Update Note
  const updateNote = (
    id: number,
    updates: Partial<Note>
  ) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              ...updates,
            }
          : note
      )
    );

    if (selectedNote?.id === id) {
      setSelectedNote({
        ...selectedNote,
        ...updates,
      });
    }
  };

  // Select Note
  const selectNote = (id: number) => {
    const note = notes.find(
      (note) => note.id === id
    );

    if (note) {
      setSelectedNote(note);
    }
  };

  // Toggle Favorite
  const toggleFavorite = (id: number) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              favorite: !note.favorite,
            }
          : note
      )
    );

    if (selectedNote?.id === id) {
      setSelectedNote({
        ...selectedNote,
        favorite:
          !selectedNote.favorite,
      });
    }
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        selectedNote,

        searchQuery,
        setSearchQuery,

        addNote,
        deleteNote,
        updateNote,
        selectNote,
        toggleFavorite,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context =
    useContext(NotesContext);

  if (!context) {
    throw new Error(
      "useNotes must be used inside NotesProvider"
    );
  }

  return context;
}