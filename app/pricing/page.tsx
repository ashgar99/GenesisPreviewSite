import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { FAQ, FinalCTA } from '@/components/sections';
import { Check } from 'lucide-react';
import { clsx } from 'clsx';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Genesis pricing plans for marketing teams of all sizes. Start with Core, scale to Enterprise.',
};

const tiers = [
  {
    name: 'Core',
    description: 'The foundation for understanding your LinkedIn strategy',
    price: 'Coming soon',
    features: [
      'Monthly Genesis Profile',
      'Verdict system (Pass, Fail, Coincidence, Uncertain)',
      'Intent declaration workshop',
      'Basic pattern recognition',
      'Email delivery',
      'Up to 50 posts per month',
    ],
    cta: {
      text: 'Get started',
      href: '/contact',
    },
    highlighted: false,
  },
  {
    name: 'Advanced',
    description: 'Everything in Core, plus deeper insights',
    price: 'Coming soon',
    features: [
      'Bi-weekly profiles',
      'Deep pattern analysis',
      'Alignment score tracking',
      'Reasoning traces for every verdict',
      'On-demand queries',
      'Slack integration',
      'Up to 150 posts per month',
      'Priority support',
    ],
    cta: {
      text: 'Get started',
      href: '/contact',
    },
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    description: 'Everything in Advanced, plus custom capabilities',
    price: 'Custom',
    features: [
      'Weekly profiles',
      'Custom intent frameworks',
      'Multi-account analysis',
      'API access',
      'Full data export (PDF, CSV, JSON)',
      'Dedicated success manager',
      'Unlimited posts',
      'Custom integrations',
    ],
    cta: {
      text: 'Contact sales',
      href: '/contact',
    },
    highlighted: false,
  },
];

const pricingFAQ = {
  headline: 'Pricing questions',
  items: [
    {
      question: 'Can I change plans later?',
      answer:
        'Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing period.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'We offer a 14-day evaluation period for all new customers. No credit card required to start.',
    },
    {
      question: 'What counts as a "post"?',
      answer:
        'Each piece of content you publish on LinkedIn counts as one post, including text posts, articles, documents, and videos.',
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer:
        'Yes. Annual plans include a 20% discount compared to monthly billing. Contact us for details.',
    },
    {
      question: 'What\'s included in the intent declaration workshop?',
      answer:
        'A guided session with our team to help you articulate your LinkedIn goals, target audience, and success metrics. This ensures Genesis analyses your content against meaningful criteria.',
    },
    {
      question: 'Can I cancel anytime?',
      answer:
        'Yes. Cancel with 30 days notice. After cancellation, your data is deleted within 30 days unless you request an export first.',
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-neutral-50">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel>Pricing</SectionLabel>
            <h1 className="font-display text-display-lg text-neutral-900 mb-6">
              Simple pricing, powerful insights
            </h1>
            <p className="text-body-lg text-neutral-600">
              Choose the plan that fits your needs. All plans include our core verdict system and pattern analysis.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container size="xl">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={clsx(
                  'rounded-2xl p-8 relative flex flex-col',
                  tier.highlighted
                    ? 'bg-neutral-900 text-neutral-50 ring-4 ring-brand-500'
                    : 'bg-neutral-50'
                )}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-500 text-white text-caption font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center pb-8 border-b border-current/10">
                  <h2
                    className={clsx(
                      'font-display text-2xl mb-2',
                      tier.highlighted ? 'text-neutral-50' : 'text-neutral-900'
                    )}
                  >
                    {tier.name}
                  </h2>
                  <p
                    className={clsx(
                      'text-body-sm mb-6',
                      tier.highlighted ? 'text-neutral-300' : 'text-neutral-500'
                    )}
                  >
                    {tier.description}
                  </p>
                  <div
                    className={clsx(
                      'font-display text-3xl',
                      tier.highlighted ? 'text-neutral-50' : 'text-neutral-900'
                    )}
                  >
                    {tier.price}
                  </div>
                </div>

                {/* Features */}
                <ul className="py-8 space-y-4 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={clsx(
                          'h-5 w-5 flex-shrink-0 mt-0.5',
                          tier.highlighted ? 'text-brand-400' : 'text-brand-500'
                        )}
                      />
                      <span
                        className={clsx(
                          'text-body-md',
                          tier.highlighted ? 'text-neutral-200' : 'text-neutral-600'
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  href={tier.cta.href}
                  variant={tier.highlighted ? 'brand' : 'secondary'}
                  size="lg"
                  className="w-full justify-center"
                >
                  {tier.cta.text}
                </Button>
              </div>
            ))}
          </div>

          {/* Enterprise note */}
          <div className="mt-16 text-center">
            <p className="text-body-lg text-neutral-600 mb-4">
              Need a custom solution for your organization?
            </p>
            <Button href="/contact" variant="ghost" withArrow>
              Talk to our enterprise team
            </Button>
          </div>
        </Container>
      </section>

      <section id="faq">
        <FAQ {...pricingFAQ} variant="grid" />
      </section>

      <FinalCTA
        headline="Ready to understand what's working?"
        subheadline="Start your 14-day evaluation. No credit card required."
        showForm={false}
        buttonText="Get started"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
}
