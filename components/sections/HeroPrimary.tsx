'use client';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { VerdictCard } from '@/components/ui/VerdictBadge';
import { clsx } from 'clsx';

interface HeroPrimaryProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showMockup?: boolean;
}

export function HeroPrimary({
  badge,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  showMockup = true,
}: HeroPrimaryProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-neutral-50 to-neutral-100 pt-24 pb-16 overflow-hidden">
      {/* Subtle background pattern - Genesis dual circles motif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg
          className="absolute top-1/4 -left-48 w-96 h-96 opacity-[0.03]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="80" cy="100" r="80" stroke="currentColor" strokeWidth="1" />
          <circle cx="120" cy="100" r="80" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          className="absolute bottom-1/4 -right-48 w-96 h-96 opacity-[0.03]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="80" cy="100" r="80" stroke="currentColor" strokeWidth="1" />
          <circle cx="120" cy="100" r="80" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <Container size="xl" className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          {badge && (
            <Badge variant="default" className="mb-6 animate-fade-in">
              {badge}
            </Badge>
          )}

          {/* Headline */}
          <h1
            className={clsx(
              'font-display text-display-xl text-neutral-900 mb-6',
              'text-balance animate-slide-up'
            )}
            style={{ animationDelay: '0.1s' }}
          >
            {headline}
          </h1>

          {/* Subheadline */}
          <p
            className={clsx(
              'text-body-lg text-neutral-600 max-w-2xl mx-auto mb-10',
              'animate-slide-up'
            )}
            style={{ animationDelay: '0.2s' }}
          >
            {subheadline}
          </p>

          {/* CTAs */}
          <div
            className={clsx(
              'flex flex-col sm:flex-row gap-4 justify-center',
              'animate-slide-up'
            )}
            style={{ animationDelay: '0.3s' }}
          >
            <Button href={primaryCta.href} variant="primary" size="lg">
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>

        {/* Genesis Profile Mockup */}
        {showMockup && (
          <div
            className="mt-16 max-w-3xl mx-auto animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="bg-neutral-900 rounded-xl p-6 sm:p-8 shadow-xl">
              {/* Mockup Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                <span className="font-display text-lg text-neutral-50">
                  Genesis Profile
                </span>
                <span className="text-body-sm text-brand-400 bg-brand-500/20 px-3 py-1 rounded">
                  January 2026
                </span>
              </div>

              {/* Verdict Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <VerdictCard verdict="pass" count={4} />
                <VerdictCard verdict="fail" count={3} />
                <VerdictCard verdict="coincidence" count={3} />
                <VerdictCard verdict="uncertain" count={2} />
              </div>

              {/* Confidence Bar */}
              <div className="space-y-2">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 rounded-full"
                    style={{ width: '67%' }}
                  />
                </div>
                <div className="flex justify-between text-body-sm">
                  <span className="text-neutral-400">Pattern confidence</span>
                  <span className="text-neutral-50 font-semibold">
                    67% <span className="text-success-500">(+9%)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
