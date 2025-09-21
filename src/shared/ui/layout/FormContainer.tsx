import { cn } from "./cn";

export function FormContainer({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'w-full max-w-md mx-auto bg-base-200 p-6 rounded-xl shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
}
