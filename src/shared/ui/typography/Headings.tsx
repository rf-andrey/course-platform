import { cn } from "../layout/cn";

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {};

export function H1({ children, className }: HeadingProps) {
  return (
    <h1 className={cn(
      'font-heading text-3xl font-bold mb-4',
      className
    )}>{children}</h1>
  );
}

export function H2({ children, className }: HeadingProps) {
  return (
    <h2 className={cn(
      'font-heading text-2xl font-semibold mb-4',
      className
    )}>{children}</h2>
  );
}

export function H3({ children }: HeadingProps) {
  return (
    <h3 className={cn(
      'font-heading text-xl font-medium mb-4'
    )}>{children}</h3>
  );
}
