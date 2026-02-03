import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface ProblemSectionProps {
  label?: string;
  headline: string;
  paragraphs: string[];
}

export function ProblemSection({
  label = 'The Problem',
  headline,
  paragraphs,
}: ProblemSectionProps) {
  return (
    <section className="section bg-white">
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
      </Container>
    </section>
  );
}
