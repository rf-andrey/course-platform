import { cn } from "./cn";

interface StackProps extends React.HTMLProps<HTMLDivElement> {
  direction?: 'row' | 'col';
  gap?: number;
}

export function Stack({
  children, direction = 'col', gap = 4, className
}: StackProps) {
  return (
    <div
      className={cn(
        'flex',
        `flex-${direction}`,
        `gap-${gap}`,
        className
      )}
    >
      {children}
    </div>
  );
}
