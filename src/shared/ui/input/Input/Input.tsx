import { forwardRef } from "react";
import { cn } from "../../layout/cn";

export interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = 'text', error, className, ...rest }, ref) => {
    return (
      <label className="floating-label form-control w-full max-w-sm">
        {label && (
          <span>{label}</span>
        )}
        <input
          ref={ref}
          type={type}
          className={cn('input input-bordered w-full max-w-sm focus:outline-none', className)}
          {...rest}
        />
        <span className="label-text-alt text-error validator-hint">{error}</span>
      </label>
    );
  }
);

Input.displayName = 'Input';
