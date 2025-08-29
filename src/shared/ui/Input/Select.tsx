interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  options: {
    value: string;
    label: string
  }[];
}

export function Select({ placeholder, options }: SelectProps) {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>{placeholder}</option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}
