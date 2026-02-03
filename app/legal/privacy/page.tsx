import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Genesis privacy policy - how we handle and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-neutral-50">
        <Container size="lg">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="font-display text-display-lg text-neutral-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-body-lg text-neutral-600">
            Last updated: January 2026
          </p>
        </Container>
      </section>

      <section className="section bg-white">
        <Container size="lg">
          {/* Summary box */}
          <div className="bg-brand-50 border border-brand-100 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl text-neutral-900 mb-4">
              Summary
            </h2>
            <ul className="space-y-2 text-body-md text-neutral-700">
              <li>• We collect only the data necessary to provide our service</li>
              <li>• Your LinkedIn data is encrypted and stored in UK/EU data centres</li>
              <li>• We never sell your data to third parties</li>
              <li>• You can export or delete your data at any time</li>
            </ul>
          </div>

          {/* Policy content */}
          <div className="prose-container space-y-8">
            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-body-md text-neutral-600 mb-4">
                Genesis collects information you provide directly, including your name, email address, company information, and LinkedIn content data that you upload for analysis.
              </p>
              <p className="text-body-md text-neutral-600">
                We also collect usage data to improve our service, including how you interact with Genesis and the results of your analyses.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-body-md text-neutral-600 mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-body-md text-neutral-600 space-y-2">
                <li>Provide and maintain our service</li>
                <li>Generate your Genesis Profiles</li>
                <li>Send you service communications</li>
                <li>Improve and develop new features</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                3. Data Storage and Security
              </h2>
              <p className="text-body-md text-neutral-600 mb-4">
                Your data is stored in UK/EU data centres operated by trusted cloud providers. All data is encrypted at rest and in transit using industry-standard encryption protocols.
              </p>
              <p className="text-body-md text-neutral-600">
                We implement appropriate technical and organisational measures to protect your data against unauthorised access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                4. Data Sharing
              </h2>
              <p className="text-body-md text-neutral-600 mb-4">
                We do not sell your data. We may share your data with:
              </p>
              <ul className="list-disc list-inside text-body-md text-neutral-600 space-y-2">
                <li>Service providers who help us operate our business</li>
                <li>Law enforcement when required by law</li>
                <li>Other parties with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                5. Your Rights
              </h2>
              <p className="text-body-md text-neutral-600 mb-4">
                Under GDPR and applicable data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside text-body-md text-neutral-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data in a portable format</li>
                <li>Object to certain processing activities</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                6. Data Retention
              </h2>
              <p className="text-body-md text-neutral-600">
                We retain your data for as long as your account is active or as needed to provide our service. After account cancellation, we delete your data within 30 days unless you request an export or we're required to retain it for legal purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-lg text-neutral-900 mb-4">
                7. Contact Us
              </h2>
              <p className="text-body-md text-neutral-600">
                If you have questions about this privacy policy or your data, contact us at{' '}
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
