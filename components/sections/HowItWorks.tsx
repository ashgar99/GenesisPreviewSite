'use client';

import React from 'react';
import { motion } from 'framer-motion';

const mechanicalSpring = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 40,
  mass: 1,
};

const steps = [
  {
    id:    '01',
    title: 'Declare your intent',
    desc:  "Genesis can't judge success without knowing what success looks like to you.",
  },
  {
    id:    '02',
    title: 'Upload your data',
    desc:  'Export your LinkedIn data. No complex integrations. No API connections to manage.',
  },
  {
    id:    '03',
    title: 'Receive your profile',
    desc:  'A clear breakdown of which posts succeeded for the right reasons.',
    highlight: true,
  },
];

export function HowItWorks() {
  return (
    <section
      id="mechanism"
      className="bg-genesis-cream py-32 px-6 border-b border-genesis-charcoal/10 overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto">

        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={mechanicalSpring}
            className="font-mono text-xs tracking-[0.2em] uppercase text-genesis-teal mb-4 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-genesis-teal inline-block" aria-hidden="true" />
            The mechanism
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ...mechanicalSpring, delay: 0.1 }}
            className="font-serif text-genesis-charcoal leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)' }}
          >
            Force a clean link.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="font-mono text-xs tracking-widest text-genesis-charcoal/40 uppercase mt-3"
          >
            Intent → Evidence → Verdict
          </motion.p>
        </div>

        {/* Diagram container */}
        <div className="relative border border-genesis-charcoal/15 p-8 md:p-16 bg-white/40">

          {/* Background track line */}
          <div
            className="hidden md:block absolute top-[7.5rem] left-[8%] h-px bg-genesis-charcoal/8"
            style={{ width: '84%' }}
            aria-hidden="true"
          />

          {/* Animated active line */}
          <motion.div
            className="hidden md:block absolute top-[7.5rem] left-[8%] h-px bg-genesis-charcoal origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: 'circOut' }}
            style={{ width: '84%' }}
            aria-hidden="true"
          />

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ ...mechanicalSpring, delay: 0.2 + index * 0.35 }}
                className="flex-1 flex flex-col items-center text-center group interactive-zone"
              >
                {/* Node */}
                <div
                  className={`w-14 h-14 flex items-center justify-center border border-genesis-charcoal mb-8 transition-colors duration-300 ${
                    step.highlight
                      ? 'group-hover:bg-genesis-pass group-hover:border-genesis-pass group-hover:text-genesis-cream'
                      : 'group-hover:bg-genesis-charcoal group-hover:text-genesis-cream'
                  } bg-genesis-cream`}
                >
                  <span className="font-mono text-sm text-genesis-charcoal group-hover:text-inherit transition-colors">
                    {step.id}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-genesis-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-genesis-charcoal/60 leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
