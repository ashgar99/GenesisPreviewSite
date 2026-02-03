import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FinalCTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Insights, guides, and thought leadership on LinkedIn marketing strategy from Genesis.',
};

// Placeholder blog posts
const posts = [
  {
    title: 'Why LinkedIn Analytics Aren\'t Enough',
    excerpt: 'Understanding the gap between what happened and why it happened in your content strategy. Traditional metrics tell you the outcome but not the cause.',
    category: 'Insights',
    date: 'January 2026',
    href: '/resources/blog/linkedin-analytics-gap',
    featured: true,
  },
  {
    title: 'The Intent-First Approach to Content',
    excerpt: 'How declaring your goals before analysis transforms the way you measure success and make decisions.',
    category: 'Methodology',
    date: 'January 2026',
    href: '/resources/blog/intent-first-approach',
  },
  {
    title: 'Understanding the Four Verdicts',
    excerpt: 'A deep dive into Pass, Fail, Coincidence, and Uncertain—and what each means for your strategy.',
    category: 'Product',
    date: 'December 2025',
    href: '/resources/blog/four-verdicts',
  },
  {
    title: 'Building Repeatable Success on LinkedIn',
    excerpt: 'Why random viral posts aren\'t a strategy, and how to identify patterns you can reliably replicate.',
    category: 'Strategy',
    date: 'December 2025',
    href: '/resources/blog/repeatable-success',
  },
  {
    title: 'The Problem with Vanity Metrics',
    excerpt: 'Impressions, likes, and comments look good in reports but often obscure what\'s actually driving results.',
    category: 'Insights',
    date: 'November 2025',
    href: '/resources/blog/vanity-metrics',
  },
  {
    title: 'How Genesis Uses Dual-Model Analysis',
    excerpt: 'An inside look at how RIM and IEM work together to generate meaningful verdicts about your content.',
    category: 'Product',
    date: 'November 2025',
    href: '/resources/blog/dual-model-analysis',
  },
];

export default function ResourcesPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="pt-32 pb-16 bg-neutral-900">
        <Container size="xl">
          <div className="max-w-3xl">
            <SectionLabel variant="light">Resources</SectionLabel>
            <h1 className="font-display text-display-lg text-neutral-50 mb-6">
              Insights on LinkedIn marketing strategy
            </h1>
            <p className="text-body-lg text-neutral-300">
              Research, guides, and thought leadership to help you build a content strategy that actually works.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container size="xl">
          {/* Featured post */}
          <Link href={featured.href} className="group block mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center p-8 bg-neutral-50 rounded-2xl hover:bg-neutral-100 transition-colors">
              <div className="aspect-video bg-neutral-200 rounded-xl flex items-center justify-center">
                <span className="text-neutral-400 text-body-sm">[Featured image]</span>
              </div>
              <div>
                <div className="flex items-center gap-2 text-body-sm text-neutral-500 mb-3">
                  <span className="text-brand-500">{featured.category}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                </div>
                <h2 className="font-display text-display-md text-neutral-900 mb-4 group-hover:text-brand-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-body-lg text-neutral-600">
                  {featured.excerpt}
                </p>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article key={post.href} className="group">
                <Link href={post.href} className="block">
                  <div className="aspect-video bg-neutral-100 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-neutral-300 text-body-sm">[Image]</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm text-neutral-500 mb-2">
                    <span className="text-brand-500">{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-display text-heading-lg text-neutral-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-body-sm text-neutral-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>

          {/* Placeholder notice */}
          <p className="text-center text-caption text-neutral-400 mt-12 italic">
            [TODO: Connect to CMS or MDX content when blog posts are written]
          </p>
        </Container>
      </section>

      <FinalCTA
        headline="Stay updated"
        subheadline="Get notified when we publish new insights and research."
        showForm={true}
        formPlaceholder="Your email"
        buttonText="Subscribe"
        note="No spam. Unsubscribe anytime."
        variant="dark"
      />
    </>
  );
}
