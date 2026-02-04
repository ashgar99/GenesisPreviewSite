'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { HeroSecondary } from '@/components/sections';
import { FileText, BookOpen, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { clsx } from 'clsx';

// Resource categories with content
const resourceCategories = [
  {
    id: 'insights',
    title: 'Insights',
    icon: FileText,
    description: 'Research and analysis on content effectiveness',
    articles: [
      {
        title: 'Why Analytics Aren\'t Enough',
        excerpt: 'Analytics tell you what happened: impressions, clicks, engagement rate. But they don\'t tell you why it happened or whether the "why" matches what you intended.',
        readTime: '5 min read',
        slug: 'why-analytics-arent-enough',
        image: '/images/blog/analytics-not-enough.jpg',
      },
      {
        title: 'The Problem with Vanity Metrics',
        excerpt: 'Impressions, likes, and comments look good in reports but often obscure what\'s actually driving results. A post with 50,000 impressions that reaches the wrong audience isn\'t a success.',
        readTime: '4 min read',
        slug: 'problem-with-vanity-metrics',
      },
      {
        title: 'When Success Is Actually Failure',
        excerpt: 'High-performing content that doesn\'t align with your goals is a distraction. Understanding the difference between activity and progress changes how you measure success.',
        readTime: '6 min read',
        slug: 'when-success-is-failure',
      },
    ],
  },
  {
    id: 'methodology',
    title: 'Methodology',
    icon: BookOpen,
    description: 'How Genesis approaches content analysis',
    articles: [
      {
        title: 'The Blocking Mechanism',
        excerpt: 'Why Genesis blocks coincidental wins from reinforcing your strategy and how this prevents lucky outcomes from corrupting future decisions.',
        readTime: '5 min read',
        slug: 'blocking-mechanism',
        image: '/images/blog/blocking-mechanism.jpg',
      },
      {
        title: 'Understanding the Four Verdicts',
        excerpt: 'Pass, Fail, Coincidence, Uncertain: the Genesis verdict system replaces binary "good/bad" with nuanced strategic feedback. Here is what each means.',
        readTime: '7 min read',
        slug: 'understanding-four-verdicts',
        image: '/images/blog/blocking-mechanism.jpg',
      },
      {
        title: 'Dual-Framework Analysis Explained',
        excerpt: 'How Genesis analyses content through two lenses: what happened and what you intended, to generate verdicts that other tools simply cannot provide.',
        readTime: '8 min read',
        slug: 'dual-framework-analysis',
      },
    ],
  },
  {
    id: 'strategy',
    title: 'Strategy',
    icon: BarChart3,
    description: 'Practical guidance for content teams',
    articles: [
      {
        title: 'Building Repeatable Success',
        excerpt: 'Random viral posts aren\'t a strategy. The goal isn\'t to get lucky once: it\'s to identify patterns you can reliably replicate across your content.',
        readTime: '5 min read',
        slug: 'building-repeatable-success',
      },
      {
        title: 'From Metrics to Decisions',
        excerpt: 'The gap between having data and making good decisions is where most marketing teams struggle. Here\'s how to bridge it.',
        readTime: '6 min read',
        slug: 'metrics-to-decisions',
      },
      {
        title: 'Aligning Teams Around Intent',
        excerpt: 'When everyone understands the strategic intent behind content, collaboration improves. How to use intent declarations as a team alignment tool.',
        readTime: '5 min read',
        slug: 'aligning-teams-intent',
      },
    ],
  },
];

// Horizontal scroll article card
function ArticleCard({ article, category }: { article: typeof resourceCategories[0]['articles'][0]; category: string }) {
  return (
    <Link href={`/contact?reason=resources&interest=sample-outputs`}>
      <article className="group flex-shrink-0 w-[320px] sm:w-[360px] bg-neutral-50 rounded-xl overflow-hidden hover:bg-neutral-100 transition-colors cursor-pointer">
        {article.image && (
          <div className="h-40 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 text-body-sm text-neutral-500 mb-3">
            <span className="text-brand-500">{category}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <h3 className="font-display text-heading-lg text-neutral-900 mb-3 group-hover:text-brand-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-body-md text-neutral-600 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-2 text-brand-500 text-body-sm font-medium group-hover:underline underline-offset-2">
            Read more <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </article>
    </Link>
  );
}

// Newsletter subscription form (Mailchimp-ready)
function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // Mailchimp integration endpoint
      // Set NEXT_PUBLIC_MAILCHIMP_URL in .env.local
      const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

      if (MAILCHIMP_URL) {
        // Mailchimp requires specific form data format
        const formData = new FormData();
        formData.append('EMAIL', email);
        formData.append('subscribe', 'Subscribe');

        await fetch(MAILCHIMP_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        });
      } else {
        // Fallback: submit to Google Sheets
        const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';
        if (GOOGLE_SCRIPT_URL) {
          await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email,
              concern: 'Newsletter Subscription',
              interest: 'Resources Updates',
              source: 'resources-newsletter',
              timestamp: new Date().toISOString(),
              status: 'subscribed',
            }),
          });
        }
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setIsSubmitting(false);
      setError('Something went wrong. Please try again.');
      console.error('Newsletter submission error:', err);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-success-500/20 rounded-xl px-6 py-4 text-center">
        <p className="text-success-400 font-medium">Thanks! You're on the list.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your work email"
          required
          aria-label="Email address"
          className="bg-neutral-800 border-neutral-700 text-neutral-50 placeholder:text-neutral-400"
        />
      </div>
      <Button
        type="submit"
        variant="brand"
        size="md"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </Button>
      {error && (
        <p className="text-error-400 text-body-sm mt-2">{error}</p>
      )}
    </form>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <HeroSecondary
        label="Resources"
        headline="Insights on content strategy intelligence"
        subheadline="Research, guides, and thought leadership to help you build a content strategy that actually works—measured by intent alignment, not just engagement."
        variant="dark"
      />

      {/* Resource Categories with Horizontal Scroll */}
      <section className="section bg-white">
        <Container size="xl">
          <div className="space-y-16">
            {resourceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h2 className="font-display text-heading-xl text-neutral-900">
                        {category.title}
                      </h2>
                      <p className="text-body-md text-neutral-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Horizontal Scroll Container */}
                  <div className="relative -mx-4 px-4">
                    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                      {category.articles.map((article) => (
                        <div key={article.slug} className="snap-start">
                          <ArticleCard article={article} category={category.title} />
                        </div>
                      ))}
                      {/* "More coming" placeholder card */}
                      <div className="flex-shrink-0 w-[320px] sm:w-[360px] bg-neutral-100 rounded-xl p-6 flex flex-col items-center justify-center text-center border-2 border-dashed border-neutral-300">
                        <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-neutral-400" />
                        </div>
                        <p className="text-body-md text-neutral-500">
                          More {category.title.toLowerCase()} coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-neutral-900">
        <Container size="md">
          <div className="text-center">
            <SectionLabel variant="light">Stay Updated</SectionLabel>
            <h2 className="font-display text-display-md text-neutral-50 mb-4">
              Get notified when we publish
            </h2>
            <p className="text-body-lg text-neutral-300 mb-8 max-w-lg mx-auto">
              New research, methodology updates, and practical guides—delivered when they're ready. No spam, unsubscribe anytime.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
            <p className="text-body-sm text-neutral-500 mt-4">
              First benchmark report launching Q1 2026
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
