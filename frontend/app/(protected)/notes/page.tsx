import NotesSidebar from "@/components/notes/NotesSidebar";
import NotesHeader from "@/components/notes/NotesHeader";
import NotesList from "@/components/notes/NotesList";
import NoteEditor from "@/components/notes/NoteEditor";

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex">

        {/* Left Sidebar */}
        <NotesSidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">

          <NotesHeader />

          <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-3">

            {/* Notes List */}
            <div className="xl:col-span-1">
              <NotesList />
            </div>

            {/* Editor */}
            <div className="xl:col-span-2">
              <NoteEditor />
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}