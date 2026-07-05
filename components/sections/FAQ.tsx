'use client';

import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface FAQItem {
  question: string;
  answer:   string;
}

interface FAQProps {
  headline?: string;
  items:     FAQItem[];
  // legacy prop — ignored in new design
  variant?:  'grid' | 'accordion';
  label?:    string;
}

const defaultItems: FAQItem[] = [
  {
    question: 'How is this different from LinkedIn Analytics?',
    answer:
      'LinkedIn Analytics tells you what happened—impressions, clicks, engagement rate. Genesis tells you why it happened and whether the "why" matches what you intended. Analytics show you numbers. Genesis shows you whether those numbers mean what you think they mean.',
  },
  {
    question: 'What data do I need?',
    answer:
      'Export your content performance data as CSV or XLSX from LinkedIn. Upload it to Genesis. No complex integrations required—setup takes minutes, not days.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. Your content data is encrypted at rest and in transit. It is stored in UK/EU data centres and is never shared with third parties or sold.',
  },
  {
    question: 'How long until I receive my first profile?',
    answer:
      'After uploading your data and declaring your intent, you will receive your first Genesis Profile within 5 business days.',
  },
  {
    question: 'What happens when content succeeds by luck?',
    answer:
      'Genesis marks it as Coincidence and blocks it from reinforcing your strategy. You can recalibrate the intent or exclude it entirely. This prevents lucky outcomes from corrupting your decision-making.',
  },
];

export function FAQ({ headline = 'Common questions, direct answers', items = defaultItems }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, visible] = useInView('-100px');
  const v = visible ? 'is-visible' : '';

  return (
    <section
      id="faq"
      ref={ref}
      className="bg-genesis-cream py-32 px-6 border-b border-genesis-charcoal/10"
    >
      <div className="max-w-[90rem] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className={`reveal-left ${v} font-mono text-xs tracking-[0.2em] uppercase text-genesis-teal mb-4 flex items-center gap-2`}>
            <span className="w-2 h-2 bg-genesis-teal inline-block" aria-hidden="true" />
            FAQ
          </p>

          <h2
            className={`reveal-up ${v} font-serif text-genesis-charcoal leading-tight`}
            style={{
              fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)',
              transitionDelay: '0.1s',
            }}
          >
            {headline}
          </h2>
        </div>

        {/* Clean accordion — no chrome, no rounded corners */}
        <div className="border-t border-genesis-charcoal/15 max-w-3xl">
          {items.map((item, index) => (
            <div
              key={index}
              className={`reveal-fade ${v} border-b border-genesis-charcoal/15`}
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="interactive-zone w-full text-left py-6 flex items-start justify-between gap-6 group"
                aria-expanded={openIndex === index}
              >
                <span className="font-sans text-base text-genesis-charcoal group-hover:text-genesis-teal transition-colors leading-snug pr-4">
                  {item.question}
                </span>

                {/* Hard +/— toggle */}
                <span
                  className="font-mono text-lg text-genesis-charcoal/30 group-hover:text-genesis-teal transition-colors flex-shrink-0 mt-0.5 w-5 text-center select-none"
                  aria-hidden="true"
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* CSS grid accordion — replaces AnimatePresence height:auto */}
              <div className={`accordion-body${openIndex === index ? ' accordion-open' : ''}`}>
                <div>
                  <p className="font-sans text-sm text-genesis-charcoal/60 leading-relaxed pb-6 max-w-2xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
