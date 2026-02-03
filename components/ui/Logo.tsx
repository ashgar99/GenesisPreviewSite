import { clsx } from 'clsx';

interface LogoProps {
  variant?: 'dark' | 'light';
  showMark?: boolean;
  className?: string;
}

export function Logo({ variant = 'light', showMark = true, className }: LogoProps) {
  const textColor = variant === 'light' ? 'text-neutral-50' : 'text-neutral-900';

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      {showMark && (
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8"
          fill="none"
          aria-hidden="true"
        >
          {/* Genesis mark - Dual circles representing RIM + IEM */}
          <circle
            cx="12"
            cy="16"
            r="10"
            className={variant === 'light' ? 'stroke-brand-400' : 'stroke-brand-500'}
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="20"
            cy="16"
            r="10"
            className={variant === 'light' ? 'stroke-neutral-400' : 'stroke-neutral-600'}
            strokeWidth="2"
            fill="none"
          />
          {/* Intersection highlight */}
          <path
            d="M16 8.5 C18.5 11, 18.5 21, 16 23.5 C13.5 21, 13.5 11, 16 8.5"
            className={variant === 'light' ? 'fill-brand-400/30' : 'fill-brand-500/30'}
          />
        </svg>
      )}
      <span className={clsx('font-display text-2xl font-normal', textColor)}>
        Genesis
      </span>
    </div>
  );
}
