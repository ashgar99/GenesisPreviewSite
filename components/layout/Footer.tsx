'use client';

import React from 'react';
import Link from 'next/link';
import { useInView } from '@/hooks/useInView';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [ref, visible] = useInView('-80px');
  const v = visible ? 'is-visible' : '';

  return (
    <footer ref={ref} className="bg-genesis-charcoal text-genesis-cream relative overflow-hidden border-t border-white/10">

      {/* Massive background wordmark — 10% opacity datum typography */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-serif font-bold text-genesis-cream whitespace-nowrap"
          style={{
            fontSize: 'clamp(8rem, 20vw, 22rem)',
            opacity: 0.055,
            letterSpacing: '-0.03em',
            userSelect: 'none',
          }}
        >
          GENESIS
        </span>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6">

        {/* Main CTA block */}
        <div className="py-28 md:py-36 border-b border-white/10 text-center md:text-left">
          <p className={`reveal-left ${v} font-mono text-xs tracking-[0.2em] uppercase text-genesis-teal mb-6 flex items-center gap-2 justify-center md:justify-start`}>
            <span className="w-2 h-2 bg-genesis-teal inline-block" aria-hidden="true" />
            Decision intelligence
          </p>

          <h2
            className={`reveal-up ${v} font-serif text-genesis-cream leading-tight mb-8 max-w-3xl mx-auto md:mx-0`}
            style={{
              fontSize: 'clamp(2.2rem, 4vw + 0.5rem, 4rem)',
              transitionDelay: '0.1s',
            }}
          >
            Find out what&apos;s actually driving your results.
          </h2>

          <div
            className={`reveal-up-sm ${v} flex flex-col sm:flex-row gap-4 justify-center md:justify-start`}
            style={{ transitionDelay: '0.25s' }}
          >
            <Link
              href="/contact?source=footer-cta"
              className="interactive-zone inline-flex items-center justify-center px-8 py-4 font-mono text-xs tracking-widest uppercase bg-genesis-cream text-genesis-charcoal hover:bg-white transition-colors"
            >
              Get your first profile
            </Link>
            <Link
              href="/#mechanism"
              className="interactive-zone inline-flex items-center justify-center px-8 py-4 font-mono text-xs tracking-widest uppercase border border-genesis-cream/30 text-genesis-cream/70 hover:border-genesis-cream hover:text-genesis-cream transition-colors"
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* Links + meta row */}
        <div className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Wordmark */}
          <Link
            href="/"
            className="interactive-zone font-mono text-sm tracking-[0.25em] uppercase text-genesis-cream/70 hover:text-genesis-cream transition-colors"
          >
            Genesis.
          </Link>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-6">
            {[
              { label: 'Platform',  href: '/platform'      },
              { label: 'Pricing',   href: '/pricing'       },
              { label: 'Privacy',   href: '/legal/privacy' },
              { label: 'Terms',     href: '/legal/terms'   },
              { label: 'Contact',   href: '/contact'       },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="interactive-zone font-mono text-xs tracking-widest uppercase text-genesis-cream/40 hover:text-genesis-cream/80 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="font-mono text-xs text-genesis-cream/25">
            © {currentYear} Genesis
          </p>
        </div>
      </div>
    </footer>
  );
}
