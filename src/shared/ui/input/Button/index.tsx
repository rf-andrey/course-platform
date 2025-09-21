import { forwardRef } from "react";
import { cn } from "../../layout/cn";

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', disabled, className, children, ...rest }, ref) => {
    return(
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'btn gap-2',
          `btn-${variant}`,
          disabled && 'btn-disabled',
          className
        )}
        {...rest}
      >
          {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
