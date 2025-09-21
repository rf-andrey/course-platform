import { cn } from "./cn";

export function Box({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl p-4 bg-base-100',
        className
      )}
    >
      {children}
    </div>
  );
}
