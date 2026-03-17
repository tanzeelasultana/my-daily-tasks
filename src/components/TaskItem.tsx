import type { Task } from "@/pages/Index";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  isCompleted?: boolean;
}

/** Single task row with checkbox, info, and delete button */
export const TaskItem = ({ task, onToggle, onDelete, isCompleted }: TaskItemProps) => {
  const displayDate = new Date(task.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className="group flex items-center rounded-lg bg-card px-4 py-3.5 transition-shadow duration-150"
      style={{ boxShadow: "var(--shadow-sm)" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-md)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-sm)")}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="mr-4 h-5 w-5 cursor-pointer accent-primary"
      />
      <div className="flex-1">
        <span className={`block font-medium ${isCompleted ? "line-through" : ""}`}>
          {task.title}
        </span>
        <span className="text-xs text-muted-foreground">Due {displayDate}</span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="px-2 py-1 text-xs font-semibold text-destructive opacity-0 transition-opacity duration-150 group-hover:opacity-100"
      >
        Delete
      </button>
    </div>
  );
};
