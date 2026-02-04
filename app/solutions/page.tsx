import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FinalCTA } from '@/components/sections';
import { Button } from '@/components/ui/Button';
import { User, Briefcase, Users, Target, Clock, FileText, BarChart3, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Genesis solutions for marketing leaders, founders, and agencies.',
};

const solutions = [
  {
    id: 'marketing-leaders',
    icon: User,
    title: 'For Marketing Leaders',
    subtitle: 'Prove strategy, not just activity',
    description: 'You\'re accountable for results, but tired of presenting metrics without knowing if they mean anything. Genesis gives you evidence to back up your strategy—or evidence that it\'s time to change course.',
    concerns: [
      { icon: Target, text: 'Proving ROI to leadership with evidence, not activity metrics' },
      { icon: BarChart3, text: 'Making confident budget allocation decisions' },
      { icon: FileText, text: 'Understanding which content strategies actually drive pipeline' },
    ],
    deliverables: [
      'Periodic Genesis Profile with verdict breakdown showing strategy alignment',
      'Pattern analysis identifying repeatable approaches that work',
      'Board-ready summary reports with clear reasoning traces',
    ],
    exampleOutput: 'A one-page executive summary showing that 4 of your 12 posts this month achieved their stated goals (Pass verdict), 3 failed for identifiable reasons, and 2 succeeded by coincidence—with specific recommendations for next month.',
    cta: { text: 'See a sample executive summary', href: '/contact?source=solutions-marketing-leaders&interest=sample-outputs' },
  },
  {
    id: 'founders',
    icon: Briefcase,
    title: 'For Founders & GMs',
    subtitle: 'Stop guessing what works',
    description: 'You don\'t have time to guess what works. You need to know which of your approaches is worth continuing and which is wasting your limited time. Genesis tells you directly.',
    concerns: [
      { icon: Clock, text: 'Limited time for content—can\'t afford to waste it' },
      { icon: Target, text: 'No clear measurement framework beyond engagement' },
      { icon: BarChart3, text: 'Uncertainty about what\'s actually driving results' },
    ],
    deliverables: [
      'Periodic profile showing which posts succeeded for the right reasons',
      'Clear "stop doing this / do more of this" recommendations',
      'Time-to-insight in minutes, not hours of analysis',
    ],
    exampleOutput: 'A simple verdict summary: "Your technical deep-dives consistently pass; your announcement posts consistently fail. Here\'s why—and what to do about it."',
    cta: { text: 'See how founders use Genesis', href: '/contact?source=solutions-founders&interest=sample-outputs' },
  },
  {
    id: 'agencies',
    icon: Users,
    title: 'For Agencies & Partners',
    subtitle: 'Prove value, retain clients',
    description: 'You need to show clients that your work is producing results for the right reasons—not just producing numbers. Genesis provides the proof that distinguishes your work from commodity content services.',
    concerns: [
      { icon: Target, text: 'Proving value to clients beyond vanity metrics' },
      { icon: Users, text: 'Differentiating from competitors who just report numbers' },
      { icon: BarChart3, text: 'Managing and comparing multiple client accounts' },
    ],
    deliverables: [
      'Client-ready reports with clear methodology explanation',
      'Multi-account analysis across your portfolio',
      'Comparative benchmarks showing client improvement over time',
    ],
    exampleOutput: 'A client presentation showing month-over-month alignment improvement, with specific examples of content that "passed" and why—giving clients confidence in your strategic value.',
    cta: { text: 'Request agency partnership info', href: '/contact?source=solutions-agencies&interest=agency' },
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="pt-28 pb-0 bg-white">
        {/* Hero removed per brief Step 1 - solutions start immediately */}
      </section>

      <section className="section bg-white pt-12">
        <Container size="xl">
          <div className="space-y-24">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={solution.id}
                  id={solution.id}
                  className="scroll-mt-24"
                >
                  <div
                    className={clsx(
                      'grid lg:grid-cols-2 gap-12 items-start',
                      isReversed && 'lg:flex-row-reverse'
                    )}
                  >
                    {/* Left/Right column - Main content */}
                    <div className={clsx(isReversed && 'lg:order-2')}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h2 className="font-display text-display-md text-neutral-900">
                            {solution.title}
                          </h2>
                          <p className="text-body-md text-brand-600 font-medium">
                            {solution.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-body-lg text-neutral-600 mb-8">
                        {solution.description}
                      </p>

                      {/* What you care about */}
                      <div className="mb-8">
                        <h3 className="font-semibold text-neutral-900 mb-4">What you care about</h3>
                        <ul className="space-y-3">
                          {solution.concerns.map((concern) => {
                            const ConcernIcon = concern.icon;
                            return (
                              <li key={concern.text} className="flex items-start gap-3">
                                <ConcernIcon className="h-5 w-5 text-brand-500 mt-0.5 flex-shrink-0" />
                                <span className="text-body-md text-neutral-600">{concern.text}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <Button href={solution.cta.href} variant="primary" withArrow>
                        {solution.cta.text}
                      </Button>
                    </div>

                    {/* Right/Left column - Deliverables */}
                    <div className={clsx('space-y-6', isReversed && 'lg:order-1')}>
                      {/* What Genesis gives you */}
                      <div className="bg-neutral-50 rounded-xl p-6">
                        <h3 className="font-semibold text-neutral-900 mb-4">What Genesis gives you</h3>
                        <ul className="space-y-3">
                          {solution.deliverables.map((deliverable) => (
                            <li key={deliverable} className="flex items-start gap-3 text-body-md text-neutral-600">
                              <span className="w-1.5 h-1.5 bg-success-500 rounded-full mt-2 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Example output */}
                      <div className="bg-brand-500/5 border border-brand-500/20 rounded-xl p-6">
                        <h3 className="font-semibold text-neutral-900 mb-3">Example output</h3>
                        <p className="text-body-md text-neutral-700 italic">
                          "{solution.exampleOutput}"
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

      {/* Additional roles teaser */}
      <section className="section bg-neutral-50">
        <Container size="md">
          <div className="text-center">
            <h2 className="font-display text-heading-xl text-neutral-900 mb-4">
              Other roles we support
            </h2>
            <p className="text-body-lg text-neutral-600 mb-8">
              Genesis also works for Growth/Performance marketers, RevOps/Marketing Ops teams, and Regional Marketing leaders. Each role gets analysis tailored to their specific concerns.
            </p>
            <Button href="/contact?source=solutions-other-roles" variant="secondary" withArrow>
              Ask about your role
            </Button>
          </div>
        </Container>
      </section>

      <FinalCTA
        headline="Ready to see Genesis in action?"
        subheadline="Get in touch to see how Genesis can transform your content strategy."
        showForm={false}
        buttonText="Get started"
        buttonHref="/contact?source=solutions-footer-cta"
        variant="dark"
      />
    </>
  );
}
