import { clsx } from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const sizeClasses = {
  sm: 'max-w-container-sm',
  md: 'max-w-container-md',
  lg: 'max-w-container-lg',
  xl: 'max-w-container-xl',
  '2xl': 'max-w-container-2xl',
};

export function Container({
  children,
  size = 'xl',
  className,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={clsx(
        'mx-auto px-6',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
