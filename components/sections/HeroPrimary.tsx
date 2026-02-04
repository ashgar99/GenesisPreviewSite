'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { clsx } from 'clsx';

interface HeroPrimaryProps {
  badge?: string;
  headline: string;
  subheadline: string;
  trustSignal?: string;
  showMockup?: boolean;
  videoSrc?: string;
}

export function HeroPrimary({
  badge,
  headline,
  subheadline,
  trustSignal = 'For marketing teams who need to prove strategy, not just activity.',
  showMockup = true,
  videoSrc,
}: HeroPrimaryProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-neutral-50">
      {/* Video background if provided */}
      {videoSrc && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-neutral-950/60" />
        </>
      )}

      {/* Subtle gradient background - cream to warm white (only when no video) */}
      {!videoSrc && <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-white" />}

      {/* Geometric accent - refined dual circles (only when no video) */}
      {!videoSrc && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Top right accent */}
          <svg
            className="absolute -top-20 -right-20 w-[35rem] h-[35rem] opacity-[0.07]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="85" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" className="text-brand-500" />
            <circle cx="115" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" className="text-brand-500" />
          </svg>

          {/* Bottom left accent */}
          <svg
            className="absolute -bottom-32 -left-20 w-[40rem] h-[40rem] opacity-[0.04]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="85" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" className="text-neutral-400" />
            <circle cx="115" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" className="text-neutral-400" />
          </svg>

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #4a7c7c 1px, transparent 1px),
                linear-gradient(to bottom, #4a7c7c 1px, transparent 1px)
              `,
              backgroundSize: '64px 64px',
            }}
          />
        </div>
      )}

      <Container size="xl" className="relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column - Copy */}
          <div className="lg:col-span-6 xl:col-span-5">
            {/* Category badge */}
            {badge && (
              <div
                className={clsx(
                  'inline-flex items-center gap-2 mb-6',
                  mounted && 'animate-fade-in'
                )}
              >
                <span className={clsx('w-2 h-2 rounded-full', videoSrc ? 'bg-brand-400' : 'bg-brand-500')} />
                <span className={clsx('text-body-sm font-medium uppercase tracking-wider', videoSrc ? 'text-brand-400' : 'text-brand-600')}>
                  {badge}
                </span>
              </div>
            )}

            {/* Headline */}
            <h1
              className={clsx(
                'font-display text-display-xl mb-6 text-balance',
                videoSrc ? 'text-white' : 'text-neutral-900',
                mounted && 'animate-slide-up'
              )}
              style={{ animationDelay: '0.1s' }}
            >
              {headline}
            </h1>

            {/* Subheadline */}
            <p
              className={clsx(
                'text-body-lg max-w-lg leading-relaxed',
                videoSrc ? 'text-neutral-200' : 'text-neutral-600',
                mounted && 'animate-slide-up'
              )}
              style={{ animationDelay: '0.2s' }}
            >
              {subheadline}
            </p>

            {/* Trust signal line */}
            <div
              className={clsx(
                'mt-10 pt-8',
                videoSrc ? 'border-t border-neutral-700' : 'border-t border-neutral-200',
                mounted && 'animate-slide-up'
              )}
              style={{ animationDelay: '0.3s' }}
            >
              <p className={clsx('text-body-sm', videoSrc ? 'text-neutral-400' : 'text-neutral-500')}>
                {trustSignal}
              </p>
            </div>
          </div>

          {/* Right column - Genesis Profile Mockup */}
          {showMockup && (
            <div
              className={clsx(
                'lg:col-span-6 xl:col-span-7',
                mounted && 'animate-slide-up'
              )}
              style={{ animationDelay: '0.5s' }}
            >
              <div className="relative">
                {/* Subtle shadow beneath card */}
                <div className="absolute -inset-4 bg-gradient-to-b from-brand-100/40 to-transparent rounded-3xl blur-2xl" />

                {/* Profile Card - Light variant */}
                <div className="relative bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-lg">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-caption font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                        Genesis Profile
                      </span>
                      <span className="font-display text-xl text-neutral-900">
                        Monthly Verdict Summary
                      </span>
                    </div>
                    <span className="text-body-sm text-brand-600 bg-brand-100 px-3 py-1.5 rounded-full font-medium">
                      February 2026
                    </span>
                  </div>

                  {/* Verdict Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    <VerdictCard verdict="pass" count={5} label="Pass" />
                    <VerdictCard verdict="fail" count={2} label="Fail" />
                    <VerdictCard verdict="coincidence" count={4} label="Coincidence" />
                    <VerdictCard verdict="uncertain" count={1} label="Uncertain" />
                  </div>

                  {/* Alignment Score */}
                  <div className="bg-neutral-50 rounded-xl p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-body-sm text-neutral-600 font-medium">Alignment Score</span>
                      <span className="font-display text-lg text-neutral-900">
                        58% <span className="text-success-500 text-body-sm font-medium">+12</span>
                      </span>
                    </div>
                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-500 rounded-full transition-all duration-1000"
                        style={{ width: mounted ? '58%' : '0%' }}
                      />
                    </div>
                  </div>

                  {/* Trust chips */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                    <TrustChip label="Confidence" value="87%" />
                    <TrustChip label="Data window" value="90 days" />
                    <TrustChip label="Model" value="v2.4.1" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>

      {/* Scroll indicator - arrow only */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className={clsx('flex flex-col items-center', videoSrc ? 'text-neutral-300' : 'text-neutral-400')}>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// Verdict card component - light theme
function VerdictCard({
  verdict,
  count,
  label,
}: {
  verdict: 'pass' | 'fail' | 'coincidence' | 'uncertain';
  count: number;
  label: string;
}) {
  const styles = {
    pass: {
      bg: 'bg-success-500/10',
      border: 'border-success-500/20',
      text: 'text-success-600',
    },
    fail: {
      bg: 'bg-error-500/10',
      border: 'border-error-500/20',
      text: 'text-error-600',
    },
    coincidence: {
      bg: 'bg-warning-500/10',
      border: 'border-warning-500/20',
      text: 'text-warning-600',
    },
    uncertain: {
      bg: 'bg-neutral-200',
      border: 'border-neutral-300',
      text: 'text-neutral-500',
    },
  };

  const style = styles[verdict];

  return (
    <div className={clsx('rounded-lg border p-3 text-center', style.bg, style.border)}>
      <div className={clsx('font-display text-2xl mb-0.5', style.text)}>{count}</div>
      <div className={clsx('text-caption font-semibold uppercase tracking-wider', style.text)}>
        {label}
      </div>
    </div>
  );
}

// Trust chip component
function TrustChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-100 rounded-full">
      <span className="text-caption text-neutral-500">{label}:</span>
      <span className="text-caption font-medium text-neutral-700">{value}</span>
    </div>
  );
}
