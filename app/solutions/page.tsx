import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FinalCTA } from '@/components/sections';
import { ArrowRight, User, Briefcase, Users } from 'lucide-react';
import { clsx } from 'clsx';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Genesis solutions for marketing leaders, founders, and agencies.',
};

const solutions = [
  {
    icon: User,
    title: 'For Marketing Leaders',
    description: 'You\'re accountable for results, but tired of presenting metrics without knowing if they mean anything. Genesis gives you evidence to back up your strategy—or evidence that it\'s time to change course.',
    challenges: [
      'Proving ROI to leadership',
      'Justifying content strategy decisions',
      'Understanding what actually drives results',
    ],
    benefits: [
      'Clear evidence for board presentations',
      'Confident strategy recommendations',
      'Measurable alignment between intent and results',
    ],
    href: '/solutions/marketing-leaders',
  },
  {
    icon: Briefcase,
    title: 'For Founders',
    description: 'You don\'t have time to guess what works. You need to know which of your approaches is worth continuing and which is wasting your limited time. Genesis tells you directly.',
    challenges: [
      'Limited time for content',
      'No clear measurement framework',
      'Uncertainty about what\'s actually working',
    ],
    benefits: [
      'Focus on content that actually moves the needle',
      'Stop wasting time on ineffective approaches',
      'Build repeatable content patterns',
    ],
    href: '/solutions/founders',
  },
  {
    icon: Users,
    title: 'For Agencies',
    description: 'You need to show clients that your work is producing results for the right reasons—not just producing numbers. Genesis provides the proof that distinguishes your work from commodity content services.',
    challenges: [
      'Proving value to clients',
      'Differentiating from competitors',
      'Managing multiple accounts',
    ],
    benefits: [
      'Evidence-based client reporting',
      'Higher client retention',
      'Premium positioning in the market',
    ],
    href: '/solutions/agencies',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-neutral-50">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>Solutions</SectionLabel>
            <h1 className="font-display text-display-lg text-neutral-900 mb-6">
              Genesis for your team
            </h1>
            <p className="text-body-lg text-neutral-600">
              Whether you're a marketing leader proving ROI, a founder building presence, or an agency managing clients—Genesis provides the evidence you need.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container size="xl">
          <div className="space-y-16">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={solution.title}
                  className={clsx(
                    'grid lg:grid-cols-2 gap-12 items-center',
                    isReversed && 'lg:flex-row-reverse'
                  )}
                >
                  <div className={clsx(isReversed && 'lg:order-2')}>
                    <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="font-display text-display-md text-neutral-900 mb-4">
                      {solution.title}
                    </h2>
                    <p className="text-body-lg text-neutral-600 mb-8">
                      {solution.description}
                    </p>
                    <Link
                      href={solution.href}
                      className="inline-flex items-center gap-2 text-body-md font-semibold text-brand-500 hover:text-brand-600 group"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                  <div className={clsx('grid gap-6', isReversed && 'lg:order-1')}>
                    <div className="bg-error-500/5 rounded-xl p-6">
                      <h3 className="font-semibold text-neutral-900 mb-4">Common challenges</h3>
                      <ul className="space-y-2">
                        {solution.challenges.map((challenge) => (
                          <li key={challenge} className="flex items-start gap-3 text-body-md text-neutral-600">
                            <span className="w-1.5 h-1.5 bg-error-500 rounded-full mt-2 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-success-500/5 rounded-xl p-6">
                      <h3 className="font-semibold text-neutral-900 mb-4">With Genesis</h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3 text-body-md text-neutral-600">
                            <span className="w-1.5 h-1.5 bg-success-500 rounded-full mt-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <FinalCTA
        headline="Ready to see Genesis in action?"
        subheadline="Book a demo to see how Genesis can transform your LinkedIn strategy."
        showForm={false}
        buttonText="Book a demo"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
}
