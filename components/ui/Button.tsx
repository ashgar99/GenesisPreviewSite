import Link from 'next/link';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'brand';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  withArrow?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const variantClasses = {
  primary: clsx(
    'bg-neutral-900 text-white',
    'hover:bg-neutral-800',
    'focus-visible:ring-neutral-900',
    'disabled:bg-neutral-300 disabled:text-neutral-500'
  ),
  secondary: clsx(
    'bg-transparent text-neutral-900 border-2 border-neutral-300',
    'hover:border-neutral-900 hover:bg-white',
    'focus-visible:ring-neutral-900',
    'disabled:border-neutral-200 disabled:text-neutral-400'
  ),
  ghost: clsx(
    'bg-transparent text-neutral-700',
    'hover:bg-neutral-100 hover:text-neutral-900',
    'focus-visible:ring-neutral-500',
    'disabled:text-neutral-400'
  ),
  brand: clsx(
    'bg-brand-500 text-white',
    'hover:bg-brand-600',
    'focus-visible:ring-brand-500',
    'disabled:bg-brand-200'
  ),
};

const sizeClasses = {
  sm: 'px-4 py-2 text-body-sm',
  md: 'px-6 py-3 text-body-md',
  lg: 'px-8 py-4 text-body-lg',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  withArrow = false,
  disabled = false,
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center gap-2 font-semibold rounded-lg',
    'transition-all duration-fast',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          className={clsx(
            'h-4 w-4 transition-transform',
            'group-hover:translate-x-0.5'
          )}
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(baseClasses, 'group')}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={clsx(baseClasses, 'group')}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseClasses, 'group')}
    >
      {content}
    </button>
  );
}
