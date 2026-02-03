import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

interface Resource {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href: string;
  image?: string;
}

interface ResourcesTeaserProps {
  label?: string;
  headline: string;
  resources: Resource[];
  viewAllHref?: string;
}

export function ResourcesTeaser({
  label = 'Resources',
  headline,
  resources,
  viewAllHref = '/resources',
}: ResourcesTeaserProps) {
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
            View all resources
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {resources.map((resource) => (
            <article key={resource.href} className="group">
              <Link href={resource.href} className="block">
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-neutral-100 rounded-xl mb-4 overflow-hidden">
                  {resource.image ? (
                    <img
                      src={resource.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slow"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-300">
                      <svg
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-2 text-body-sm text-neutral-500 mb-2">
                  <span className="text-brand-500">{resource.category}</span>
                  <span>·</span>
                  <time dateTime={resource.date}>{resource.date}</time>
                </div>

                {/* Title */}
                <h3 className="font-display text-heading-md text-neutral-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {resource.title}
                </h3>

                {/* Excerpt */}
                <p className="text-body-sm text-neutral-600 line-clamp-2">
                  {resource.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
