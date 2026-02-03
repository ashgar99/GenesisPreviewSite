import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FinalCTA } from '@/components/sections';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how marketing teams use Genesis to understand and improve their LinkedIn strategy.',
};

// Placeholder case studies
const caseStudies = [
  {
    company: 'Acme Marketing Co.',
    industry: 'Marketing Agency',
    challenge: 'Struggled to prove ROI to clients beyond vanity metrics',
    outcome: '67% increase in client retention',
    description: 'How a boutique marketing agency used Genesis to demonstrate clear value to their enterprise clients.',
    href: '/case-studies/acme-marketing',
    featured: true,
  },
  {
    company: 'TechStart Inc.',
    industry: 'B2B SaaS',
    challenge: 'Founder posting without clear strategy measurement',
    outcome: '3× improvement in content-attributed leads',
    description: 'How a SaaS founder transformed their content strategy with evidence-based insights.',
    href: '/case-studies/techstart',
  },
  {
    company: 'Growth Partners',
    industry: 'Consultancy',
    challenge: 'Needed to justify marketing spend to board',
    outcome: 'Clear evidence of strategy alignment',
    description: 'How a consulting firm used Genesis profiles in their board presentations.',
    href: '/case-studies/growth-partners',
  },
];

export default function CaseStudiesPage() {
  const [featured, ...rest] = caseStudies;

  return (
    <>
      <section className="pt-32 pb-16 bg-neutral-50">
        <Container size="xl">
          <div className="max-w-3xl">
            <SectionLabel>Case Studies</SectionLabel>
            <h1 className="font-display text-display-lg text-neutral-900 mb-6">
              Real results from real teams
            </h1>
            <p className="text-body-lg text-neutral-600">
              See how marketing teams use Genesis to understand what's actually driving their LinkedIn results.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container size="xl">
          {/* Featured case study */}
          <div className="mb-16 p-8 lg:p-12 bg-neutral-50 rounded-2xl border-2 border-dashed border-neutral-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-xl text-neutral-900">{featured.company}</span>
                  <span className="text-body-sm text-neutral-500">{featured.industry}</span>
                </div>
                <p className="text-body-lg text-neutral-600 mb-4">
                  {featured.description}
                </p>
                <div className="font-display text-2xl text-neutral-900 mb-6">
                  {featured.outcome}
                </div>
                <span className="inline-flex items-center gap-2 text-body-md font-semibold text-neutral-400">
                  Read full case study
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <div className="aspect-video bg-neutral-200 rounded-xl flex items-center justify-center">
                <span className="text-neutral-400 text-body-sm">[Case study visual]</span>
              </div>
            </div>
          </div>

          {/* Case study grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {rest.map((caseStudy) => (
              <div
                key={caseStudy.company}
                className="p-6 bg-neutral-50 rounded-xl border-2 border-dashed border-neutral-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display text-lg text-neutral-900">{caseStudy.company}</span>
                  <span className="text-body-sm text-neutral-500">{caseStudy.industry}</span>
                </div>
                <p className="text-body-md text-neutral-600 mb-4">
                  {caseStudy.description}
                </p>
                <div className="font-display text-xl text-neutral-900 mb-4">
                  {caseStudy.outcome}
                </div>
                <span className="inline-flex items-center gap-2 text-body-sm font-semibold text-neutral-400">
                  Read case study
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            ))}
          </div>

          {/* Placeholder notice */}
          <div className="mt-12 p-8 bg-neutral-100 rounded-xl text-center">
            <p className="text-neutral-600 mb-2">
              <strong>Note:</strong> These are placeholder case studies.
            </p>
            <p className="text-body-sm text-neutral-500">
              [TODO: Add real case studies with client permission when available]
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA
        headline="Ready to become our next case study?"
        subheadline="Join the teams using Genesis to transform their LinkedIn strategy."
        showForm={false}
        buttonText="Get started"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
}
