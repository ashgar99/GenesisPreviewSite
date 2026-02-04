import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import {
  FileSpreadsheet,
  MessageSquare,
  Mail,
  FileText,
  Calendar,
  Download,
  Database,
  ClipboardCheck,
  Shield,
  Layers,
  ArrowRight,
  Target,
  ListChecks,
} from 'lucide-react';

// Four workflow pillars as required by the brief
const workflowPillars = [
  {
    id: 'inputs',
    title: 'Inputs',
    subtitle: 'What Genesis accepts',
    icon: FileSpreadsheet,
    items: [
      {
        name: 'CSV / XLSX Upload',
        detail: 'Export content performance data from any platform and upload directly',
        status: 'available',
      },
      {
        name: 'LinkedIn Export',
        detail: 'Currently the primary supported data source',
        status: 'available',
      },
      {
        name: 'Additional Platforms',
        detail: 'Twitter/X, newsletters, and more data sources',
        status: 'planned',
      },
    ],
  },
  {
    id: 'outputs',
    title: 'Outputs',
    subtitle: 'What Genesis delivers',
    icon: Layers,
    items: [
      {
        name: 'Executive Summary',
        detail: 'One-page verdict breakdown with key findings and top recommendation',
        status: 'available',
      },
      {
        name: 'Verdicts with Confidence',
        detail: 'Pass, Fail, Coincidence, Uncertain—each with reasoning trace',
        status: 'available',
      },
      {
        name: 'Decision Trace',
        detail: 'Full audit trail showing how each verdict was reached',
        status: 'available',
      },
      {
        name: 'Recommended Actions',
        detail: 'Context-aware suggestions for what to continue, stop, or investigate',
        status: 'available',
      },
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery',
    subtitle: 'How outputs reach teams',
    icon: Mail,
    items: [
      {
        name: 'Email Delivery',
        detail: 'Scheduled Genesis Profile delivery to your inbox',
        status: 'available',
      },
      {
        name: 'PDF Reports',
        detail: 'Stakeholder-ready executive summaries for board presentations',
        status: 'available',
      },
      {
        name: 'Slack Integration',
        detail: 'Verdict summaries and alerts in your workspace (Advanced plans)',
        status: 'available',
      },
      {
        name: 'CSV / JSON Export',
        detail: 'Raw data for BI tools and custom analysis',
        status: 'available',
      },
      {
        name: 'Webhook Notifications',
        detail: 'Push updates to your internal systems',
        status: 'planned',
      },
    ],
  },
  {
    id: 'governance',
    title: 'Governance',
    subtitle: 'What is captured and why',
    icon: Shield,
    items: [
      {
        name: 'Complete Audit Trail',
        detail: 'Every decision traced: intent declared, evidence analysed, verdict assigned',
        status: 'available',
      },
      {
        name: 'Confidence Labels',
        detail: 'No false certainty—verdicts include explicit confidence indicators',
        status: 'available',
      },
      {
        name: 'Strategy Memory',
        detail: 'Verified learnings compound; coincidences blocked until recalibrated',
        status: 'available',
      },
      {
        name: 'Data Retention Controls',
        detail: 'You control how long data is retained; deletion on request',
        status: 'available',
      },
    ],
  },
];

export function TechnicalDetails() {
  return (
    <section id="outputs" className="section bg-neutral-50">
      <Container size="xl">
        <div className="text-center mb-16">
          <SectionLabel>Workflow Integration</SectionLabel>
          <h2 className="font-display text-display-lg text-neutral-900 text-balance mb-4">
            Decision outputs delivered where teams act
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Genesis fits your existing workflow. Import your data, receive traced verdicts where you work, and maintain a complete audit trail for governance.
          </p>
        </div>

        {/* Four-pillar grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {workflowPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100"
              >
                {/* Pillar header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-neutral-100">
                  <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-heading-lg text-neutral-900">
                      {pillar.title}
                    </h3>
                    <p className="text-body-sm text-neutral-500">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                {/* Items list */}
                <div className="space-y-4">
                  {pillar.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {item.status === 'available' ? (
                          <svg className="w-3.5 h-3.5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-neutral-900 text-body-md">
                            {item.name}
                          </span>
                          {item.status === 'planned' && (
                            <span className="text-caption font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                              Coming soon
                            </span>
                          )}
                        </div>
                        <p className="text-body-sm text-neutral-500 mt-0.5">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Artefact-first proof anchor */}
        <div className="bg-neutral-900 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ListChecks className="h-6 w-6 text-brand-400" />
            <h3 className="font-display text-heading-lg text-neutral-50">
              See what Genesis delivers
            </h3>
          </div>
          <p className="text-body-md text-neutral-300 max-w-lg mx-auto mb-6">
            Review example outputs including executive summaries, verdict breakdowns, and decision traces. All examples are synthetic and clearly labelled.
          </p>
          <Button
            href="/contact?reason=example-outputs"
            variant="brand"
            size="lg"
            withArrow
          >
            Request example outputs pack
          </Button>
        </div>

        {/* Enterprise note */}
        <div className="mt-8 text-center">
          <p className="text-body-md text-neutral-500">
            Need custom integrations? Enterprise plans include API access for bespoke workflows.{' '}
            <a href="/contact?reason=enterprise" className="text-brand-500 hover:underline underline-offset-2">
              Contact us
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
