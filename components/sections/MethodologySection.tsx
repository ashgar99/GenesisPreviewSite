import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { clsx } from 'clsx';

interface MethodologySectionProps {
  label?: string;
  headline: string;
  description: string[];
  diagramAlt?: string;
}

export function MethodologySection({
  label = 'The Genesis Method',
  headline,
  description,
  diagramAlt = 'Genesis dual intelligence model diagram',
}: MethodologySectionProps) {
  return (
    <section className="section bg-neutral-100">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Diagram */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Genesis dual circles diagram - representing RIM + IEM */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                aria-label={diagramAlt}
                role="img"
              >
                {/* Background subtle grid */}
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-neutral-300"
                    />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#grid)" opacity="0.3" />

                {/* Left circle - Result Intelligence Model */}
                <circle
                  cx="160"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-brand-500"
                />
                <text
                  x="90"
                  y="200"
                  className="fill-brand-600 text-sm font-semibold"
                  textAnchor="middle"
                >
                  RIM
                </text>
                <text
                  x="90"
                  y="220"
                  className="fill-neutral-500 text-xs"
                  textAnchor="middle"
                >
                  Result Intelligence
                </text>

                {/* Right circle - Intent Execution Model */}
                <circle
                  cx="240"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-neutral-600"
                />
                <text
                  x="310"
                  y="200"
                  className="fill-neutral-700 text-sm font-semibold"
                  textAnchor="middle"
                >
                  IEM
                </text>
                <text
                  x="310"
                  y="220"
                  className="fill-neutral-500 text-xs"
                  textAnchor="middle"
                >
                  Intent Execution
                </text>

                {/* Intersection - where verdicts emerge */}
                <path
                  d="M200 95 C240 140, 240 260, 200 305 C160 260, 160 140, 200 95"
                  fill="currentColor"
                  className="text-brand-100"
                  opacity="0.6"
                />
                <text
                  x="200"
                  y="195"
                  className="fill-neutral-900 text-sm font-bold"
                  textAnchor="middle"
                >
                  Verdict
                </text>
                <text
                  x="200"
                  y="215"
                  className="fill-neutral-600 text-xs"
                  textAnchor="middle"
                >
                  Zone
                </text>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="font-display text-display-lg text-neutral-900 mb-8 text-balance">
              {headline}
            </h2>

            <div className="space-y-6">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-body-lg text-neutral-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
