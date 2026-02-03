import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'success' | 'error' | 'warning';
  size?: 'sm' | 'md';
  className?: string;
}

const variantClasses = {
  default: 'bg-neutral-900 text-neutral-50',
  brand: 'bg-brand-100 text-brand-600',
  success: 'bg-success-500/10 text-success-500',
  error: 'bg-error-500/10 text-error-500',
  warning: 'bg-warning-500/10 text-warning-500',
};

const sizeClasses = {
  sm: 'px-2.5 py-1 text-caption',
  md: 'px-4 py-1.5 text-body-sm',
};

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-semibold rounded-full',
        'tracking-wide uppercase',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
