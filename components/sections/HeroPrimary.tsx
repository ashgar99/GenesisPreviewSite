'use client';

import React from 'react';
import Link from 'next/link';
import { CalibrationGrid } from '@/components/ui/CalibrationGrid';

const verdictData = [
  { label: 'Pass',        count: 4, color: 'bg-genesis-pass'        },
  { label: 'Fail',        count: 3, color: 'bg-genesis-fail'        },
  { label: 'Coincidence', count: 3, color: 'bg-genesis-coincidence' },
  { label: 'Uncertain',   count: 2, color: 'bg-neutral-500'         },
];

export function HeroPrimary() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-genesis-charcoal"
      aria-label="Hero"
    >
      {/* Calibration grid canvas */}
      <CalibrationGrid />

      {/* Legibility overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(26,29,33,0.55) 0%, rgba(26,29,33,0.0) 60%, rgba(26,29,33,0.2) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 w-full pt-32 pb-24">
        <div className="max-w-3xl">

          {/* Kicker — monospace */}
          <p className="hero-kicker font-mono text-xs tracking-[0.2em] uppercase text-genesis-teal mb-6">
            Turn marketing into data.
          </p>

          {/* H1 — serif, massive */}
          <h1
            className="hero-h1 font-serif text-genesis-cream mb-6 leading-[1.08] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 6vw + 1rem, 5.5rem)' }}
          >
            Know which posts worked—
            <br className="hidden sm:block" />
            <span className="italic">and why.</span>
          </h1>

          {/* Subtext — scanner reveal */}
          <p className="hero-subtext font-sans text-lg text-genesis-cream/70 leading-relaxed max-w-xl mb-10">
            Genesis analyses your LinkedIn content against your goals and shows
            you whether results came from your strategy—or from something else.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact?source=hero-primary"
              className="interactive-zone inline-flex items-center justify-center px-7 py-4 font-mono text-xs tracking-widest uppercase bg-genesis-cream text-genesis-charcoal hover:bg-white transition-colors"
            >
              Get your first profile
            </Link>
            <Link
              href="/#mechanism"
              className="interactive-zone inline-flex items-center justify-center px-7 py-4 font-mono text-xs tracking-widest uppercase border border-genesis-cream/40 text-genesis-cream/80 hover:border-genesis-cream hover:text-genesis-cream transition-colors"
            >
              See how it works
            </Link>
          </div>

          {/* Genesis Profile data block */}
          <div className="hero-data-block border border-white/10 bg-genesis-charcoal/70 backdrop-blur-sm p-5 inline-block">
            <div className="flex items-center justify-between gap-8 mb-4 pb-3 border-b border-white/10">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-genesis-teal">
                Genesis Profile — Sample
              </span>
              <span className="font-mono text-[10px] text-genesis-cream/40">
                Q4 2024
              </span>
            </div>

            <div className="space-y-2 mb-4">
              {verdictData.map((v) => (
                <div key={v.label} className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${v.color}`} />
                  <span className="font-mono text-xs text-genesis-cream/50 w-24">
                    {v.label}
                  </span>
                  <span className="font-mono text-xs text-genesis-cream">
                    {v.count}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-wider uppercase text-genesis-cream/40">
                Pattern confidence
              </span>
              <span className="font-mono text-sm text-genesis-cream font-medium">
                67%
              </span>
              <span className="font-mono text-[10px] text-genesis-pass">
                +9%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" aria-hidden="true" />
    </section>
  );
}
