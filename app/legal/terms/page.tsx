import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Genesis terms of service - the agreement between you and Genesis.',
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-neutral-50">
        <Container size="lg">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="font-display text-display-lg text-neutral-900 mb-6">
            Terms of Service
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
                1. Agreement to Terms
              </h2>
              <p className="text-body-md text-neutral-600">
                By accessing or using Genesis, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-body-md text-neutral-600">
                Genesis is a decision intelligence platform for LinkedIn marketing. We analyse your LinkedIn content against your declared goals to provide insights about your content strategy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-body-md text-neutral-600 mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside text-body-md text-neutral-600 space-y-2">
                <li>Providing accurate information</li>
                <li>Maintaining the security of your account</li>
                <li>Ensuring you have the right to upload your LinkedIn data</li>
                <li>Using the service in compliance with applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                4. Payment Terms
              </h2>
              <p className="text-body-md text-neutral-600">
                Subscription fees are billed in advance on a monthly or annual basis. You may cancel your subscription at any time with 30 days notice. Refunds are provided on a pro-rata basis for annual subscriptions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-body-md text-neutral-600">
                Genesis and its original content, features, and functionality are owned by Genesis and are protected by international copyright, trademark, and other intellectual property laws. You retain ownership of your data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-body-md text-neutral-600">
                Genesis is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                7. Changes to Terms
              </h2>
              <p className="text-body-md text-neutral-600">
                We may modify these terms at any time. We will notify you of material changes via email or through the service. Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                8. Governing Law
              </h2>
              <p className="text-body-md text-neutral-600">
                These terms are governed by the laws of England and Wales. Any disputes shall be resolved in the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                9. Contact
              </h2>
              <p className="text-body-md text-neutral-600">
                For questions about these terms, contact us at{' '}
                <a href="mailto:legal@genesis.preview" className="text-brand-500 hover:text-brand-600">
                  legal@genesis.preview
                </a>
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
