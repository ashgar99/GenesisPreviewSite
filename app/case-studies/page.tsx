import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { FinalCTA, HeroSecondary } from '@/components/sections';
import { FileText, BarChart3, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how Genesis analysis works through pilot studies and example frameworks.',
};

// Pilot studies - clearly labelled as methodology demonstrations
const pilotStudies = [
  {
    title: 'B2B SaaS Content Strategy',
    type: 'Pilot Study',
    icon: TrendingUp,
    image: '/images/case-studies/b2b-saas.jpg',
    scenario: 'A Series B SaaS company had been posting consistently for 18 months with inconsistent results. Some posts reached 50,000+ impressions while others barely cleared 1,000.',
    approach: [
      'Analysed 6 months of content (72 posts) against declared intent',
      'Goal: Generate qualified demo requests from mid-market companies',
      'Target: VP/Director-level marketing and sales leaders',
    ],
    findings: [
      {
        label: 'Pass',
        value: '17%',
        description: 'Posts that achieved goals for intended reasons',
      },
      {
        label: 'Coincidence',
        value: '43%',
        description: 'High engagement from wrong audience',
      },
    ],
    insight: 'High-engagement posts about general industry trends attracted broad audiences but minimal target persona engagement. Lower-engagement posts sharing specific use cases had 4× higher demo conversion.',
  },
  {
    title: 'Agency Client Reporting',
    type: 'Pilot Study',
    icon: Users,
    scenario: 'A boutique B2B marketing agency managed LinkedIn content for 6 clients. Monthly reports consisted of engagement metrics without strategic insight. Client retention was declining.',
    approach: [
      'Analysed 3 months of content across 3 client accounts (90 posts)',
      'Customised intent declarations per client',
      'Compared verdict distributions across portfolio',
    ],
    findings: [
      {
        label: 'Discovery',
        value: 'Variable',
        description: 'Same tactics produced different verdicts per client',
      },
      {
        label: 'Improvement',
        value: '15% → 38%',
        description: 'Pass rate after adjusting content angle',
      },
    ],
    insight: 'Verdict-based reporting gave the agency concrete recommendations rather than metrics recaps. Clients could see exactly which content succeeded for the right reasons.',
  },
];

// What a Genesis Profile contains
const profileContents = [
  {
    icon: FileText,
    title: 'Verdict Breakdown',
    description: 'Every post receives one of four verdicts with clear reasoning explaining the classification.',
  },
  {
    icon: BarChart3,
    title: 'Pattern Analysis',
    description: 'Identification of repeatable approaches that consistently produce results for the right reasons.',
  },
  {
    icon: TrendingUp,
    title: 'Alignment Score',
    description: 'A single metric tracking how well your results align with your stated intent over time.',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <HeroSecondary
        label="Case Studies"
        headline="See how Genesis analysis works"
        subheadline="These pilot studies demonstrate the Genesis methodology applied to real-world scenarios. All data is anonymised and presented as examples of how intent-first analysis produces actionable insights."
        videoSrc="/videos/case-studies-bg.mp4"
        align="left"
      />

      {/* Pilot Studies */}
      <section className="section bg-white">
        <Container size="xl">
          <div className="space-y-16">
            {pilotStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <div
                  key={study.title}
                  className="grid lg:grid-cols-2 gap-12 items-start"
                >
                  <div>
                    {study.image && (
                      <div className="mb-6 rounded-xl overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-brand-600" />
                      </div>
                      <span className="text-caption font-semibold uppercase tracking-wider text-brand-600">
                        {study.type}
                      </span>
                    </div>
                    <h2 className="font-display text-display-md text-neutral-900 mb-4">
                      {study.title}
                    </h2>
                    <p className="text-body-lg text-neutral-600 mb-6">
                      {study.scenario}
                    </p>
                    <div className="bg-neutral-50 rounded-xl p-6">
                      <h3 className="font-semibold text-neutral-900 mb-3">Analysis Approach</h3>
                      <ul className="space-y-2">
                        {study.approach.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-body-md text-neutral-600">
                            <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-neutral-900 rounded-xl p-6 text-neutral-50">
                      <h3 className="font-semibold mb-4">Key Findings</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {study.findings.map((finding) => (
                          <div key={finding.label} className="bg-neutral-800 rounded-lg p-4">
                            <div className="font-display text-2xl text-brand-400 mb-1">
                              {finding.value}
                            </div>
                            <div className="text-caption font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                              {finding.label}
                            </div>
                            <p className="text-body-sm text-neutral-300">
                              {finding.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-brand-500/5 border border-brand-500/20 rounded-xl p-6">
                      <h3 className="font-semibold text-neutral-900 mb-2">Strategic Insight</h3>
                      <p className="text-body-md text-neutral-700">
                        "{study.insight}"
                      </p>
                    </div>

                    <Button
                      href="/contact?reason=case-studies"
                      variant="ghost"
                      withArrow
                    >
                      View full case study
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What You Get */}
      <section className="section bg-neutral-50">
        <Container size="lg">
          <div className="text-center mb-12">
            <SectionLabel>What You Get</SectionLabel>
            <h2 className="font-display text-display-md text-neutral-900 mb-4">
              The Genesis Profile
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Every analysis produces a comprehensive profile that tells you not just what happened, but why—and whether it matched your intent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {profileContents.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-heading-lg text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-neutral-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Note about real case studies */}
      <section className="py-12 bg-white">
        <Container size="md">
          <div className="text-center">
            <p className="text-body-md text-neutral-500">
              These pilot studies demonstrate the Genesis methodology. As we work with more clients, we'll publish detailed case studies with their permission.
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA
        headline="Ready to see your own analysis?"
        subheadline="Contact us to discuss how Genesis can help you understand what is actually driving your results."
        showForm={false}
        buttonText="Contact us"
        buttonHref="/contact?reason=case-studies"
        variant="dark"
      />
    </>
  );
}
