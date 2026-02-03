import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Card } from '@/components/ui/Card';
import { clsx } from 'clsx';
import {
  CheckCircle,
  Layers,
  BarChart3,
  FileText,
  Target,
  Zap,
  Shield,
  Clock,
} from 'lucide-react';

type IconName = 'check' | 'layers' | 'chart' | 'file' | 'target' | 'zap' | 'shield' | 'clock';

const iconMap: Record<IconName, React.ElementType> = {
  check: CheckCircle,
  layers: Layers,
  chart: BarChart3,
  file: FileText,
  target: Target,
  zap: Zap,
  shield: Shield,
  clock: Clock,
};

interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

interface FeatureGridProps {
  label?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
  variant?: 'light' | 'dark';
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({
  label = 'Features',
  headline,
  subheadline,
  features,
  variant = 'dark',
  columns = 2,
}: FeatureGridProps) {
  const isDark = variant === 'dark';

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section
      className={clsx(
        'section',
        isDark ? 'bg-neutral-900 text-neutral-50' : 'bg-neutral-50 text-neutral-900'
      )}
    >
      <Container size="xl">
        <div className="text-center mb-16">
          <SectionLabel variant={isDark ? 'light' : 'default'}>{label}</SectionLabel>
          <h2
            className={clsx(
              'font-display text-display-lg mb-4 text-balance',
              isDark ? 'text-neutral-50' : 'text-neutral-900'
            )}
          >
            {headline}
          </h2>
          {subheadline && (
            <p
              className={clsx(
                'text-body-lg max-w-2xl mx-auto',
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              )}
            >
              {subheadline}
            </p>
          )}
        </div>

        <div className={clsx('grid gap-6 lg:gap-8', gridCols[columns])}>
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <div
                key={feature.title}
                className={clsx(
                  'p-6 sm:p-8 rounded-xl transition-colors',
                  isDark
                    ? 'bg-white/5 hover:bg-white/10'
                    : 'bg-white shadow-sm hover:shadow-md',
                  'animate-on-scroll',
                  `stagger-${index + 1}`
                )}
              >
                {/* Icon */}
                <div
                  className={clsx(
                    'w-12 h-12 rounded-xl flex items-center justify-center mb-6',
                    isDark ? 'bg-brand-500/20' : 'bg-brand-100'
                  )}
                >
                  <Icon
                    className={clsx(
                      'h-6 w-6',
                      isDark ? 'text-brand-400' : 'text-brand-500'
                    )}
                  />
                </div>

                {/* Title */}
                <h3
                  className={clsx(
                    'font-display text-heading-lg mb-3',
                    isDark ? 'text-neutral-50' : 'text-neutral-900'
                  )}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className={clsx(
                    'text-body-md leading-relaxed',
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  )}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
