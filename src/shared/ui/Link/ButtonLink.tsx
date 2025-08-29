import Link from 'next/link';

interface ButtonLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function ButtonLink({
  href, variant = 'primary', className, disabled, children, target = '_self'
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel="noreferrer noopener"
      className={`btn btn-${variant} ${disabled ? 'btn-disabled' : ''} ${className}`}
    >
      {children}
    </Link>
  );
}
