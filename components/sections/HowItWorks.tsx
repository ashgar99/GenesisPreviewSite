import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { clsx } from 'clsx';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  label?: string;
  headline: string;
  steps: Step[];
}

export function HowItWorks({
  label = 'How It Works',
  headline,
  steps,
}: HowItWorksProps) {
  return (
    <section className="section bg-white">
      <Container size="xl">
        <div className="text-center mb-16">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="font-display text-display-lg text-neutral-900 text-balance">
            {headline}
          </h2>
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-0.5 bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200"
            aria-hidden="true"
          />

          {/* Vertical connector line (mobile/tablet) */}
          <div
            className="lg:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-200"
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={clsx(
                  'relative pl-16 lg:pl-0 animate-on-scroll',
                  `stagger-${index + 1}`
                )}
              >
                {/* Step Number Circle */}
                <div className="absolute left-0 lg:relative lg:left-auto lg:mx-auto w-12 h-12 bg-neutral-900 text-neutral-50 rounded-full flex items-center justify-center font-display text-xl mb-6 z-10 shadow-md">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="lg:text-center lg:mt-8">
                  <h3 className="font-display text-heading-lg text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body-md text-neutral-600 leading-relaxed max-w-sm lg:mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Arrow indicator between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-3 top-12 transform -translate-y-1/2 text-neutral-300"
                    aria-hidden="true"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Decision Intelligence Loop visualization */}
        <div className="mt-20 pt-12 border-t border-neutral-100">
          <p className="text-center text-body-sm text-neutral-500 uppercase tracking-wider mb-8">
            The Decision Intelligence Loop
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-body-md">
            <span className="px-4 py-2 bg-neutral-100 rounded-full text-neutral-700 font-medium">
              Intent
            </span>
            <svg className="w-5 h-5 text-neutral-400 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="px-4 py-2 bg-neutral-100 rounded-full text-neutral-700 font-medium">
              Evidence
            </span>
            <svg className="w-5 h-5 text-neutral-400 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="px-4 py-2 bg-neutral-100 rounded-full text-neutral-700 font-medium">
              Verdict
            </span>
            <svg className="w-5 h-5 text-neutral-400 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="px-4 py-2 bg-brand-100 rounded-full text-brand-600 font-medium">
              Strategy Memory
            </span>
          </div>
          <p className="text-center text-body-sm text-neutral-500 mt-6 max-w-xl mx-auto">
            Only verified learnings compound. Coincidental wins are blocked until recalibrated.
          </p>
        </div>
      </Container>
    </section>
  );
}
