'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const mechanicalSpring = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 40,
  mass: 1,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-genesis-charcoal text-genesis-cream relative overflow-hidden border-t border-white/10">

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
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={mechanicalSpring}
            className="font-mono text-xs tracking-[0.2em] uppercase text-genesis-teal mb-6 flex items-center gap-2 justify-center md:justify-start"
          >
            <span className="w-2 h-2 bg-genesis-teal inline-block" aria-hidden="true" />
            Decision intelligence
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...mechanicalSpring, delay: 0.1 }}
            className="font-serif text-genesis-cream leading-tight mb-8 max-w-3xl mx-auto md:mx-0"
            style={{ fontSize: 'clamp(2.2rem, 4vw + 0.5rem, 4rem)' }}
          >
            Find out what&apos;s actually driving your results.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...mechanicalSpring, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
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
          </motion.div>
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
