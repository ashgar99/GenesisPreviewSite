'use client';

import React from 'react';
import Link from 'next/link';
import { useInView } from '@/hooks/useInView';

export function SolutionOverview() {
  const [ref, visible] = useInView('-100px');
  const v = visible ? 'is-visible' : '';

  return (
    <section
      id="solution"
      ref={ref}
      className="bg-genesis-cream py-32 px-6 relative z-10 border-b border-genesis-charcoal/10"
    >
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

        {/* Left — label + headline */}
        <div className="md:col-span-5">
          <div className={`reveal-left ${v} sticky top-32`}>
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
          </div>
        </div>

        {/* Right — body copy */}
        <div className="md:col-span-7 space-y-8 font-sans text-lg text-genesis-charcoal/70 leading-relaxed">
          <p
            className={`reveal-scan ${v}`}
            style={{ transitionDelay: '0.1s' }}
          >
            When a post performs well, Genesis shows you whether it performed{' '}
            <strong className="text-genesis-charcoal font-medium">because of</strong> your
            strategy—or <strong className="text-genesis-charcoal font-medium">despite</strong> it.
          </p>

          <p
            className={`reveal-scan ${v}`}
            style={{ transitionDelay: '0.2s' }}
          >
            Coincidental wins are blocked from reinforcing future decisions until
            you recalibrate. Only verified successes and clean failures shape your
            strategy going forward.
          </p>

          <p
            className={`reveal-scan ${v}`}
            style={{ transitionDelay: '0.3s' }}
          >
            Build on what actually works, not what happened to work once.
          </p>

          {/* Three signal metrics */}
          <div
            className={`reveal-up ${v} grid grid-cols-3 gap-0 border border-genesis-charcoal/20 mt-12`}
            style={{ transitionDelay: '0.4s' }}
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
          </div>
        </div>
      </div>
    </section>
  );
}
