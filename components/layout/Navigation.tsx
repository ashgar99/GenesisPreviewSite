'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-normal',
        isScrolled
          ? 'bg-genesis-charcoal/90 backdrop-blur-md border-b border-white/10'
          : 'bg-genesis-charcoal/60 backdrop-blur-sm'
      )}
    >
      <nav
        className="max-w-[90rem] mx-auto px-6 flex items-center justify-between h-[4rem]"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="interactive-zone font-mono text-sm tracking-[0.25em] uppercase text-genesis-cream hover:text-genesis-teal transition-colors"
          aria-label="Genesis home"
        >
          Genesis.
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {[
              { label: 'How it works', href: '/#mechanism' },
              { label: 'Features',     href: '/#verdicts'  },
              { label: 'FAQ',          href: '/#faq'       },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={clsx(
                    'interactive-zone font-mono text-xs tracking-widest uppercase',
                    'text-genesis-cream/60 hover:text-genesis-cream transition-colors'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact?source=nav"
            className={clsx(
              'interactive-zone font-mono text-xs tracking-widest uppercase',
              'px-5 py-2.5 border border-genesis-cream text-genesis-cream',
              'hover:bg-genesis-cream hover:text-genesis-charcoal transition-colors'
            )}
          >
            Get your first profile
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="interactive-zone lg:hidden p-2 text-genesis-cream/70 hover:text-genesis-cream transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={clsx(
          'lg:hidden fixed inset-0 top-[4rem] bg-genesis-charcoal border-t border-white/10 transition-all',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="px-6 py-8 space-y-6">
          {[
            { label: 'How it works', href: '/#mechanism' },
            { label: 'Features',     href: '/#verdicts'  },
            { label: 'FAQ',          href: '/#faq'       },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="interactive-zone block font-mono text-sm tracking-widest uppercase text-genesis-cream/70 hover:text-genesis-cream transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact?source=mobile-nav"
            className={clsx(
              'interactive-zone block font-mono text-xs tracking-widest uppercase text-center',
              'px-5 py-4 border border-genesis-cream text-genesis-cream',
              'hover:bg-genesis-cream hover:text-genesis-charcoal transition-colors'
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get your first profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
