import { useState } from "react";

interface TaskFormProps {
  onAdd: (title: string, date: string) => void;
}

/** Form to add a new task with title and due date */
export const TaskForm = ({ onAdd }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !date) return;
    onAdd(title.trim(), date);
    setTitle("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 flex flex-col gap-3 rounded-xl bg-card p-4"
      style={{ boxShadow: "var(--shadow-md)" }}
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          required
          className="rounded-lg border border-border bg-muted px-3.5 py-2.5 text-[0.9375rem] text-foreground placeholder:text-muted-foreground transition-all duration-150 focus:border-primary focus:bg-background focus:outline-none focus:ring-[3px] focus:ring-primary/10"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="rounded-lg border border-border bg-muted px-3.5 py-2.5 text-[0.9375rem] text-foreground transition-all duration-150 focus:border-primary focus:bg-background focus:outline-none focus:ring-[3px] focus:ring-primary/10"
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-100 hover:opacity-90 active:scale-[0.98]"
      >
        Add Task
      </button>
    </form>
  );
};
