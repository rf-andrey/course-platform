import { cn } from './cn';

interface PageWrapperProps extends React.HTMLProps<HTMLElement> {
  center?: boolean;
}

export function PageWrapper({ children, center = false, className }: PageWrapperProps) {
  return (
    <main
      className={cn(
        'min-h-screen bg-base-100 px-4',
        center && 'flex items-center justify-center',
        className
      )}
    >
      <div className='container mx-auto max-w-7xl py-8'>
        {children}
      </div>
    </main>
  );
}
