import { clsx } from 'clsx';

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: 'default' | 'light';
  className?: string;
}

export function SectionLabel({
  children,
  variant = 'default',
  className,
}: SectionLabelProps) {
  return (
    <span
      className={clsx(
        'inline-block text-caption font-bold uppercase tracking-widest mb-4',
        variant === 'default' ? 'text-brand-500' : 'text-brand-400',
        className
      )}
    >
      {children}
    </span>
  );
}
