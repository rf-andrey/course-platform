import { cn } from "./cn";

export function Section({ children, className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        'w-full py-12 px-4 bg-base-100',
        className
      )}
    >
      <div className="container mx-auto max-w-7xl">{children}</div>
    </section>
  )
}
