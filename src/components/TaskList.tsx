import type { Task } from "@/pages/Index";
import { TaskItem } from "@/components/TaskItem";

interface TaskListProps {
  label: string;
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  isCompleted?: boolean;
}

/** Renders a labeled section of tasks */
export const TaskList = ({ label, tasks, onToggle, onDelete, isCompleted }: TaskListProps) => {
  if (tasks.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </h2>
      <div className={`flex flex-col gap-2 ${isCompleted ? "opacity-60" : ""}`}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            isCompleted={isCompleted}
          />
        ))}
      </div>
    </section>
  );
};
