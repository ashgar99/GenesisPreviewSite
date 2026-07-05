'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

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
  const [ref, visible] = useInView('-100px');
  const v = visible ? 'is-visible' : '';

  return (
    <section
      id="mechanism"
      ref={ref}
      className="bg-genesis-cream py-32 px-6 border-b border-genesis-charcoal/10 overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto">

        {/* Header */}
        <div className="mb-20">
          <p className={`reveal-left ${v} font-mono text-xs tracking-[0.2em] uppercase text-genesis-teal mb-4 flex items-center gap-2`}>
            <span className="w-2 h-2 bg-genesis-teal inline-block" aria-hidden="true" />
            The mechanism
          </p>

          <h2
            className={`reveal-up ${v} font-serif text-genesis-charcoal leading-tight`}
            style={{
              fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)',
              transitionDelay: '0.1s',
            }}
          >
            Force a clean link.
          </h2>

          <p
            className={`reveal-fade ${v} font-mono text-xs tracking-widest text-genesis-charcoal/40 uppercase mt-3`}
            style={{ transitionDelay: '0.2s' }}
          >
            Intent → Evidence → Verdict
          </p>
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
          <div
            className={`reveal-scale-x ${v} hidden md:block absolute top-[7.5rem] left-[8%] h-px bg-genesis-charcoal`}
            style={{ width: '84%' }}
            aria-hidden="true"
          />

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`reveal-up ${v} flex-1 flex flex-col items-center text-center group interactive-zone`}
                style={{ transitionDelay: `${0.2 + index * 0.35}s` }}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
