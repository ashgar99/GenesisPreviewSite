'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  label?: string;
  headline: string;
  items: FAQItem[];
  variant?: 'grid' | 'accordion';
}

export function FAQ({
  label = 'FAQ',
  headline,
  items,
  variant = 'grid',
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (variant === 'accordion') {
    return (
      <section className="section bg-neutral-50">
        <Container size="lg">
          <div className="text-center mb-12">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="font-display text-display-lg text-neutral-900 text-balance">
              {headline}
            </h2>
          </div>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={clsx(
                    'w-full px-6 py-5 text-left flex items-center justify-between gap-4',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-inset'
                  )}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-display text-heading-md text-neutral-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={clsx(
                      'h-5 w-5 text-neutral-500 flex-shrink-0 transition-transform',
                      openIndex === index && 'rotate-180'
                    )}
                  />
                </button>
                <div
                  className={clsx(
                    'overflow-hidden transition-all duration-normal',
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <p className="px-6 pb-5 text-body-md text-neutral-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // Grid variant
  return (
    <section className="section bg-neutral-50">
      <Container size="xl">
        <div className="text-center mb-12">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="font-display text-display-lg text-neutral-900 text-balance">
            {headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-heading-lg text-neutral-900 mb-4">
                {item.question}
              </h3>
              <p className="text-body-md text-neutral-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
