import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { clsx } from 'clsx';

interface HeroSecondaryProps {
  label?: string;
  headline: string;
  subheadline?: string;
  cta?: {
    text: string;
    href: string;
  };
  variant?: 'light' | 'dark';
  align?: 'left' | 'center';
}

export function HeroSecondary({
  label,
  headline,
  subheadline,
  cta,
  variant = 'light',
  align = 'center',
}: HeroSecondaryProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={clsx(
        'pt-32 pb-16 sm:pt-40 sm:pb-20',
        isDark ? 'bg-neutral-900' : 'bg-neutral-50'
      )}
    >
      <Container size="xl">
        <div
          className={clsx(
            'max-w-3xl',
            align === 'center' && 'mx-auto text-center'
          )}
        >
          {label && (
            <SectionLabel variant={isDark ? 'light' : 'default'}>
              {label}
            </SectionLabel>
          )}

          <h1
            className={clsx(
              'font-display text-display-lg mb-6 text-balance',
              isDark ? 'text-neutral-50' : 'text-neutral-900'
            )}
          >
            {headline}
          </h1>

          {subheadline && (
            <p
              className={clsx(
                'text-body-lg mb-8',
                isDark ? 'text-neutral-300' : 'text-neutral-600',
                align === 'center' && 'max-w-2xl mx-auto'
              )}
            >
              {subheadline}
            </p>
          )}

          {cta && (
            <Button
              href={cta.href}
              variant={isDark ? 'brand' : 'primary'}
              size="lg"
            >
              {cta.text}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
