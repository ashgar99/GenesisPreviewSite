import { Metadata } from 'next';
import {
  HeroSecondary,
  ComparisonTable,
  SecurityTrust,
  FAQ,
  FinalCTA,
  TechnicalDetails,
} from '@/components/sections';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { VerdictCard } from '@/components/ui/VerdictBadge';
import { HoverTiltCard } from '@/components/ui/HoverTiltCard';
import { clsx } from 'clsx';

export const metadata: Metadata = {
  title: 'Platform',
  description:
    'Learn how Genesis analyses your content against declared goals to separate strategic wins from coincidental ones. Only verified learnings reinforce your strategy.',
};

// Feature narrative section
function FeatureNarrative({
  label,
  headline,
  description,
  imagePosition = 'right',
  children,
}: {
  label: string;
  headline: string;
  description: string[];
  imagePosition?: 'left' | 'right';
  children: React.ReactNode;
}) {
  return (
    <section className={clsx('section', imagePosition === 'left' ? 'bg-white' : 'bg-neutral-50')}>
      <Container size="xl">
        <div className={clsx('grid lg:grid-cols-2 gap-12 lg:gap-16 items-center')}>
          <div className={clsx(imagePosition === 'left' && 'lg:order-2')}>
            <SectionLabel>{label}</SectionLabel>
            <h2 className="font-display text-display-md text-neutral-900 mb-6 text-balance">
              {headline}
            </h2>
            <div className="space-y-4">
              {description.map((p, i) => (
                <p key={i} className="text-body-lg text-neutral-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className={clsx(imagePosition === 'left' && 'lg:order-1')}>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

// Core concept diagram
function CoreConceptSection() {
  return (
    <section className="section bg-white">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Diagram */}
          <div className="bg-neutral-50 rounded-xl p-8 lg:p-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-brand-100 rounded-lg">
                <span className="text-brand-600 font-semibold">Intent</span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="h-8 w-8 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              <div className="inline-flex items-center gap-4 px-6 py-3 bg-neutral-200 rounded-lg">
                <span className="text-neutral-700 font-semibold">Execution</span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="h-8 w-8 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              <div className="inline-flex items-center gap-4 px-6 py-3 bg-neutral-900 rounded-lg">
                <span className="text-neutral-50 font-semibold">Verdict</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionLabel>Core Concept</SectionLabel>
            <h2 className="font-display text-display-md text-neutral-900 mb-6">
              Intent → Execution → Verdict
            </h2>
            <div className="space-y-4">
              <p className="text-body-lg text-neutral-600 leading-relaxed">
                Traditional analytics start with results and work backward. Genesis starts with
                your intent and works forward.
              </p>
              <p className="text-body-lg text-neutral-600 leading-relaxed">
                First, you declare what you're trying to achieve. Then Genesis analyses how your
                content actually performed. Finally, it compares the two to generate a verdict.
              </p>
              <p className="text-body-lg text-neutral-600 leading-relaxed">
                This approach reveals not just what happened, but whether what happened matches
                what you were trying to make happen.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Verdict system deep dive
function VerdictSystemSection() {
  const verdicts = [
    {
      type: 'pass' as const,
      title: 'Pass',
      description:
        'Success by design. The content performed well and our analysis indicates the results align with your stated intent.',
    },
    {
      type: 'fail' as const,
      title: 'Fail',
      description:
        'Clear miss. The content underperformed and our analysis identifies gaps between execution and intent.',
    },
    {
      type: 'coincidence' as const,
      title: 'Coincidence',
      description:
        'Likely circumstantial. The content performed well but our analysis suggests insufficient evidence that intent drove the outcome.',
    },
    {
      type: 'uncertain' as const,
      title: 'Uncertain',
      description:
        'Insufficient data. More time or content needed before Genesis can confidently assign a verdict.',
    },
  ];

  return (
    <section className="section bg-neutral-900">
      <Container size="xl">
        <div className="text-center mb-16">
          <SectionLabel variant="light">The Verdict System</SectionLabel>
          <h2 className="font-display text-display-lg text-neutral-50 text-balance">
            Four verdicts. No ambiguity.
          </h2>
          <p className="text-body-lg text-neutral-300 max-w-2xl mx-auto mt-4">
            Every piece of content receives exactly one verdict, with clear reasoning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verdicts.map((verdict) => (
            <div key={verdict.type} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <VerdictCard verdict={verdict.type} count={0} className="mb-4 !bg-transparent" />
              <h3 className="font-display text-xl text-neutral-50 mb-2">{verdict.title}</h3>
              <p className="text-body-sm text-neutral-400">{verdict.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const comparisonData = {
  headline: 'Genesis vs. other analytics tools',
  columns: ['Genesis', 'LinkedIn Analytics', 'Shield Analytics', 'Hootsuite'],
  rows: [
    { feature: 'Shows what happened', values: [true, true, true, true] },
    { feature: 'Explains why it happened', values: [true, false, false, false] },
    { feature: 'Compares to your declared intent', values: [true, false, false, false] },
    { feature: 'Identifies repeatable patterns', values: [true, 'partial', 'partial', 'partial'] },
    { feature: 'Distinguishes strategy from luck', values: [true, false, false, false] },
    { feature: 'Provides actionable verdicts', values: [true, false, 'partial', 'partial'] },
    { feature: 'Full reasoning traces', values: [true, false, false, false] },
  ],
  highlightColumn: 0,
};


const platformFAQ = {
  headline: 'Platform questions',
  items: [
    {
      question: 'How much data do I need?',
      answer:
        'Genesis works best with at least 3 months of content activity, but can provide initial insights with as little as 1 month of data.',
    },
    {
      question: 'How often are profiles generated?',
      answer:
        'Depending on your plan: monthly (Core), bi-weekly (Advanced), or weekly (Enterprise). You can also request on-demand analysis.',
    },
    {
      question: 'Can I use Genesis for multiple content sources?',
      answer:
        'Yes. Enterprise plans support multi-account analysis, allowing you to manage multiple content presences from one dashboard.',
    },
    {
      question: 'What if my goals change?',
      answer:
        'You can update your declared intent at any time. Future profiles will be analysed against your new goals.',
    },
    {
      question: 'What happens when content succeeds by luck?',
      answer:
        'Genesis marks it as Coincidence and blocks it from reinforcing your strategy. You can recalibrate the intent or exclude it entirely—preventing lucky outcomes from corrupting future decisions.',
    },
  ],
};

export default function PlatformPage() {
  return (
    <>
      <HeroSecondary
        label="Platform"
        headline="Luck does not reinforce strategy"
        subheadline="Genesis blocks coincidental wins from corrupting your decision-making. Only verified successes and clean failures shape future strategy."
        cta={{
          text: 'Contact us',
          href: '/contact?reason=platform',
        }}
        videoSrc="/videos/platform-bg.mp4"
      />

      <CoreConceptSection />

      <FeatureNarrative
        label="The Genesis Profile"
        headline="Your strategy checkpoint"
        description={[
          'Each cycle, Genesis delivers a comprehensive analysis of your content. It examines each piece against your declared intent and assigns a verdict.',
          'Only passes and clean failures reinforce your strategy. Coincidental wins are blocked until you recalibrate—preventing luck from corrupting your decisions.',
        ]}
        imagePosition="right"
      >
        <div className="bg-neutral-900 rounded-xl p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
            <span className="font-display text-lg text-neutral-50">Genesis Profile</span>
            <span className="text-body-sm text-brand-400 bg-brand-500/20 px-3 py-1 rounded">
              January 2026
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <VerdictCard verdict="pass" count={4} />
            <VerdictCard verdict="fail" count={3} />
            <VerdictCard verdict="coincidence" count={3} />
            <VerdictCard verdict="uncertain" count={2} />
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 rounded-full"
                style={{ width: '67%' }}
              />
            </div>
            <div className="flex justify-between text-body-sm">
              <span className="text-neutral-400">Pattern confidence</span>
              <span className="text-neutral-50 font-semibold">67%</span>
            </div>
          </div>
        </div>
      </FeatureNarrative>

      <FeatureNarrative
        label="Pattern Analysis"
        headline="See what actually works"
        description={[
          'Genesis doesn\'t just evaluate individual posts—it identifies patterns across your content that consistently produce results.',
          'You\'ll learn which approaches reliably deliver outcomes aligned with your intent, and which patterns you should avoid.',
        ]}
        imagePosition="left"
      >
        <HoverTiltCard className="rounded-xl overflow-hidden">
          <div className="bg-neutral-100 rounded-xl p-6">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-success-500 shadow-sm">
                <div className="font-semibold text-neutral-900 mb-1">Winning pattern</div>
                <div className="text-body-sm text-neutral-600">
                  Educational content with specific examples performs 3× better for thought leadership goals
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-error-500 shadow-sm">
                <div className="font-semibold text-neutral-900 mb-1">Pattern to avoid</div>
                <div className="text-body-sm text-neutral-600">
                  Generic industry news shares rarely align with brand differentiation intent
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-warning-500 shadow-sm">
                <div className="font-semibold text-neutral-900 mb-1">Needs investigation</div>
                <div className="text-body-sm text-neutral-600">
                  Personal stories get high engagement but unclear alignment with B2B goals
                </div>
              </div>
            </div>
          </div>
        </HoverTiltCard>
      </FeatureNarrative>

      <VerdictSystemSection />

      <ComparisonTable {...comparisonData} />

      <TechnicalDetails />

      <FAQ {...platformFAQ} variant="accordion" />

      <FinalCTA
        headline="See Genesis in action"
        subheadline="Get in touch to see how Genesis can bring clarity to your content strategy."
        showForm={false}
        buttonText="Contact Us"
        buttonHref="/contact?source=platform-footer-cta"
        variant="dark"
      />
    </>
  );
}
