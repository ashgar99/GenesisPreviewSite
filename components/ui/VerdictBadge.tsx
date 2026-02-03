import { clsx } from 'clsx';
import { Check, X, HelpCircle, AlertTriangle } from 'lucide-react';

type Verdict = 'pass' | 'fail' | 'coincidence' | 'uncertain';

interface VerdictBadgeProps {
  verdict: Verdict;
  count?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const verdictConfig = {
  pass: {
    label: 'Pass',
    color: 'text-success-500',
    bgColor: 'bg-success-500/10',
    borderColor: 'border-success-500/20',
    icon: Check,
  },
  fail: {
    label: 'Fail',
    color: 'text-error-500',
    bgColor: 'bg-error-500/10',
    borderColor: 'border-error-500/20',
    icon: X,
  },
  coincidence: {
    label: 'Coincidence',
    color: 'text-warning-500',
    bgColor: 'bg-warning-500/10',
    borderColor: 'border-warning-500/20',
    icon: AlertTriangle,
  },
  uncertain: {
    label: 'Uncertain',
    color: 'text-neutral-400',
    bgColor: 'bg-neutral-400/10',
    borderColor: 'border-neutral-400/20',
    icon: HelpCircle,
  },
};

const sizeClasses = {
  sm: 'px-2 py-1 text-caption gap-1',
  md: 'px-3 py-1.5 text-body-sm gap-1.5',
  lg: 'px-4 py-2 text-body-md gap-2',
};

const iconSizes = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

export function VerdictBadge({
  verdict,
  count,
  showLabel = true,
  size = 'md',
  className,
}: VerdictBadgeProps) {
  const config = verdictConfig[verdict];
  const Icon = config.icon;

  return (
    <span
      className={clsx(
        'inline-flex items-center font-semibold rounded-lg border',
        config.color,
        config.bgColor,
        config.borderColor,
        sizeClasses[size],
        className
      )}
    >
      <Icon className={iconSizes[size]} />
      {count !== undefined && <span>{count}</span>}
      {showLabel && <span>{config.label}</span>}
    </span>
  );
}

// Verdict card for displaying in grids
interface VerdictCardProps {
  verdict: Verdict;
  count: number;
  className?: string;
}

export function VerdictCard({ verdict, count, className }: VerdictCardProps) {
  const config = verdictConfig[verdict];

  return (
    <div
      className={clsx(
        'bg-white/5 rounded-lg p-4 text-center',
        className
      )}
    >
      <div className={clsx('font-display text-3xl font-normal mb-1', config.color)}>
        {count}
      </div>
      <div className="text-caption uppercase tracking-wider text-neutral-400">
        {config.label}
      </div>
    </div>
  );
}
