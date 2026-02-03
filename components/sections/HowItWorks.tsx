import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Card } from '@/components/ui/Card';
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

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <Card
              key={step.number}
              variant="default"
              padding="lg"
              className={clsx(
                'animate-on-scroll',
                `stagger-${index + 1}`
              )}
            >
              {/* Step Number */}
              <div className="w-12 h-12 bg-neutral-900 text-neutral-50 rounded-full flex items-center justify-center font-display text-2xl mb-6">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="font-display text-heading-lg text-neutral-900 mb-4">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-body-md text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Connector line (desktop only) */}
        <div className="hidden md:block relative -mt-[calc(50%+3rem)] mb-[calc(50%-3rem)] pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-[calc(16.67%-1.5rem)] right-[calc(16.67%-1.5rem)] h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
