import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Genesis cookie policy - how we use cookies on our website.',
};

export default function CookiesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-neutral-50">
        <Container size="lg">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="font-display text-display-lg text-neutral-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-body-lg text-neutral-600">
            Last updated: January 2026
          </p>
        </Container>
      </section>

      <section className="section bg-white">
        <Container size="lg">
          <div className="prose-container space-y-8">
            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                What Are Cookies
              </h2>
              <p className="text-body-md text-neutral-600">
                Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                How We Use Cookies
              </h2>
              <p className="text-body-md text-neutral-600 mb-4">
                Genesis uses a minimal set of cookies:
              </p>

              {/* Cookie table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="py-3 px-4 text-body-sm font-semibold text-neutral-700">Cookie</th>
                      <th className="py-3 px-4 text-body-sm font-semibold text-neutral-700">Purpose</th>
                      <th className="py-3 px-4 text-body-sm font-semibold text-neutral-700">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 text-body-sm text-neutral-600">session_id</td>
                      <td className="py-3 px-4 text-body-sm text-neutral-600">Maintains your login session</td>
                      <td className="py-3 px-4 text-body-sm text-neutral-600">Session</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 text-body-sm text-neutral-600">preferences</td>
                      <td className="py-3 px-4 text-body-sm text-neutral-600">Stores your site preferences</td>
                      <td className="py-3 px-4 text-body-sm text-neutral-600">1 year</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 text-body-sm text-neutral-600">cookie_consent</td>
                      <td className="py-3 px-4 text-body-sm text-neutral-600">Records your cookie consent choice</td>
                      <td className="py-3 px-4 text-body-sm text-neutral-600">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-body-md text-neutral-600">
                We do not use third-party advertising or tracking cookies by default. If you opt in to analytics, we use privacy-respecting analytics that do not track you across websites.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                Managing Cookies
              </h2>
              <p className="text-body-md text-neutral-600">
                You can control cookies through your browser settings. Note that disabling essential cookies may affect the functionality of our service. You can also adjust your cookie preferences through our cookie banner.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                Contact
              </h2>
              <p className="text-body-md text-neutral-600">
                For questions about our cookie policy, contact us at{' '}
                <a href="mailto:privacy@genesis.preview" className="text-brand-500 hover:text-brand-600">
                  privacy@genesis.preview
                </a>
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
