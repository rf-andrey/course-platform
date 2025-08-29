interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {};

export function P({ children }: ParagraphProps) {
  return (
    <p className="font-sans text-base text-neutral">{children}</p>
  );
}

export function Helper({ children }: ParagraphProps) {
  return (
    <p className="font-sans text-sm text-neutral/70">{children}</p>
  );
}
