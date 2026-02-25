'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const mechanicalSpring = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 40,
  mass: 1,
};

export function SolutionOverview() {
  return (
    <section
      id="solution"
      className="bg-genesis-cream py-32 px-6 relative z-10 border-b border-genesis-charcoal/10"
    >
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

        {/* Left — label + headline */}
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={mechanicalSpring}
            className="sticky top-32"
          >
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-genesis-pass mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-genesis-pass inline-block" aria-hidden="true" />
              The resolution
            </p>

            <h2
              className="font-serif text-genesis-charcoal leading-tight mb-6"
              style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.75rem)' }}
            >
              Genesis tells you if results happened{' '}
              <span className="italic">for the right reasons.</span>
            </h2>

            <Link
              href="/contact?source=solution-cta"
              className="interactive-zone inline-flex items-center font-mono text-xs tracking-widest uppercase px-6 py-3.5 border border-genesis-charcoal text-genesis-charcoal hover:bg-genesis-charcoal hover:text-genesis-cream transition-colors"
            >
              Get your first profile
            </Link>
          </motion.div>
        </div>

        {/* Right — body copy */}
        <div className="md:col-span-7 space-y-8 font-sans text-lg text-genesis-charcoal/70 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: 'circOut', delay: 0.1 }}
          >
            When a post performs well, Genesis shows you whether it performed{' '}
            <strong className="text-genesis-charcoal font-medium">because of</strong> your
            strategy—or <strong className="text-genesis-charcoal font-medium">despite</strong> it.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: 'circOut', delay: 0.2 }}
          >
            Coincidental wins are blocked from reinforcing future decisions until
            you recalibrate. Only verified successes and clean failures shape your
            strategy going forward.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: 'circOut', delay: 0.3 }}
          >
            Build on what actually works, not what happened to work once.
          </motion.p>

          {/* Three signal metrics */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ...mechanicalSpring, delay: 0.4 }}
            className="grid grid-cols-3 gap-0 border border-genesis-charcoal/20 mt-12"
          >
            {[
              { value: '4',     label: 'Verdict types',         sub: 'Pass / Fail / Coincidence / Uncertain' },
              { value: '100%',  label: 'Decisions traced',      sub: 'Full reasoning for every verdict'      },
              { value: '1',     label: 'Alignment score',       sub: 'Track strategy fit over time'          },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`p-5 ${i < 2 ? 'border-r border-genesis-charcoal/20' : ''}`}
              >
                <p className="font-mono text-2xl text-genesis-charcoal mb-1">{stat.value}</p>
                <p className="font-sans text-xs text-genesis-charcoal/60">{stat.label}</p>
                <p className="font-mono text-[10px] text-genesis-charcoal/30 mt-1">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
