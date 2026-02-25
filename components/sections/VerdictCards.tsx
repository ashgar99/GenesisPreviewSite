'use client';

import React from 'react';
import { motion } from 'framer-motion';

const mechanicalSpring = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 40,
  mass: 1,
};

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
  return (
    <section
      id="verdicts"
      className="bg-genesis-charcoal py-32 px-6 border-b border-white/10"
    >
      <div className="max-w-[90rem] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={mechanicalSpring}
            className="font-mono text-xs tracking-[0.2em] uppercase text-genesis-teal mb-4 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-genesis-teal inline-block" aria-hidden="true" />
            The verdict system
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ...mechanicalSpring, delay: 0.1 }}
            className="font-serif text-genesis-cream leading-tight max-w-xl"
            style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)' }}
          >
            Four outcomes. No ambiguity.
          </motion.h2>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/10">
          {verdicts.map((v, index) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ ...mechanicalSpring, delay: index * 0.08 }}
              className="border-b border-r border-white/10 p-8 group interactive-zone flex flex-col gap-6"
            >
              {/* Symbol + colour dot */}
              <div className="flex items-start justify-between">
                <span
                  className="font-mono text-3xl select-none"
                  style={{ color: v.textColor }}
                >
                  {v.symbol}
                </span>
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                  style={{ backgroundColor: v.dotColor }}
                />
              </div>

              {/* Labels */}
              <div>
                <p className="font-serif text-xl text-genesis-cream mb-1">{v.label}</p>
                <p className="font-mono text-xs tracking-widest uppercase text-genesis-cream/40">
                  {v.sub}
                </p>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-genesis-cream/60 leading-relaxed flex-grow">
                {v.desc}
              </p>

              {/* Animated bottom-border on hover */}
              <div
                className="h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: v.lineColor }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
