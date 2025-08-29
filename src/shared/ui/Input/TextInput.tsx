export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error?: string;
};

export function Input({ placeholder, type = 'text', error }: InputProps) {
  return (
    <label className="form-control w-full max-w-sm">
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-sm"
      />
      <span className="label-text-alt text-error">{error}</span>
    </label>
  );
};
