interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({
  onClick, disabled, type, variant, className, children
}: ButtonProps) {
  return(
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn btn-${variant} gap-2 ${disabled ? 'btn-disabled' : ''} ${className}`}
    >
        {children}
    </button>
  );
}
