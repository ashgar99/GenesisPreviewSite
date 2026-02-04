'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { clsx } from 'clsx';
import { User, Briefcase, Users, TrendingUp, Settings, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const roles = [
  {
    id: 'marketing-leader',
    icon: User,
    title: 'Marketing Leader',
    subtitle: 'Prove strategy, not just activity',
    concerns: [
      'Proving ROI to leadership with evidence',
      'Making confident budget decisions',
      'Understanding what actually drives pipeline',
    ],
    deliverables: [
      'Board-ready summary reports',
      'Pattern analysis of what works',
      'Clear reasoning traces',
    ],
    exampleOutput: 'A one-page executive summary showing that 4 of 12 posts achieved their stated goals, 3 failed for identifiable reasons, and 2 succeeded by coincidence.',
    cta: { text: 'See sample outputs', href: '/contact?source=whoisfor-marketing&interest=sample-outputs' },
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Growth / Performance',
    subtitle: 'Optimise what actually works',
    concerns: [
      'Attribution clarity for content',
      'Testing velocity for new approaches',
      'Optimising spend across content types',
    ],
    deliverables: [
      'Alignment score tracking over time',
      'Verdict breakdown by content type',
      'Pattern recognition across posts',
    ],
    exampleOutput: 'A quarterly trends report showing thought leadership posts have 73% alignment with intent, while promotional posts have 31%.',
    cta: { text: 'View the workflow', href: '/contact?source=whoisfor-growth&interest=sample-outputs' },
  },
  {
    id: 'revops',
    icon: Settings,
    title: 'RevOps / Marketing Ops',
    subtitle: 'Clean data, clear methodology',
    concerns: [
      'Reliable reporting infrastructure',
      'Integration with existing tools',
      'Audit trails and transparency',
    ],
    deliverables: [
      'CSV/XLSX data exports',
      'Full reasoning traces',
      'Integration documentation',
    ],
    exampleOutput: 'A structured data export with verdict classifications, confidence scores, and reasoning traces for your BI dashboard.',
    cta: { text: 'View integration docs', href: '/platform' },
  },
  {
    id: 'founder',
    icon: Briefcase,
    title: 'Founder / GM',
    subtitle: 'Stop guessing what works',
    concerns: [
      'Limited time for content',
      'No clear measurement framework',
      'Uncertainty about ROI',
    ],
    deliverables: [
      'Clear "stop/continue" recommendations',
      'Monthly verdict summary',
      'Time-to-insight in minutes',
    ],
    exampleOutput: 'A simple verdict: "Your technical deep-dives consistently pass; your announcement posts consistently fail. Here\'s why."',
    cta: { text: 'See how founders use Genesis', href: '/contact?source=whoisfor-founder&interest=sample-outputs' },
  },
  {
    id: 'agency',
    icon: Users,
    title: 'Agency Partner',
    subtitle: 'Prove value, retain clients',
    concerns: [
      'Proving value beyond vanity metrics',
      'Differentiating from competitors',
      'Managing multiple accounts',
    ],
    deliverables: [
      'Client-ready reports',
      'Multi-account analysis',
      'White-label output options',
    ],
    exampleOutput: 'A client presentation showing month-over-month alignment improvement with specific examples of content that passed and why.',
    cta: { text: 'Request partnership info', href: '/contact?source=whoisfor-agency&interest=agency' },
  },
  {
    id: 'regional',
    icon: Globe,
    title: 'Regional Marketing',
    subtitle: 'Understand what works where',
    concerns: [
      'What works across different markets',
      'Adapting global content locally',
      'Consistent regional reporting',
    ],
    deliverables: [
      'Regional performance comparison',
      'Market-specific patterns',
      'Multilingual analysis (EN/JP)',
    ],
    exampleOutput: 'A regional comparison showing your APAC content has higher intent alignment than EMEA, with specific patterns explaining why.',
    cta: { text: 'Learn about regional analysis', href: '/contact?source=regional' },
  },
];

export function WhoItsFor() {
  const [activeRole, setActiveRole] = useState(roles[0].id);
  const currentRole = roles.find((r) => r.id === activeRole) || roles[0];
  const Icon = currentRole.icon;

  return (
    <section className="section bg-white" id="who-its-for">
      <Container size="xl">
        <div className="text-center mb-12">
          <SectionLabel>Who It's For</SectionLabel>
          <h2 className="font-display text-display-lg text-neutral-900 text-balance mb-4">
            Built for people who need to justify their approach
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Different roles have different concerns. Genesis delivers specific outputs that answer the questions you actually need answered.
          </p>
        </div>

        {/* Role Tabs - Desktop */}
        <div className="hidden lg:flex flex-wrap justify-center gap-2 mb-12">
          {roles.map((role) => {
            const RoleIcon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={clsx(
                  'flex items-center gap-2 px-4 py-2.5 rounded-full text-body-sm font-medium transition-all',
                  activeRole === role.id
                    ? 'bg-brand-500 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                )}
              >
                <RoleIcon className="h-4 w-4" />
                {role.title}
              </button>
            );
          })}
        </div>

        {/* Role Tabs - Mobile (scrollable) */}
        <div className="lg:hidden overflow-x-auto -mx-4 px-4 mb-8">
          <div className="flex gap-2 min-w-max pb-2">
            {roles.map((role) => {
              const RoleIcon = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={clsx(
                    'flex items-center gap-2 px-4 py-2.5 rounded-full text-body-sm font-medium transition-all whitespace-nowrap',
                    activeRole === role.id
                      ? 'bg-brand-500 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-600'
                  )}
                >
                  <RoleIcon className="h-4 w-4" />
                  {role.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Role Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Role Info */}
          <div className="bg-neutral-50 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-display text-heading-xl text-neutral-900">
                  {currentRole.title}
                </h3>
                <p className="text-body-md text-brand-600 font-medium">
                  {currentRole.subtitle}
                </p>
              </div>
            </div>

            {/* What you care about */}
            <div className="mb-6">
              <h4 className="text-caption font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                What you care about
              </h4>
              <ul className="space-y-2">
                {currentRole.concerns.map((concern) => (
                  <li key={concern} className="flex items-start gap-3 text-body-md text-neutral-600">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0" />
                    {concern}
                  </li>
                ))}
              </ul>
            </div>

            {/* What Genesis gives you */}
            <div>
              <h4 className="text-caption font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                What Genesis gives you
              </h4>
              <ul className="space-y-2">
                {currentRole.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-3 text-body-md text-neutral-700">
                    <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Example Output */}
          <div className="space-y-6">
            <div className="bg-brand-500/5 border border-brand-500/20 rounded-2xl p-6 lg:p-8">
              <h4 className="text-caption font-semibold uppercase tracking-wider text-brand-600 mb-4">
                Example Output
              </h4>
              <p className="text-body-lg text-neutral-700 italic leading-relaxed mb-6">
                "{currentRole.exampleOutput}"
              </p>
              <p className="text-body-md text-neutral-600">
                Want to see more?{' '}
                <a
                  href="/contact?reason=example-outputs"
                  className="text-brand-500 hover:text-brand-600 font-medium underline underline-offset-2"
                >
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* All Roles Grid - Mobile Alternative */}
        <div className="lg:hidden mt-12 pt-12 border-t border-neutral-200">
          <h3 className="font-display text-heading-lg text-neutral-900 text-center mb-8">
            All roles we support
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {roles.map((role) => {
              const RoleIcon = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => {
                    setActiveRole(role.id);
                    document.getElementById('who-its-for')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex flex-col items-center p-4 bg-neutral-50 rounded-xl text-center hover:bg-neutral-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center mb-2">
                    <RoleIcon className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-body-sm font-medium text-neutral-900">{role.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
