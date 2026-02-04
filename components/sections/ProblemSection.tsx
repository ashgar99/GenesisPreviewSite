import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface ProblemSectionProps {
  label?: string;
  headline: string;
  paragraphs: string[];
  imageSrc?: string;
  imageCredit?: string;
}

export function ProblemSection({
  label = 'The Problem',
  headline,
  paragraphs,
  imageSrc = '/images/landing/pexels-cottonbro-4855469.jpg',
  imageCredit = 'Photo by cottonbro studio on Pexels',
}: ProblemSectionProps) {
  return (
    <section className="section bg-white">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
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
          </div>

          {/* Circular Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              {/* Decorative ring - expands on hover */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-neutral-200 opacity-60 transition-all duration-300 group-hover:-inset-6 group-hover:opacity-80" />

              {/* Image container - scales on hover */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105">
                <img
                  src={imageSrc}
                  alt="Marketing professional analyzing data"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/10 to-transparent" />
              </div>

              {/* Credit */}
              {imageCredit && (
                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-caption text-neutral-400 whitespace-nowrap">
                  {imageCredit}
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
