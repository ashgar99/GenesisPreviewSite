'use client';

import React from 'react';
import { motion } from 'framer-motion';

const mechanicalSpring = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 40,
  mass: 1,
};

const personas = [
  {
    id:      'marketing',
    index:   '01',
    title:   'Heads of marketing',
    tagline: 'Need evidence to back strategy',
    desc:    "Stop defending results with anecdote. Genesis gives you a structured verdict system that separates strategy-driven wins from circumstantial ones—so your reporting is defensible.",
    signals: ['Monthly Genesis Profile', 'Alignment score tracking', 'Reasoning traces'],
  },
  {
    id:      'founders',
    index:   '02',
    title:   'Founders',
    tagline: "Don't have time to guess what works",
    desc:    "You're posting. Some things perform. Some don't. Genesis tells you which is which—quickly, clearly, without requiring you to become a data analyst.",
    signals: ['Clear Pass/Fail verdicts', 'Pattern recognition', 'Intent framework'],
  },
  {
    id:      'agencies',
    index:   '03',
    title:   'Agencies',
    tagline: 'Need proof that distinguishes work from commodity content',
    desc:    "Anyone can produce content. Not everyone can prove it worked for the right reasons. Genesis gives you a forensic layer that elevates your reporting above vanity metrics.",
    signals: ['Multi-account analysis', 'Client-ready reports', 'Verdict-based delivery'],
  },
];

export function WhoItsFor() {
  return (
    <section
      id="who"
      className="bg-genesis-cream py-32 px-6 border-b border-genesis-charcoal/10"
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
            Who it&apos;s for
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ...mechanicalSpring, delay: 0.1 }}
            className="font-serif text-genesis-charcoal leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)' }}
          >
            Built for those who need to know.
          </motion.h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-genesis-charcoal/15">
          {personas.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ ...mechanicalSpring, delay: index * 0.1 }}
              className="border-b border-r border-genesis-charcoal/15 p-8 md:p-10 interactive-zone group"
            >
              <p className="font-mono text-xs text-genesis-charcoal/25 mb-6">{p.index}</p>

              <h3 className="font-serif text-2xl text-genesis-charcoal mb-2">{p.title}</h3>
              <p className="font-mono text-xs tracking-widest uppercase text-genesis-charcoal/40 mb-6">
                {p.tagline}
              </p>

              <p className="font-sans text-sm text-genesis-charcoal/65 leading-relaxed mb-8">
                {p.desc}
              </p>

              <ul className="space-y-2 border-t border-genesis-charcoal/10 pt-6">
                {p.signals.map((s) => (
                  <li key={s} className="flex items-center gap-3 font-mono text-xs text-genesis-charcoal/50">
                    <span className="text-genesis-teal" aria-hidden="true">+</span>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
