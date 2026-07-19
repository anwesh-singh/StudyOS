import Calendar from "@/components/planner/Calendar";
import AddTask from "@/components/planner/AddTask";
import TaskList from "@/components/planner/TaskList";

export default function PlannerPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold">
        Study Planner 📅
      </h1>

      <p className="mt-2 text-gray-400">
        Organize your daily study schedule.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

        <div className="lg:col-span-2">
          <Calendar />
        </div>

        <div>
          <AddTask />
          <div className="mt-6">
            <TaskList />
          </div>
        </div>

      </div>

    </main>
  );
}