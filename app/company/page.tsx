import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FinalCTA, MethodologySection } from '@/components/sections';
import { Button } from '@/components/ui/Button';
import { Target, Eye, Shield, Sparkles, FileCheck, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Genesis is a decision intelligence company for marketing teams. Built by marketers who needed evidence, not dashboards.',
};

// How we help - 3 pillars
const helpPillars = [
  {
    icon: Target,
    title: 'Strategy Clarity',
    description: 'Understand which approaches succeed for the right reasons. Stop doubling down on lucky outcomes.',
  },
  {
    icon: Eye,
    title: 'Execution Support',
    description: 'Receive context-aware recommendations. Know what to continue, stop, or investigate next.',
  },
  {
    icon: Shield,
    title: 'Decision Memory',
    description: 'Build compounding strategic knowledge. Only verified learnings reinforce future decisions.',
  },
];

// What we value
const values = [
  {
    icon: Eye,
    title: 'Full transparency',
    description: 'Every verdict comes with complete reasoning. We show our work because black boxes do not build trust.',
  },
  {
    icon: Shield,
    title: 'Privacy by default',
    description: 'Your data is yours. We analyse it, deliver insights, and delete it on request. We never sell or share data.',
  },
  {
    icon: Sparkles,
    title: 'Algorithms aiding creativity',
    description: 'Analysis should inform creative decisions, not replace human judgment. Genesis suggests; you decide.',
  },
  {
    icon: FileCheck,
    title: 'Attention to small print',
    description: 'Details matter. We are precise about claims, careful about edge cases, and honest about limitations.',
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Mission with Video Background */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/company-banner-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-neutral-950/70" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl">
            <SectionLabel variant="light">About Genesis</SectionLabel>
            <h1 className="font-display text-display-lg text-neutral-50 mb-6">
              Decision intelligence for marketing
            </h1>
            <p className="text-body-xl text-neutral-300">
              We help marketing teams make better, calmer, more defensible decisions by testing whether their work behaves the way it was intended to.
            </p>
          </div>
        </Container>
      </section>

      {/* Origin Story */}
      <section className="section bg-white">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionLabel>The Origin</SectionLabel>
              <h2 className="font-display text-display-md text-neutral-900 mb-8">
                The path of least resistance was not working
              </h2>
              <div className="space-y-5 text-body-lg text-neutral-600">
                <p>
                  Before Genesis, I spent years creating content for B2B companies. The process was always the same: publish, check the numbers, try to figure out what worked.
                </p>
                <p>
                  The problem was not a lack of data. It was the gap between what the data showed and what it actually meant. A post could get 50,000 impressions, but we had no way of knowing if those impressions reached the right people, drove the right conversations, or aligned with our actual goals.
                </p>
                <p>
                  We would double down on content that "worked" without understanding why it worked. We would abandon approaches that failed without knowing if the failure was in the strategy or the execution. The algorithm felt like a black box we were optimising against, rather than a tool we could understand.
                </p>
                <p>
                  Genesis started as a question: what if we could compare what actually happened against what we intended to happen? What if we could distinguish between success by design and success by coincidence?
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-neutral-200 flex items-center gap-4">
                <img
                  src="/images/team/ashleigh-garnett.jpg"
                  alt="Ashleigh Garnett"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-lg text-neutral-900">Ashleigh Garnett</p>
                  <p className="text-body-md text-neutral-500">Founder, Genesis</p>
                </div>
              </div>
            </div>

            {/* The Challenge */}
            <div className="bg-neutral-50 rounded-2xl p-8 lg:p-10">
              <SectionLabel>The Challenge</SectionLabel>
              <h3 className="font-display text-heading-xl text-neutral-900 mb-6">
                Data volume without decision clarity
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-error-500 pl-6">
                  <p className="text-body-lg text-neutral-700 mb-2">
                    "Engagement is up 40% this month."
                  </p>
                  <p className="text-body-md text-neutral-500">
                    But is it from the right audience? Does it align with your goals? Would it repeat?
                  </p>
                </div>
                <div className="border-l-2 border-error-500 pl-6">
                  <p className="text-body-lg text-neutral-700 mb-2">
                    "This post went viral."
                  </p>
                  <p className="text-body-md text-neutral-500">
                    Was it strategy or luck? If you cannot explain why, you cannot replicate it.
                  </p>
                </div>
                <div className="border-l-2 border-error-500 pl-6">
                  <p className="text-body-lg text-neutral-700 mb-2">
                    "Let us do more of what worked."
                  </p>
                  <p className="text-body-md text-neutral-500">
                    Without knowing why it worked, you might reinforce coincidence, not strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Solution */}
      <section className="section bg-neutral-50">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="font-display text-display-md text-neutral-900 mb-6">
              The decision intelligence loop
            </h2>
            <p className="text-body-lg text-neutral-600">
              Genesis operates as a closed-loop system. Declare intent, analyse evidence, receive verdicts, and build strategy memory. Only verified learnings compound—coincidental wins are blocked.
            </p>
          </div>

          {/* Loop visualisation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              <div className="bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold">
                Intent
              </div>
              <span className="text-neutral-400 text-2xl">→</span>
              <div className="bg-neutral-200 text-neutral-700 px-6 py-3 rounded-lg font-semibold">
                Evidence
              </div>
              <span className="text-neutral-400 text-2xl">→</span>
              <div className="bg-neutral-900 text-white px-6 py-3 rounded-lg font-semibold">
                Verdict
              </div>
              <span className="text-neutral-400 text-2xl">→</span>
              <div className="bg-brand-100 text-brand-700 px-6 py-3 rounded-lg font-semibold">
                Strategy Memory
              </div>
            </div>
            <p className="text-body-sm text-neutral-500 text-center mt-6">
              Coincidental wins are blocked from reinforcing strategy until recalibrated.
            </p>
          </div>
        </Container>
      </section>

      {/* How We Help */}
      <section className="section bg-white">
        <Container size="lg">
          <div className="text-center mb-12">
            <SectionLabel>How We Help</SectionLabel>
            <h2 className="font-display text-display-md text-neutral-900 mb-4">
              Three pillars of decision support
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {helpPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="text-center">
                  <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-heading-lg text-neutral-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-body-md text-neutral-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Methodology Diagram - reused */}
      <MethodologySection
        label="How We Think"
        headline="Two lenses. One verdict."
        description={[
          'Genesis analyses content through two perspectives. One lens examines what actually happened—performance metrics, audience response, engagement patterns.',
          'The other lens examines what you intended—your declared goals, target audience, and strategic priorities.',
          'Where these perspectives intersect, we generate a verdict. This is the insight that transforms content strategy from guesswork to evidence.',
        ]}
      />

      {/* What We Value */}
      <section className="section bg-white">
        <Container size="lg">
          <div className="text-center mb-12">
            <SectionLabel>What We Value</SectionLabel>
            <h2 className="font-display text-display-md text-neutral-900 mb-4">
              Built with care
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Genesis is a small team with high standards. We focus on doing one thing extremely well.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-neutral-50 rounded-xl p-6"
                >
                  <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-body-md text-neutral-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Future Intent */}
      <section className="section bg-neutral-50">
        <Container size="md">
          <div className="text-center">
            <div className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="h-7 w-7 text-white" />
            </div>
            <SectionLabel>Looking Ahead</SectionLabel>
            <h2 className="font-display text-display-md text-neutral-900 mb-6">
              Building for scale
            </h2>
            <div className="space-y-4 text-body-lg text-neutral-600 text-left max-w-2xl mx-auto">
              <p>
                Genesis is designed to scale internationally. We intend to build a distributed team across time zones, serving marketing teams wherever they operate.
              </p>
              <p>
                Our roadmap includes expanded data sources, deeper integration with enterprise tools, and research partnerships advancing how content effectiveness is measured.
              </p>
              <p>
                We publish what we learn. Our methodology is documented. We believe raising the quality of marketing measurement benefits everyone—including us.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact?reason=partnership" variant="secondary" withArrow>
                Discuss partnership opportunities
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA
        headline="Interested in what we are building?"
        subheadline="Contact us to discuss pilots, partnerships, or just to say hello. We would like to hear from marketing teams who share our frustration."
        showForm={false}
        buttonText="Contact us"
        buttonHref="/contact?reason=general"
        variant="dark"
      />
    </>
  );
}
