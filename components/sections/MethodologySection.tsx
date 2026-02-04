import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

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
  diagramAlt = 'Genesis dual-framework analysis diagram',
}: MethodologySectionProps) {
  return (
    <section className="section bg-neutral-100">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Diagram */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Genesis dual circles diagram - properly aligned Venn */}
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
                  {/* Clip path for intersection */}
                  <clipPath id="leftCircleClip">
                    <circle cx="150" cy="200" r="110" />
                  </clipPath>
                </defs>
                <rect width="400" height="400" fill="url(#grid)" opacity="0.3" />

                {/* Intersection fill - using clip path for precise alignment */}
                <circle
                  cx="250"
                  cy="200"
                  r="110"
                  fill="currentColor"
                  className="text-brand-200"
                  clipPath="url(#leftCircleClip)"
                />

                {/* Left circle - Results Analysis */}
                <circle
                  cx="150"
                  cy="200"
                  r="110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-brand-500"
                />

                {/* Right circle - Intent Analysis */}
                <circle
                  cx="250"
                  cy="200"
                  r="110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-neutral-600"
                />

                {/* Left label - Results */}
                <text
                  x="90"
                  y="200"
                  className="fill-brand-600 font-semibold"
                  textAnchor="middle"
                  style={{ fontSize: '0.875rem' }}
                >
                  Results
                </text>
                <text
                  x="90"
                  y="220"
                  className="fill-neutral-500"
                  textAnchor="middle"
                  style={{ fontSize: '0.75rem' }}
                >
                  What happened
                </text>

                {/* Right label - Intent */}
                <text
                  x="310"
                  y="200"
                  className="fill-neutral-700 font-semibold"
                  textAnchor="middle"
                  style={{ fontSize: '0.875rem' }}
                >
                  Intent
                </text>
                <text
                  x="310"
                  y="218"
                  className="fill-neutral-500"
                  textAnchor="middle"
                  style={{ fontSize: '0.65rem' }}
                >
                  What you planned
                </text>

                {/* Center label - Verdict */}
                <text
                  x="200"
                  y="192"
                  className="fill-neutral-900 font-bold"
                  textAnchor="middle"
                  style={{ fontSize: '1rem' }}
                >
                  Verdict
                </text>
                <text
                  x="200"
                  y="212"
                  className="fill-neutral-600"
                  textAnchor="middle"
                  style={{ fontSize: '0.75rem' }}
                >
                  Strategy alignment
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
