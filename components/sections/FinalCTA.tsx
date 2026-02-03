'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { clsx } from 'clsx';

interface FinalCTAProps {
  headline: string;
  subheadline?: string;
  showForm?: boolean;
  formPlaceholder?: string;
  buttonText?: string;
  note?: string;
  variant?: 'light' | 'dark';
  buttonHref?: string;
}

export function FinalCTA({
  headline,
  subheadline,
  showForm = true,
  formPlaceholder = 'Enter your email',
  buttonText = 'Get started',
  note,
  variant = 'dark',
  buttonHref = '/contact',
}: FinalCTAProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isDark = variant === 'dark';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section
      className={clsx(
        'section',
        isDark ? 'bg-neutral-900' : 'bg-neutral-100'
      )}
    >
      <Container size="md">
        <div className="text-center">
          <h2
            className={clsx(
              'font-display text-display-md mb-4',
              isDark ? 'text-neutral-50' : 'text-neutral-900'
            )}
          >
            {headline}
          </h2>

          {subheadline && (
            <p
              className={clsx(
                'text-body-lg mb-10 max-w-xl mx-auto',
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              )}
            >
              {subheadline}
            </p>
          )}

          {showForm ? (
            isSubmitted ? (
              <div
                className={clsx(
                  'py-6 px-8 rounded-xl max-w-md mx-auto',
                  isDark ? 'bg-success-500/20' : 'bg-success-500/10'
                )}
              >
                <p
                  className={clsx(
                    'text-body-lg font-medium',
                    isDark ? 'text-success-400' : 'text-success-500'
                  )}
                >
                  Thanks! We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <div className="flex-1">
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={formPlaceholder}
                    required
                    aria-label="Email address"
                    className={clsx(
                      isDark &&
                        'bg-neutral-800 border-neutral-700 text-neutral-50 placeholder:text-neutral-400'
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  variant={isDark ? 'brand' : 'primary'}
                  size="md"
                  disabled={isSubmitting}
                  className="whitespace-nowrap"
                >
                  {isSubmitting ? 'Sending...' : buttonText}
                </Button>
              </form>
            )
          ) : (
            <Button
              href={buttonHref}
              variant={isDark ? 'brand' : 'primary'}
              size="lg"
            >
              {buttonText}
            </Button>
          )}

          {note && (
            <p
              className={clsx(
                'text-body-sm mt-6',
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              )}
            >
              {note}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
