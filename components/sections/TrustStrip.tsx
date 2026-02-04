'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';

// Client logos - these are companies whose marketers might use Genesis
const clientLogos = [
  { name: 'Revolut', src: '/images/clients/revolut-logo.png' },
  { name: 'Accenture', src: '/images/clients/accenture.png' },
  { name: 'Capgemini', src: '/images/clients/capgemini_logo_2col_rgb.png' },
  { name: 'Deliveroo', src: '/images/clients/deliveroo-logo.svg' },
  { name: 'Waitrose', src: '/images/clients/waitrose-logo-(1).png' },
  { name: 'National Grid', src: '/images/clients/national-grid-logo.png' },
  { name: 'WSP', src: '/images/clients/wsp_logo.svg.png' },
  { name: 'Mind', src: '/images/clients/mind_charity_logo_2021.png' },
  { name: 'Checkatrade', src: '/images/clients/checkatrade_logo_2023.svg.png' },
  { name: 'Ably', src: '/images/clients/ably-logo-col-cmyk_-_630_x_198-4a935feb-c17e-45a0-9fff-b1cbb9f59e02.png' },
];

interface TrustStripProps {
  label?: string;
  variant?: 'light' | 'dark';
  placeholderText?: string;
}

export function TrustStrip({
  label = 'Built for marketing teams at companies like',
  variant = 'light',
  placeholderText,
}: TrustStripProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Double the logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      className={clsx(
        'py-10 sm:py-14 overflow-hidden',
        variant === 'light' ? 'bg-neutral-100' : 'bg-neutral-800'
      )}
    >
      {/* Label */}
      <div className="text-center mb-8">
        <span
          className={clsx(
            'text-body-sm font-medium uppercase tracking-wider',
            variant === 'light' ? 'text-neutral-500' : 'text-neutral-400'
          )}
        >
          {label}
        </span>
      </div>

      {/* Animated logo marquee */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div
          className={clsx(
            'absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none',
            variant === 'light'
              ? 'bg-gradient-to-r from-neutral-100 to-transparent'
              : 'bg-gradient-to-r from-neutral-800 to-transparent'
          )}
        />
        <div
          className={clsx(
            'absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none',
            variant === 'light'
              ? 'bg-gradient-to-l from-neutral-100 to-transparent'
              : 'bg-gradient-to-l from-neutral-800 to-transparent'
          )}
        />

        {/* Scrolling container */}
        <div
          className={clsx(
            'flex items-center gap-12 sm:gap-16',
            !prefersReducedMotion && 'animate-marquee'
          )}
          style={{
            width: 'max-content',
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className={clsx(
                'flex-shrink-0 h-10 sm:h-12 w-auto flex items-center justify-center',
                'transition-all duration-300',
                variant === 'light'
                  ? 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'
                  : 'opacity-30 hover:opacity-100 grayscale hover:grayscale-0'
              )}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 sm:h-10 w-auto max-w-[120px] sm:max-w-[150px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reduced motion fallback - static grid */}
      {prefersReducedMotion && (
        <div className="container-xl mt-4">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {clientLogos.slice(0, 6).map((logo) => (
              <div
                key={logo.name}
                className={clsx(
                  'h-10 flex items-center',
                  variant === 'light' ? 'opacity-50' : 'opacity-40',
                  'grayscale'
                )}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 w-auto max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
