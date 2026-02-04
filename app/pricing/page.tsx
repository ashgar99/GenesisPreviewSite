import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { FAQ, FinalCTA } from '@/components/sections';
import { Check, FileText, BarChart3, Zap } from 'lucide-react';
import { clsx } from 'clsx';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Genesis pricing plans for marketing teams of all sizes. Start with Core, scale to Enterprise.',
};

// Value propositions shown before pricing tiers
const valueProps = [
  {
    icon: FileText,
    title: 'Full reasoning traces',
    description: 'Every verdict includes the complete reasoning chain—see exactly why content succeeded or failed.',
  },
  {
    icon: BarChart3,
    title: 'Benchmark context',
    description: 'Compare your alignment scores against historical performance and industry benchmarks.',
  },
  {
    icon: Zap,
    title: 'Decision-ready outputs',
    description: 'Clear recommendations formatted for board presentations, team alignment, or client reports.',
  },
];

const tiers = [
  {
    name: 'Core',
    description: 'Essential analysis for growing teams',
    price: 'From £500/mo',
    priceNote: 'Billed monthly',
    features: [
      'Monthly Genesis Profile',
      'Four-verdict classification system',
      'Intent declaration workshop',
      'Basic pattern recognition',
      'Email delivery',
      'Up to 50 posts per month',
    ],
    cta: {
      text: 'Contact sales',
      href: '/contact?reason=pricing-core',
    },
    highlighted: false,
  },
  {
    name: 'Advanced',
    description: 'Deeper insights for established teams',
    price: 'From £900/mo',
    priceNote: 'Billed monthly',
    features: [
      'Bi-weekly profiles',
      'Deep pattern analysis',
      'Alignment score tracking',
      'Full reasoning traces',
      'On-demand queries',
      'Slack integration',
      'Up to 150 posts per month',
      'Priority support',
    ],
    cta: {
      text: 'Contact sales',
      href: '/contact?reason=pricing-advanced',
    },
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for complex needs',
    price: 'Custom',
    priceNote: 'Contact for pricing',
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
      href: '/contact?source=pricing-enterprise&interest=enterprise',
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
        'Each piece of content you publish counts as one post, including text posts, articles, documents, and videos.',
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer:
        'Yes. Annual plans include a 20% discount compared to monthly billing. Contact us for details.',
    },
    {
      question: 'What is included in the intent declaration workshop?',
      answer:
        'A guided session with our team to help you articulate your goals, target audience, and success metrics. This ensures Genesis analyses your content against meaningful criteria.',
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
      {/* Hero with value propositions */}
      <section className="pt-32 pb-12 bg-neutral-900">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel variant="light">Pricing</SectionLabel>
            <h1 className="font-display text-display-lg text-neutral-50 mb-6">
              Clarity at every scale
            </h1>
            <p className="text-body-lg text-neutral-300">
              Every plan includes the Genesis verdict system, pattern analysis, and full reasoning traces. Choose the frequency and depth that fits your team.
            </p>
          </div>

          {/* Value props */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {valueProps.map((prop) => {
              const Icon = prop.icon;
              return (
                <div key={prop.title} className="text-center">
                  <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-brand-400" />
                  </div>
                  <h3 className="font-semibold text-neutral-50 mb-2">{prop.title}</h3>
                  <p className="text-body-sm text-neutral-400">{prop.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Pricing Tiers */}
      <section className="section bg-white">
        <Container size="xl">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={clsx(
                  'group rounded-2xl p-8 relative flex flex-col transition-all duration-normal',
                  tier.highlighted
                    ? 'bg-neutral-900 text-neutral-50 ring-2 ring-brand-500'
                    : 'bg-neutral-50 hover:ring-2 hover:ring-neutral-300 hover:-translate-y-1 hover:shadow-lg'
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
                  <p
                    className={clsx(
                      'text-body-sm mt-1',
                      tier.highlighted ? 'text-neutral-400' : 'text-neutral-500'
                    )}
                  >
                    {tier.priceNote}
                  </p>
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
                          tier.highlighted ? 'text-neutral-200' : 'text-neutral-600',
                          !tier.highlighted && 'group-hover:text-neutral-800'
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
                  className={clsx(
                    'w-full justify-center',
                    !tier.highlighted && 'group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white'
                  )}
                >
                  {tier.cta.text}
                </Button>
              </div>
            ))}
          </div>

        </Container>
      </section>

      <section id="faq">
        <FAQ {...pricingFAQ} variant="grid" />
      </section>

      <FinalCTA
        headline="Ready to understand what's working?"
        subheadline="Contact us to discuss how decision intelligence can inform your content strategy. Only verified learnings reinforce your approach."
        showForm={false}
        buttonText="Contact us"
        buttonHref="/contact?reason=pricing"
        variant="dark"
      />
    </>
  );
}
