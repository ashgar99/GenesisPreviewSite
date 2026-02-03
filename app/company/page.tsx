import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FinalCTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Genesis - the team building decision intelligence for LinkedIn marketing.',
};

export default function CompanyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-neutral-50">
        <Container size="xl">
          <div className="max-w-3xl">
            <SectionLabel>About</SectionLabel>
            <h1 className="font-display text-display-lg text-neutral-900 mb-6">
              Building clarity for marketing decisions
            </h1>
            <p className="text-body-lg text-neutral-600">
              Genesis exists because we believe marketing teams deserve better than vanity metrics and guesswork.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-display text-display-md text-neutral-900 mb-6">
                Why we built Genesis
              </h2>
              <div className="space-y-4 text-body-lg text-neutral-600">
                <p>
                  Every marketing team we've worked with faces the same problem: they have plenty of data about what happened, but almost no insight into why it happened.
                </p>
                <p>
                  They can tell you a post got 50,000 impressions. They can't tell you whether those impressions came from the strategy they intended or from an algorithm quirk they'll never understand.
                </p>
                <p>
                  This creates a fundamental problem. Without knowing why something worked, you can't reliably do it again. Teams end up doubling down on tactics that worked once by accident, while ignoring approaches that failed for fixable reasons.
                </p>
                <p>
                  Genesis solves this by introducing a simple but powerful concept: compare what happened against what you intended. When these align, you have a strategy that works. When they don't, you have an opportunity to learn.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-xl p-8 lg:p-12 h-fit">
              <h3 className="font-display text-heading-lg text-neutral-900 mb-6">
                Our principles
              </h3>
              <ul className="space-y-6">
                <li>
                  <div className="font-semibold text-neutral-900 mb-1">Evidence over claims</div>
                  <p className="text-body-md text-neutral-600">
                    Every insight we provide is backed by clear reasoning. No black boxes.
                  </p>
                </li>
                <li>
                  <div className="font-semibold text-neutral-900 mb-1">Intent-first analysis</div>
                  <p className="text-body-md text-neutral-600">
                    Results only matter in the context of what you were trying to achieve.
                  </p>
                </li>
                <li>
                  <div className="font-semibold text-neutral-900 mb-1">Simplicity in complexity</div>
                  <p className="text-body-md text-neutral-600">
                    Sophisticated analysis, delivered in clear, actionable language.
                  </p>
                </li>
                <li>
                  <div className="font-semibold text-neutral-900 mb-1">Privacy by design</div>
                  <p className="text-body-md text-neutral-600">
                    Your data belongs to you. We never sell it, and you can delete it anytime.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-neutral-50">
        <Container size="lg">
          <div className="text-center mb-12">
            <SectionLabel>The Team</SectionLabel>
            <h2 className="font-display text-display-md text-neutral-900 mb-4">
              Built by marketers, for marketers
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Genesis is built by a team that has spent years in the trenches of B2B marketing, frustrated by the gap between activity and understanding.
            </p>
          </div>

          {/* Team placeholder */}
          <div className="bg-neutral-100 rounded-xl p-12 text-center border-2 border-dashed border-neutral-300">
            <p className="text-neutral-500 text-body-md">
              [TODO: Add team member profiles and photos when available]
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA
        headline="Ready to see what Genesis can do?"
        subheadline="Get in touch to learn how Genesis can transform your LinkedIn strategy."
        showForm={false}
        buttonText="Contact us"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  );
}
