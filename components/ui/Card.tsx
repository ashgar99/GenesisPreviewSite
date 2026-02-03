import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const variantClasses = {
  default: 'bg-neutral-50',
  elevated: 'bg-white shadow-md',
  outlined: 'bg-white border border-neutral-200',
  dark: 'bg-neutral-800 text-neutral-50',
};

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6 sm:p-8',
  lg: 'p-8 sm:p-10',
};

export function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  className,
  as: Component = 'div',
}: CardProps) {
  return (
    <Component
      className={clsx(
        'rounded-xl',
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
}
