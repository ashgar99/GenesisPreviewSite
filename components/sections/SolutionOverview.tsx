import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

interface SolutionOverviewProps {
  label?: string;
  headline: string;
  paragraphs: string[];
  imageSrc?: string;
  imageCredit?: string;
  cta?: {
    text: string;
    href: string;
  };
}

export function SolutionOverview({
  label = 'The Solution',
  headline,
  paragraphs,
  imageSrc = '/images/landing/pexels-olly-3783235.jpg',
  imageCredit = 'Photo by Andrea Piacquadio on Pexels',
  cta,
}: SolutionOverviewProps) {
  return (
    <section className="section bg-neutral-50">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Circular Image - Left side (mirrored from Problem section) */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1 animate-slide-in-left">
            <div className="relative group">
              {/* Decorative ring - expands on hover */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-brand-200 opacity-60 transition-all duration-300 group-hover:-inset-6 group-hover:opacity-80" />

              {/* Image container - scales on hover */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105">
                <img
                  src={imageSrc}
                  alt="Marketing professional with clarity and confidence"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-bl from-brand-500/10 to-transparent" />
              </div>

              {/* Credit */}
              {imageCredit && (
                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-caption text-neutral-400 whitespace-nowrap">
                  {imageCredit}
                </p>
              )}
            </div>
          </div>

          {/* Content - Right side */}
          <div className="order-1 lg:order-2">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="font-display text-display-md text-neutral-900 mb-8 text-balance">
              {headline}
            </h2>

            <div className="space-y-5">
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
              <div className="mt-8">
                <Button href={cta.href} variant="ghost" withArrow>
                  {cta.text}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
