import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface SolutionOverviewProps {
  label?: string;
  headline: string;
  paragraphs: string[];
  cta?: {
    text: string;
    href: string;
  };
}

export function SolutionOverview({
  label = 'The Solution',
  headline,
  paragraphs,
  cta,
}: SolutionOverviewProps) {
  return (
    <section className="section bg-neutral-50">
      <Container size="xl">
        <SectionLabel>{label}</SectionLabel>
        <h2 className="font-display text-display-lg text-neutral-900 mb-10 max-w-3xl text-balance">
          {headline}
        </h2>

        <div className="prose-container space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-body-lg text-neutral-600 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {cta && (
          <div className="mt-10">
            <Button href={cta.href} variant="ghost" withArrow>
              {cta.text}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
