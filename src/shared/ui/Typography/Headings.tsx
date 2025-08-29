interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {};

export function H1({ children }: HeadingProps) {
  return (
    <h1 className="font-heading text-3xl font-bold">{children}</h1>
  );
}

export function H2({ children }: HeadingProps) {
  return (
    <h2 className="font-heading text-2xl font-semibold">{children}</h2>
  );
}

export function H3({ children }: HeadingProps) {
  return (
    <h3 className="font-heading text-xl font-medium">{children}</h3>
  );
}
