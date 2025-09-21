import { cn } from "./cn";

export function Card({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'card bg-base-200 shadow-md rounded-xl p-4',
        className
      )}
    >
      {children}
    </div>
  );
}
