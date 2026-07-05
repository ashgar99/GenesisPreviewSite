'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export function ProblemSection() {
  const [ref, visible] = useInView('-100px');
  const v = visible ? 'is-visible' : '';

  return (
    <section
      id="problem"
      ref={ref}
      className="bg-genesis-charcoal py-32 px-6 relative z-10 border-b border-white/10"
    >
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

        {/* Left column — provocation label */}
        <div className="md:col-span-4">
          <div className={`reveal-left ${v} sticky top-32`}>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-genesis-fail mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-genesis-fail inline-block" aria-hidden="true" />
              The structural flaw
            </p>

            <h2 className="font-serif text-genesis-cream leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.75rem)' }}>
              LinkedIn analytics tell you what happened.
              {' '}<span className="italic text-genesis-cream/50">They don&apos;t tell you why.</span>
            </h2>
          </div>
        </div>

        {/* Right column — argument */}
        <div className="md:col-span-8 space-y-8 font-sans text-lg text-genesis-cream/70 leading-relaxed max-w-2xl">
          <p
            className={`reveal-scan ${v}`}
            style={{ transitionDelay: '0.1s' }}
          >
            You&apos;ve seen a post perform well. The likes are there. But was it the
            hook? The timing? Or something else entirely?
          </p>

          <p
            className={`reveal-scan ${v}`}
            style={{ transitionDelay: '0.2s' }}
          >
            Teams end up doubling down on tactics that worked once by accident.
            Without knowing <em className="text-genesis-cream not-italic font-medium">why</em> something worked,
            you can&apos;t reliably do it again.
          </p>

          <p
            className={`reveal-scan ${v}`}
            style={{ transitionDelay: '0.3s' }}
          >
            When a coincidental spike is mistaken for a successful strategy, it
            creates a false standard. You scale noise instead of signal.
          </p>

          {/* Callout — structural emphasis */}
          <div
            className={`reveal-up ${v} border-l-2 border-genesis-fail pl-6 py-1`}
            style={{ transitionDelay: '0.4s' }}
          >
            <p className="font-serif text-xl text-genesis-cream leading-snug italic">
              &ldquo;A win for the wrong reasons is a liability.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
