'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

// Static colour values — avoid dynamic Tailwind class generation
const verdicts = [
  {
    id:       'pass',
    label:    'Pass',
    sub:      'Success by design',
    textColor: '#4a7c5c',
    dotColor:  '#4a7c5c',
    lineColor: '#4a7c5c',
    desc:     'The post achieved its stated goal for the reasons you intended. A reliable signal. Build on it.',
    symbol:   '✓',
  },
  {
    id:       'fail',
    label:    'Fail',
    sub:      'Clean miss',
    textColor: '#8c5a5a',
    dotColor:  '#8c5a5a',
    lineColor: '#8c5a5a',
    desc:     'Performance did not meet intent. A clean miss is useful data—it confirms what not to repeat.',
    symbol:   '✕',
  },
  {
    id:       'coincidence',
    label:    'Coincidence',
    sub:      'Success by accident',
    textColor: '#7c6f4a',
    dotColor:  '#7c6f4a',
    lineColor: '#7c6f4a',
    desc:     'Results were strong but disconnected from your strategy. Blocked from reinforcing decisions until recalibrated.',
    symbol:   '~',
  },
  {
    id:       'uncertain',
    label:    'Uncertain',
    sub:      'Insufficient data',
    textColor: '#6b7280',
    dotColor:  '#6b7280',
    lineColor: '#6b7280',
    desc:     'Not enough signal to classify. Hold pattern—revisit when more evidence is available.',
    symbol:   '?',
  },
];

export function VerdictCards() {
  const [ref, visible] = useInView('-100px');
  const v = visible ? 'is-visible' : '';

  return (
    <section
      id="verdicts"
      ref={ref}
      className="bg-genesis-charcoal py-32 px-6 border-b border-white/10"
    >
      <div className="max-w-[90rem] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className={`reveal-left ${v} font-mono text-xs tracking-[0.2em] uppercase text-genesis-teal mb-4 flex items-center gap-2`}>
            <span className="w-2 h-2 bg-genesis-teal inline-block" aria-hidden="true" />
            The verdict system
          </p>

          <h2
            className={`reveal-up ${v} font-serif text-genesis-cream leading-tight max-w-xl`}
            style={{
              fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)',
              transitionDelay: '0.1s',
            }}
          >
            Four outcomes. No ambiguity.
          </h2>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/10">
          {verdicts.map((v2, index) => (
            <div
              key={v2.id}
              className={`reveal-up ${v} border-b border-r border-white/10 p-8 group interactive-zone flex flex-col gap-6`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              {/* Symbol + colour dot */}
              <div className="flex items-start justify-between">
                <span
                  className="font-mono text-3xl select-none"
                  style={{ color: v2.textColor }}
                >
                  {v2.symbol}
                </span>
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                  style={{ backgroundColor: v2.dotColor }}
                />
              </div>

              {/* Labels */}
              <div>
                <p className="font-serif text-xl text-genesis-cream mb-1">{v2.label}</p>
                <p className="font-mono text-xs tracking-widest uppercase text-genesis-cream/40">
                  {v2.sub}
                </p>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-genesis-cream/60 leading-relaxed flex-grow">
                {v2.desc}
              </p>

              {/* Animated bottom-border on hover */}
              <div
                className="h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: v2.lineColor }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
