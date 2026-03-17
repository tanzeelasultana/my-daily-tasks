import { useState, useEffect, useCallback } from "react";
import { TaskForm } from "@/components/TaskForm";
import { TaskList } from "@/components/TaskList";

/** Task data structure */
export interface Task {
  id: string;
  title: string;
  date: string;
  completed: boolean;
  createdAt: number;
}

const STORAGE_KEY = "student_tasks";

/** Load tasks from localStorage */
function loadTasks(): Task[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((title: string, date: string) => {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, date, completed: false, createdAt: Date.now() },
    ]);
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const pending = tasks
    .filter((t) => !t.completed)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const completed = tasks.filter((t) => t.completed);

  return (
    <main className="mx-auto max-w-[640px] px-4 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8 flex items-baseline justify-between">
        <h1 className="text-2xl font-bold text-foreground">Student Task Manager</h1>
        <span className="text-sm font-medium text-muted-foreground tabular-nums">
          {tasks.length} Tasks • {completed.length} Done
        </span>
      </header>

      {/* Add Task Form */}
      <TaskForm onAdd={addTask} />

      {/* Pending Tasks */}
      <TaskList
        label="Pending"
        tasks={pending}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />

      {/* Completed Tasks */}
      <TaskList
        label="Completed"
        tasks={completed}
        onToggle={toggleTask}
        onDelete={deleteTask}
        isCompleted
      />
    </main>
  );
};

export default Index;
