import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  outcome: string;
  href: string;
  logo?: string;
  isPlaceholder?: boolean;
}

interface CaseStudyTeaserProps {
  label?: string;
  headline: string;
  caseStudies: CaseStudy[];
  viewAllHref?: string;
}

export function CaseStudyTeaser({
  label = 'Case Studies',
  headline,
  caseStudies,
  viewAllHref = '/case-studies',
}: CaseStudyTeaserProps) {
  const [featured, ...rest] = caseStudies;
  const hasPlaceholders = caseStudies.some((cs) => cs.isPlaceholder);

  return (
    <section className="section bg-white">
      <Container size="xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <SectionLabel>{label}</SectionLabel>
            <h2 className="font-display text-display-lg text-neutral-900 text-balance">
              {headline}
            </h2>
          </div>
          <Button href={viewAllHref} variant="ghost" withArrow>
            View all case studies
          </Button>
        </div>

        {/* Featured case study */}
        {featured && (
          <div
            className={clsx(
              'rounded-xl overflow-hidden mb-8',
              featured.isPlaceholder
                ? 'bg-neutral-100 border-2 border-dashed border-neutral-300'
                : 'bg-neutral-50'
            )}
          >
            <Link href={featured.href} className="group block p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  {/* Company & Industry */}
                  <div className="flex items-center gap-4 mb-4">
                    {featured.logo ? (
                      <img
                        src={featured.logo}
                        alt={featured.company}
                        className="h-8 w-auto"
                      />
                    ) : (
                      <span className="font-display text-xl text-neutral-900">
                        {featured.company}
                      </span>
                    )}
                    <span className="text-body-sm text-neutral-500">
                      {featured.industry}
                    </span>
                  </div>

                  {/* Challenge */}
                  <p className="text-body-lg text-neutral-600 mb-4">
                    {featured.challenge}
                  </p>

                  {/* Outcome */}
                  <p className="font-display text-2xl text-neutral-900 mb-6">
                    {featured.outcome}
                  </p>

                  {/* Read more */}
                  <span className="inline-flex items-center gap-2 text-body-md font-semibold text-brand-500 group-hover:text-brand-600 transition-colors">
                    Read full case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>

                {/* Placeholder for screenshot/visual */}
                <div
                  className={clsx(
                    'aspect-video rounded-lg',
                    featured.isPlaceholder
                      ? 'bg-neutral-200 flex items-center justify-center'
                      : 'bg-neutral-200'
                  )}
                >
                  {featured.isPlaceholder && (
                    <span className="text-neutral-400 text-body-sm">
                      [Case study visual]
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Secondary case studies */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((caseStudy) => (
              <Link
                key={caseStudy.company}
                href={caseStudy.href}
                className={clsx(
                  'group block p-6 rounded-xl transition-colors',
                  caseStudy.isPlaceholder
                    ? 'bg-neutral-100 border-2 border-dashed border-neutral-300'
                    : 'bg-neutral-50 hover:bg-neutral-100'
                )}
              >
                {/* Company & Industry */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display text-lg text-neutral-900">
                    {caseStudy.company}
                  </span>
                  <span className="text-body-sm text-neutral-500">
                    {caseStudy.industry}
                  </span>
                </div>

                {/* Outcome */}
                <p className="font-display text-xl text-neutral-800 mb-4">
                  {caseStudy.outcome}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-2 text-body-sm font-semibold text-brand-500 group-hover:text-brand-600 transition-colors">
                  Read case study
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        )}

        {/* Placeholder notice */}
        {hasPlaceholders && (
          <p className="text-center text-caption text-neutral-400 mt-8 italic">
            [TODO: Add real case studies when available]
          </p>
        )}
      </Container>
    </section>
  );
}
