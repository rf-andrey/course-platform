interface SpinnerProps {
  size?: string;
}

export function Spinner ({ size = 'md' }: SpinnerProps) {
  return (
    <span className={`loading loading-spinner loading-${size}`} />
  )
}