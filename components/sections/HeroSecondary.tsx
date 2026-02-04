'use client';

import { useEffect, useState } from 'react';
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
  videoSrc?: string;
}

export function HeroSecondary({
  label,
  headline,
  subheadline,
  cta,
  variant = 'light',
  align = 'center',
  videoSrc,
}: HeroSecondaryProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // If video is provided, always render dark variant
  const isDark = videoSrc ? true : variant === 'dark';

  return (
    <section
      className={clsx(
        'relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden',
        !videoSrc && (isDark ? 'bg-neutral-900' : 'bg-neutral-50')
      )}
    >
      {/* Video Background */}
      {videoSrc && !prefersReducedMotion && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-neutral-950/70" />
        </div>
      )}

      {/* Static fallback for reduced motion or video pages */}
      {videoSrc && prefersReducedMotion && (
        <div className="absolute inset-0 z-0 bg-neutral-900" />
      )}

      <Container size="xl" className="relative z-10">
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
