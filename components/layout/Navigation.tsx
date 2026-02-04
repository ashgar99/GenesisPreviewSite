'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

const navigation = {
  main: [
    {
      name: 'Product',
      href: '/platform',
      children: [
        { name: 'Platform Overview', href: '/platform' },
        { name: 'Example Profile', href: '/outputs' },
        { name: 'How It Works', href: '/#how-it-works' },
        { name: 'Pricing', href: '/pricing' },
      ],
    },
    {
      name: 'Solutions',
      href: '/solutions',
      children: [
        { name: 'For Marketing Leaders', href: '/solutions#marketing-leaders' },
        { name: 'For Founders', href: '/solutions#founders' },
        { name: 'For Agencies', href: '/solutions#agencies' },
      ],
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Resources', href: '/resources' },
    { name: 'Company', href: '/company' },
  ],
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-normal',
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-neutral-900'
      )}
    >
      <nav
        className="container-xl flex items-center justify-between h-[4.5rem]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-neutral-50 hover:text-white transition-colors"
          aria-label="Genesis home"
        >
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navigation.main.map((item) => (
              <li key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={clsx(
                        'flex items-center gap-1 text-body-sm font-medium transition-colors',
                        'text-neutral-300 hover:text-neutral-50',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded'
                      )}
                      aria-expanded={openDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown
                        className={clsx(
                          'h-4 w-4 transition-transform',
                          openDropdown === item.name && 'rotate-180'
                        )}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={clsx(
                        'absolute top-full left-0 pt-2 transition-all',
                        openDropdown === item.name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      )}
                    >
                      <ul className="bg-neutral-800 rounded-lg shadow-xl border border-neutral-700 py-2 min-w-[14rem]">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.href}
                              className={clsx(
                                'block px-4 py-2.5 text-body-sm text-neutral-300',
                                'hover:bg-neutral-700 hover:text-neutral-50 transition-colors',
                                'focus-visible:bg-neutral-700 focus-visible:text-neutral-50 focus-visible:outline-none'
                              )}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={clsx(
                      'text-body-sm font-medium transition-colors',
                      'text-neutral-300 hover:text-neutral-50',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Button href="/contact?source=nav-cta" variant="primary" size="sm">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={clsx(
            'lg:hidden p-2 text-neutral-300 hover:text-neutral-50 transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded'
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={clsx(
          'lg:hidden fixed inset-0 top-[4.5rem] bg-neutral-900 transition-all',
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="container-xl py-6 h-full overflow-y-auto">
          <ul className="space-y-1">
            {navigation.main.map((item) => (
              <li key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      className={clsx(
                        'flex items-center justify-between w-full px-4 py-3 text-body-lg font-medium',
                        'text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800 rounded-lg transition-colors'
                      )}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      aria-expanded={openDropdown === item.name}
                    >
                      {item.name}
                      <ChevronDown
                        className={clsx(
                          'h-5 w-5 transition-transform',
                          openDropdown === item.name && 'rotate-180'
                        )}
                      />
                    </button>
                    <ul
                      className={clsx(
                        'overflow-hidden transition-all',
                        openDropdown === item.name
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      )}
                    >
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            className={clsx(
                              'block pl-8 pr-4 py-3 text-body-md text-neutral-400',
                              'hover:text-neutral-50 hover:bg-neutral-800 rounded-lg transition-colors'
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={clsx(
                      'block px-4 py-3 text-body-lg font-medium',
                      'text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800 rounded-lg transition-colors'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 px-4">
            <Button
              href="/contact?source=mobile-nav-cta"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
