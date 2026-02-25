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

const tiers = [
  {
    name:      'Core',
    subtitle:  'The foundation',
    features: [
      'Monthly Genesis Profile',
      'Verdict system classifications',
      'Intent declaration framework',
      'Basic pattern recognition',
      'Email delivery',
    ],
    highlight: false,
  },
  {
    name:      'Advanced',
    subtitle:  'Most complete',
    features: [
      'Bi-weekly profiles',
      'Deep pattern analysis',
      'Alignment score tracking',
      'Reasoning traces per verdict',
      'Slack integration',
    ],
    highlight: true,
  },
  {
    name:      'Enterprise',
    subtitle:  'Real-time calibration',
    features: [
      'Weekly profiles',
      'Custom intent frameworks',
      'Multi-account analysis',
      'API access & JSON exports',
      'Dedicated analyst support',
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
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
            Access
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ...mechanicalSpring, delay: 0.1 }}
            className="font-serif text-genesis-charcoal leading-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)' }}
          >
            What you get access to
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="font-mono text-xs text-genesis-charcoal/40 tracking-wider uppercase"
          >
            Three tiers of access, each building on the last.
          </motion.p>
        </div>

        {/* Brutalist pricing table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-genesis-charcoal">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`border-b border-r border-genesis-charcoal p-8 md:p-12 flex flex-col ${
                tier.highlight
                  ? 'bg-genesis-charcoal text-genesis-cream'
                  : 'bg-transparent text-genesis-charcoal'
              }`}
            >
              {/* Tier header */}
              <div className="mb-10">
                <p
                  className={`font-mono text-[10px] tracking-[0.2em] uppercase mb-4 ${
                    tier.highlight ? 'text-genesis-cream/50' : 'text-genesis-charcoal/40'
                  }`}
                >
                  {tier.subtitle}
                </p>
                <h3 className="font-serif text-3xl">{tier.name}</h3>
              </div>

              {/* Feature list */}
              <ul className="space-y-3.5 mb-12 flex-grow">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 font-mono text-xs leading-relaxed ${
                      tier.highlight ? 'text-genesis-cream/80' : 'text-genesis-charcoal/70'
                    }`}
                  >
                    <span
                      className={`mt-0.5 ${tier.highlight ? 'text-genesis-cream/30' : 'text-genesis-charcoal/30'}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact?source=pricing"
                className={`interactive-zone w-full py-4 font-mono text-xs uppercase tracking-widest border text-center block transition-colors duration-300 ${
                  tier.highlight
                    ? 'border-genesis-cream text-genesis-cream hover:bg-genesis-cream hover:text-genesis-charcoal'
                    : 'border-genesis-charcoal text-genesis-charcoal hover:bg-genesis-charcoal hover:text-genesis-cream'
                }`}
              >
                Request access
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
