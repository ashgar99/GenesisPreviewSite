import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { clsx } from 'clsx';

interface Metric {
  value: string;
  label: string;
  context?: string;
  isPlaceholder?: boolean;
}

interface OutcomesMetricsProps {
  label?: string;
  headline: string;
  metrics: Metric[];
  sourceNote?: string;
}

export function OutcomesMetrics({
  label = 'Outcomes',
  headline,
  metrics,
  sourceNote,
}: OutcomesMetricsProps) {
  const hasPlaceholders = metrics.some((m) => m.isPlaceholder);

  return (
    <section className="section bg-neutral-50">
      <Container size="xl">
        <div className="text-center mb-16">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="font-display text-display-lg text-neutral-900 text-balance">
            {headline}
          </h2>
        </div>

        <div
          className={clsx(
            'grid gap-8',
            metrics.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
          )}
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={clsx(
                'text-center p-6 rounded-xl',
                metric.isPlaceholder
                  ? 'bg-neutral-200/50 border-2 border-dashed border-neutral-300'
                  : 'bg-white shadow-sm'
              )}
            >
              {/* Value */}
              <div
                className={clsx(
                  'font-display text-4xl sm:text-5xl mb-2',
                  metric.isPlaceholder ? 'text-neutral-400' : 'text-neutral-900'
                )}
              >
                {metric.value}
              </div>

              {/* Label */}
              <div
                className={clsx(
                  'text-body-md font-medium mb-1',
                  metric.isPlaceholder ? 'text-neutral-400' : 'text-neutral-700'
                )}
              >
                {metric.label}
              </div>

              {/* Context */}
              {metric.context && (
                <div
                  className={clsx(
                    'text-body-sm',
                    metric.isPlaceholder ? 'text-neutral-400' : 'text-neutral-500'
                  )}
                >
                  {metric.context}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Source note or placeholder warning */}
        {sourceNote && (
          <p className="text-center text-body-sm text-neutral-500 mt-8">
            {sourceNote}
          </p>
        )}
        {hasPlaceholders && (
          <p className="text-center text-caption text-neutral-400 mt-6 italic">
            [TODO: Replace placeholder metrics with real data when available]
          </p>
        )}
      </Container>
    </section>
  );
}
