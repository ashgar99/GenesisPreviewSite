'use client';

import React from 'react';
import { motion } from 'framer-motion';

const mechanicalSpring = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 40,
  mass: 1,
};

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="bg-genesis-charcoal py-32 px-6 relative z-10 border-b border-white/10"
    >
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

        {/* Left column — provocation label */}
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={mechanicalSpring}
            className="sticky top-32"
          >
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-genesis-fail mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-genesis-fail inline-block" aria-hidden="true" />
              The structural flaw
            </p>

            <h2 className="font-serif text-genesis-cream leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.75rem)' }}>
              LinkedIn analytics tell you what happened.
              {' '}<span className="italic text-genesis-cream/50">They don&apos;t tell you why.</span>
            </h2>
          </motion.div>
        </div>

        {/* Right column — argument */}
        <div className="md:col-span-8 space-y-8 font-sans text-lg text-genesis-cream/70 leading-relaxed max-w-2xl">
          <motion.p
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: 'circOut', delay: 0.1 }}
          >
            You&apos;ve seen a post perform well. The likes are there. But was it the
            hook? The timing? Or something else entirely?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: 'circOut', delay: 0.2 }}
          >
            Teams end up doubling down on tactics that worked once by accident.
            Without knowing <em className="text-genesis-cream not-italic font-medium">why</em> something worked,
            you can&apos;t reliably do it again.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: 'circOut', delay: 0.3 }}
          >
            When a coincidental spike is mistaken for a successful strategy, it
            creates a false standard. You scale noise instead of signal.
          </motion.p>

          {/* Callout — structural emphasis */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ...mechanicalSpring, delay: 0.4 }}
            className="border-l-2 border-genesis-fail pl-6 py-1"
          >
            <p className="font-serif text-xl text-genesis-cream leading-snug italic">
              &ldquo;A win for the wrong reasons is a liability.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
