'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { Container } from '@/components/layout/Container';

// Mock data for the outputs portfolio demonstration
const mockProfile = {
  client: 'Acme Corp',
  workspace: 'Q4 2025 Content Strategy',
  dateRange: '1 Oct 2025 – 31 Dec 2025',
  generatedAt: '15 Jan 2026',
  totalPieces: 47,
  verdicts: {
    pass: 18,
    fail: 8,
    coincidence: 14,
    uncertain: 7,
  },
  alignmentScore: 72,
  confidence: 87,
  dataQuality: 94,
};

const mockFindings = [
  {
    type: 'insight',
    title: 'Thread format consistently outperforms single posts',
    description: 'Threads with 4-6 parts showed 3.2x higher engagement aligned with declared audience goals.',
  },
  {
    type: 'warning',
    title: '43% of high-engagement posts succeeded by coincidence',
    description: 'Algorithm timing and external events drove performance, not strategic content choices.',
  },
  {
    type: 'recommendation',
    title: 'Recalibrate "thought leadership" intent declaration',
    description: 'Current definition too broad—14 posts flagged as uncertain due to ambiguous success criteria.',
  },
];

const mockEvidence = [
  {
    id: 'E001',
    title: 'Q4 Product Launch Thread',
    date: '12 Oct 2025',
    verdict: 'pass',
    confidence: 94,
    summary: 'High engagement from target ICP segment. Content structure matched declared intent. Timing aligned with audience activity patterns.',
    reasoning: [
      'Intent declared: Drive awareness among Series A founders about integration capabilities',
      'Evidence: 78% of engagers matched ICP criteria (founders, 10-50 employees, B2B SaaS)',
      'Engagement pattern: Peak activity within first 2 hours during declared optimal window',
      'Content alignment: All 5 thread parts addressed declared pain points',
    ],
    metrics: {
      impressions: 45200,
      engagements: 1847,
      engagementRate: '4.1%',
      icpMatch: '78%',
    },
  },
  {
    id: 'E002',
    title: 'Industry Commentary Post',
    date: '3 Nov 2025',
    verdict: 'coincidence',
    confidence: 89,
    summary: 'Viral performance driven by algorithm timing coinciding with major industry news. Success unrelated to declared strategic intent.',
    reasoning: [
      'Intent declared: Position brand as thought leader on AI governance',
      'Evidence: Post went viral 4 hours after major AI regulation announcement',
      'Engagement analysis: 85% of shares came from news-driven discovery, not existing audience',
      'Conclusion: Performance correlated with external event, not content strategy',
    ],
    metrics: {
      impressions: 127800,
      engagements: 8432,
      engagementRate: '6.6%',
      icpMatch: '23%',
    },
  },
  {
    id: 'E003',
    title: 'Customer Success Story',
    date: '18 Nov 2025',
    verdict: 'pass',
    confidence: 91,
    summary: 'Strong ICP engagement with clear conversion intent signals. Content aligned with declared customer acquisition goals.',
    reasoning: [
      'Intent declared: Generate qualified inbound interest from enterprise prospects',
      'Evidence: 12 demo requests traced directly to post engagement',
      'Audience composition: 67% enterprise titles (VP+), 89% in target verticals',
      'Conversion signals: High save rate (3.2x average), multiple profile visits',
    ],
    metrics: {
      impressions: 23400,
      engagements: 892,
      engagementRate: '3.8%',
      icpMatch: '67%',
    },
  },
  {
    id: 'E004',
    title: 'Founder Personal Story',
    date: '28 Nov 2025',
    verdict: 'uncertain',
    confidence: 54,
    summary: 'Insufficient data to determine if engagement aligned with brand-building intent. Engagement metrics positive but attribution unclear.',
    reasoning: [
      'Intent declared: Build personal brand awareness for founder',
      'Evidence: High engagement but audience composition data incomplete',
      'Gap: Cannot determine if engagers are potential customers vs. general audience',
      'Recommendation: Enhance tracking for personal brand content or clarify intent metrics',
    ],
    metrics: {
      impressions: 34100,
      engagements: 2103,
      engagementRate: '6.2%',
      icpMatch: 'Insufficient data',
    },
  },
  {
    id: 'E005',
    title: 'Technical Deep-Dive Post',
    date: '5 Dec 2025',
    verdict: 'fail',
    confidence: 92,
    summary: 'Low engagement from target technical audience. Content complexity mismatched with platform expectations.',
    reasoning: [
      'Intent declared: Engage senior engineers evaluating technical solutions',
      'Evidence: Only 8% of engagers held technical roles',
      'Content analysis: 2,400 word post exceeded platform norms by 4x',
      'Timing: Posted during low-activity period for technical audience',
    ],
    metrics: {
      impressions: 8700,
      engagements: 124,
      engagementRate: '1.4%',
      icpMatch: '8%',
    },
  },
  {
    id: 'E006',
    title: 'Year-End Reflection Post',
    date: '20 Dec 2025',
    verdict: 'coincidence',
    confidence: 86,
    summary: 'High engagement driven by seasonal content trends rather than strategic positioning. Performance not repeatable.',
    reasoning: [
      'Intent declared: Reinforce brand values and company culture',
      'Evidence: Engagement spike coincided with platform-wide year-end content trend',
      'Pattern analysis: 73% of similar reflection posts performed above baseline in same period',
      'Conclusion: Seasonal timing, not content strategy, drove performance',
    ],
    metrics: {
      impressions: 56200,
      engagements: 3247,
      engagementRate: '5.8%',
      icpMatch: '31%',
    },
  },
  {
    id: 'E007',
    title: 'Partnership Announcement',
    date: '8 Dec 2025',
    verdict: 'pass',
    confidence: 88,
    summary: 'Strategic partnership content resonated with target enterprise segment. Clear alignment between declared intent and outcome.',
    reasoning: [
      'Intent declared: Signal enterprise credibility to Fortune 500 prospects',
      'Evidence: Significant engagement from enterprise decision-makers',
      'Partner amplification: Joint promotion reached new qualified audiences',
      'Conversion: 8 enterprise inquiries within 48 hours of post',
    ],
    metrics: {
      impressions: 67300,
      engagements: 2891,
      engagementRate: '4.3%',
      icpMatch: '58%',
    },
  },
  {
    id: 'E008',
    title: 'Holiday Greeting Post',
    date: '23 Dec 2025',
    verdict: 'fail',
    confidence: 95,
    summary: 'Generic holiday content generated minimal meaningful engagement. No strategic value demonstrated.',
    reasoning: [
      'Intent declared: Maintain brand presence during holiday period',
      'Evidence: Engagement below baseline despite seasonal activity',
      'Quality analysis: Generic message indistinguishable from competitor content',
      'Recommendation: Either skip holiday posts or create distinctive angle',
    ],
    metrics: {
      impressions: 12400,
      engagements: 187,
      engagementRate: '1.5%',
      icpMatch: '12%',
    },
  },
];

const mockPatterns = [
  {
    id: 'P001',
    name: 'Thread Format Advantage',
    category: 'Content Structure',
    strength: 'strong',
    occurrences: 8,
    description: 'Multi-part threads (4-6 posts) consistently outperform single posts for declared awareness goals.',
    recommendation: 'Increase thread frequency from 2x to 4x monthly for key announcements.',
  },
  {
    id: 'P002',
    name: 'Tuesday Morning Timing',
    category: 'Posting Cadence',
    strength: 'moderate',
    occurrences: 12,
    description: 'Posts published Tuesday 9-11am GMT show 2.1x higher ICP engagement than other times.',
    recommendation: 'Shift 60% of content to Tuesday morning slots.',
  },
  {
    id: 'P003',
    name: 'Customer Story Impact',
    category: 'Content Type',
    strength: 'strong',
    occurrences: 6,
    description: 'Customer success stories with specific metrics generate 3.4x more qualified leads.',
    recommendation: 'Develop customer story content pipeline. Target 2 stories per month.',
  },
  {
    id: 'P004',
    name: 'Technical Content Mismatch',
    category: 'Audience Alignment',
    strength: 'weak',
    occurrences: 4,
    description: 'Deep technical content underperforms on LinkedIn. Platform mismatch identified.',
    recommendation: 'Move technical deep-dives to blog/newsletter. Use LinkedIn for summaries with links.',
  },
  {
    id: 'P005',
    name: 'Viral Content Warning',
    category: 'Performance Attribution',
    strength: 'moderate',
    occurrences: 7,
    description: 'Posts exceeding 3x normal engagement require scrutiny for coincidental factors.',
    recommendation: 'Flag viral content for manual review before incorporating into strategy.',
  },
  {
    id: 'P006',
    name: 'Partnership Amplification',
    category: 'Distribution',
    strength: 'strong',
    occurrences: 4,
    description: 'Joint announcements with partners reach 2.8x more qualified enterprise accounts.',
    recommendation: 'Prioritize partnership content. Coordinate posting schedules with partners.',
  },
  {
    id: 'P007',
    name: 'Personal vs Brand Content',
    category: 'Voice Attribution',
    strength: 'moderate',
    occurrences: 9,
    description: 'Founder personal posts outperform brand page by 1.7x but attribution is unclear.',
    recommendation: 'Improve tracking for personal content. Consider dedicated intent declarations.',
  },
  {
    id: 'P008',
    name: 'Holiday Content Underperformance',
    category: 'Seasonal Timing',
    strength: 'weak',
    occurrences: 3,
    description: 'Generic seasonal content consistently fails to meet strategic objectives.',
    recommendation: 'Skip generic holiday posts. If posting, create distinctive narrative angle.',
  },
];

const mockRecalibrationQueue = [
  {
    id: 'R001',
    contentTitle: 'Industry Commentary Post',
    originalVerdict: 'coincidence',
    reason: 'External event correlation detected',
    action: 'Exclude from strategy reinforcement or recalibrate intent to "news-jacking"',
    priority: 'high',
  },
  {
    id: 'R002',
    contentTitle: 'Year-End Reflection Post',
    originalVerdict: 'coincidence',
    reason: 'Seasonal trend correlation detected',
    action: 'Exclude from strategy or acknowledge seasonal component in intent',
    priority: 'medium',
  },
  {
    id: 'R003',
    contentTitle: 'Founder Personal Story',
    originalVerdict: 'uncertain',
    reason: 'Insufficient attribution data',
    action: 'Enhance tracking or clarify personal brand intent metrics',
    priority: 'low',
  },
];

const mockAuditLog = [
  { timestamp: '15 Jan 2026 09:14:22', action: 'Profile generation initiated', actor: 'System' },
  { timestamp: '15 Jan 2026 09:14:25', action: 'Intent declaration loaded (v3.2)', actor: 'System' },
  { timestamp: '15 Jan 2026 09:14:31', action: 'Data import completed (47 content pieces)', actor: 'System' },
  { timestamp: '15 Jan 2026 09:15:47', action: 'Signals Lens analysis complete', actor: 'System' },
  { timestamp: '15 Jan 2026 09:18:23', action: 'Strategy Lens analysis complete', actor: 'System' },
  { timestamp: '15 Jan 2026 09:19:01', action: 'Verdict generation complete', actor: 'System' },
  { timestamp: '15 Jan 2026 09:19:34', action: 'Pattern detection complete (8 patterns)', actor: 'System' },
  { timestamp: '15 Jan 2026 09:19:45', action: 'Recalibration queue generated (3 items)', actor: 'System' },
  { timestamp: '15 Jan 2026 09:20:01', action: 'Profile finalized and exported', actor: 'System' },
];

// Verdict color utilities
const verdictColors = {
  pass: {
    bg: 'bg-success-500',
    bgLight: 'bg-success-500/10',
    text: 'text-success-500',
    border: 'border-success-500',
  },
  fail: {
    bg: 'bg-error-500',
    bgLight: 'bg-error-500/10',
    text: 'text-error-500',
    border: 'border-error-500',
  },
  coincidence: {
    bg: 'bg-warning-500',
    bgLight: 'bg-warning-500/10',
    text: 'text-warning-500',
    border: 'border-warning-500',
  },
  uncertain: {
    bg: 'bg-neutral-400',
    bgLight: 'bg-neutral-400/10',
    text: 'text-neutral-400',
    border: 'border-neutral-400',
  },
};

const strengthColors = {
  strong: 'bg-success-500/10 text-success-600 border-success-500/20',
  moderate: 'bg-warning-500/10 text-warning-600 border-warning-500/20',
  weak: 'bg-error-500/10 text-error-600 border-error-500/20',
};

export default function OutputsPortfolioPage() {
  const [activeTab, setActiveTab] = useState<'evidence' | 'patterns' | 'analytics'>('evidence');
  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null);
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null);

  const totalVerdicts = Object.values(mockProfile.verdicts).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Top Bar - Sticky */}
      <div className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
        <Container size="xl">
          <div className="flex items-center justify-between py-4">
            {/* Left: Client Identity */}
            <div className="flex items-center gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-body-sm text-neutral-500">Client</span>
                  <span className="font-medium text-neutral-900">{mockProfile.client}</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-body-sm text-neutral-500">Workspace</span>
                  <span className="text-body-sm text-neutral-700">{mockProfile.workspace}</span>
                </div>
              </div>
              <div className="h-10 w-px bg-neutral-200" />
              <div>
                <span className="text-body-sm text-neutral-500">Analysis Period</span>
                <p className="text-body-sm font-medium text-neutral-900">{mockProfile.dateRange}</p>
              </div>
            </div>

            {/* Right: Export Controls */}
            <div className="flex items-center gap-3">
              <span className="text-body-sm text-neutral-500">
                Generated {mockProfile.generatedAt}
              </span>
              <button className="px-4 py-2 text-body-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors">
                Export PDF
              </button>
              <button className="px-4 py-2 text-body-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors">
                Export CSV
              </button>
            </div>
          </div>
        </Container>
      </div>

      <Container size="xl" className="py-8">
        <div className="grid lg:grid-cols-[1fr,320px] gap-8">
          {/* Main Content Area */}
          <div className="space-y-8">
            {/* Executive Summary */}
            <section className="bg-white rounded-xl border border-neutral-200 p-6">
              <h2 className="font-display text-heading-lg text-neutral-900 mb-6">
                Executive Summary
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Verdict Breakdown */}
                <div>
                  <h3 className="text-body-sm text-neutral-500 uppercase tracking-wider mb-3">
                    Verdict Breakdown
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(mockProfile.verdicts).map(([verdict, count]) => (
                      <div key={verdict} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className={clsx(
                              'w-3 h-3 rounded-full',
                              verdictColors[verdict as keyof typeof verdictColors].bg
                            )}
                          />
                          <span className="text-body-sm text-neutral-700 capitalize">{verdict}</span>
                        </div>
                        <span className="text-body-sm font-medium text-neutral-900">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verdict Distribution Bar */}
                <div>
                  <h3 className="text-body-sm text-neutral-500 uppercase tracking-wider mb-3">
                    Distribution
                  </h3>
                  <div className="h-4 rounded-full overflow-hidden flex bg-neutral-100">
                    {Object.entries(mockProfile.verdicts).map(([verdict, count]) => (
                      <div
                        key={verdict}
                        className={clsx(
                          verdictColors[verdict as keyof typeof verdictColors].bg
                        )}
                        style={{ width: `${(count / totalVerdicts) * 100}%` }}
                      />
                    ))}
                  </div>
                  <p className="text-caption text-neutral-500 mt-2">
                    {totalVerdicts} content pieces analysed
                  </p>
                </div>

                {/* Alignment Score */}
                <div>
                  <h3 className="text-body-sm text-neutral-500 uppercase tracking-wider mb-3">
                    Alignment Score
                  </h3>
                  <div className="flex items-end gap-2">
                    <span className="text-display-md font-display text-neutral-900">
                      {mockProfile.alignmentScore}
                    </span>
                    <span className="text-body-sm text-neutral-500 mb-1">/100</span>
                  </div>
                  <p className="text-caption text-neutral-500 mt-1">
                    Strategy-to-outcome fit
                  </p>
                </div>

                {/* Confidence Score */}
                <div>
                  <h3 className="text-body-sm text-neutral-500 uppercase tracking-wider mb-3">
                    Analysis Confidence
                  </h3>
                  <div className="flex items-end gap-2">
                    <span className="text-display-md font-display text-neutral-900">
                      {mockProfile.confidence}%
                    </span>
                  </div>
                  <p className="text-caption text-neutral-500 mt-1">
                    Based on data completeness
                  </p>
                </div>
              </div>

              {/* Key Findings */}
              <div>
                <h3 className="text-body-sm text-neutral-500 uppercase tracking-wider mb-3">
                  Key Findings
                </h3>
                <div className="space-y-3">
                  {mockFindings.map((finding, index) => (
                    <div
                      key={index}
                      className={clsx(
                        'p-4 rounded-lg border-l-4',
                        finding.type === 'insight' && 'bg-success-500/5 border-success-500',
                        finding.type === 'warning' && 'bg-warning-500/5 border-warning-500',
                        finding.type === 'recommendation' && 'bg-brand-100 border-brand-500'
                      )}
                    >
                      <h4 className="font-medium text-neutral-900 mb-1">{finding.title}</h4>
                      <p className="text-body-sm text-neutral-600">{finding.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tab Navigation */}
            <div className="flex gap-1 bg-neutral-100 p-1 rounded-lg w-fit">
              {[
                { id: 'evidence', label: 'Evidence View' },
                { id: 'patterns', label: 'Patterns' },
                { id: 'analytics', label: 'Analytics' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={clsx(
                    'px-4 py-2 text-body-sm font-medium rounded-md transition-colors',
                    activeTab === tab.id
                      ? 'bg-white text-neutral-900 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Evidence View */}
            {activeTab === 'evidence' && (
              <section className="space-y-4">
                {mockEvidence.map((evidence) => (
                  <div
                    key={evidence.id}
                    className={clsx(
                      'bg-white rounded-xl border transition-all cursor-pointer',
                      selectedEvidence === evidence.id
                        ? 'border-brand-500 shadow-md'
                        : 'border-neutral-200 hover:border-neutral-300'
                    )}
                    onClick={() =>
                      setSelectedEvidence(selectedEvidence === evidence.id ? null : evidence.id)
                    }
                  >
                    {/* Card Header */}
                    <div className="p-5 flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        {/* Verdict Badge */}
                        <div
                          className={clsx(
                            'px-3 py-1 rounded-full text-body-sm font-medium capitalize',
                            verdictColors[evidence.verdict as keyof typeof verdictColors].bgLight,
                            verdictColors[evidence.verdict as keyof typeof verdictColors].text
                          )}
                        >
                          {evidence.verdict}
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-900">{evidence.title}</h3>
                          <p className="text-body-sm text-neutral-500 mt-0.5">
                            {evidence.date} · ID: {evidence.id}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-body-sm text-neutral-500">Confidence</div>
                        <div className="font-medium text-neutral-900">{evidence.confidence}%</div>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="px-5 pb-5">
                      <p className="text-body-sm text-neutral-600">{evidence.summary}</p>
                    </div>

                    {/* Expanded Reasoning Trace */}
                    {selectedEvidence === evidence.id && (
                      <div className="border-t border-neutral-100 bg-neutral-50 p-5 space-y-4">
                        {/* Reasoning Steps */}
                        <div>
                          <h4 className="text-body-sm font-medium text-neutral-700 uppercase tracking-wider mb-3">
                            Reasoning Trace
                          </h4>
                          <ol className="space-y-2">
                            {evidence.reasoning.map((step, index) => (
                              <li key={index} className="flex gap-3 text-body-sm">
                                <span className="flex-shrink-0 w-5 h-5 bg-neutral-200 text-neutral-600 rounded-full flex items-center justify-center text-caption font-medium">
                                  {index + 1}
                                </span>
                                <span className="text-neutral-600">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Metrics */}
                        <div>
                          <h4 className="text-body-sm font-medium text-neutral-700 uppercase tracking-wider mb-3">
                            Performance Metrics
                          </h4>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {Object.entries(evidence.metrics).map(([key, value]) => (
                              <div key={key}>
                                <div className="text-caption text-neutral-500 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                                <div className="font-medium text-neutral-900">
                                  {typeof value === 'number' ? value.toLocaleString() : value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </section>
            )}

            {/* Patterns View */}
            {activeTab === 'patterns' && (
              <section className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {mockPatterns.map((pattern) => (
                    <div
                      key={pattern.id}
                      className={clsx(
                        'bg-white rounded-xl border transition-all cursor-pointer',
                        selectedPattern === pattern.id
                          ? 'border-brand-500 shadow-md'
                          : 'border-neutral-200 hover:border-neutral-300'
                      )}
                      onClick={() =>
                        setSelectedPattern(selectedPattern === pattern.id ? null : pattern.id)
                      }
                    >
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div
                            className={clsx(
                              'px-2 py-0.5 rounded text-caption font-medium border',
                              strengthColors[pattern.strength as keyof typeof strengthColors]
                            )}
                          >
                            {pattern.strength}
                          </div>
                          <span className="text-caption text-neutral-500">
                            {pattern.occurrences} occurrences
                          </span>
                        </div>
                        <h3 className="font-medium text-neutral-900 mb-1">{pattern.name}</h3>
                        <p className="text-caption text-neutral-500">{pattern.category}</p>
                        <p className="text-body-sm text-neutral-600 mt-3">{pattern.description}</p>

                        {selectedPattern === pattern.id && (
                          <div className="mt-4 pt-4 border-t border-neutral-100">
                            <h4 className="text-caption font-medium text-neutral-700 uppercase tracking-wider mb-2">
                              Recommendation
                            </h4>
                            <p className="text-body-sm text-brand-600">{pattern.recommendation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Analytics View */}
            {activeTab === 'analytics' && (
              <section className="space-y-6">
                {/* Verdict Distribution Chart */}
                <div className="bg-white rounded-xl border border-neutral-200 p-6">
                  <h3 className="font-medium text-neutral-900 mb-4">Verdict Distribution</h3>
                  <div className="h-48 flex items-end justify-around gap-4 px-8">
                    {Object.entries(mockProfile.verdicts).map(([verdict, count]) => (
                      <div key={verdict} className="flex flex-col items-center gap-2">
                        <div
                          className={clsx(
                            'w-16 rounded-t transition-all',
                            verdictColors[verdict as keyof typeof verdictColors].bg
                          )}
                          style={{ height: `${(count / Math.max(...Object.values(mockProfile.verdicts))) * 140}px` }}
                        />
                        <span className="text-body-sm font-medium text-neutral-900">{count}</span>
                        <span className="text-caption text-neutral-500 capitalize">{verdict}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alignment Trend (Placeholder) */}
                <div className="bg-white rounded-xl border border-neutral-200 p-6">
                  <h3 className="font-medium text-neutral-900 mb-4">Alignment Score Trend</h3>
                  <div className="h-48 flex items-center justify-center bg-neutral-50 rounded-lg">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <p className="text-body-sm text-neutral-500">
                        Trend data available after 3+ profiles
                      </p>
                    </div>
                  </div>
                </div>

                {/* ICP Match Scatter (Placeholder) */}
                <div className="bg-white rounded-xl border border-neutral-200 p-6">
                  <h3 className="font-medium text-neutral-900 mb-4">Engagement vs ICP Match</h3>
                  <div className="h-48 flex items-center justify-center bg-neutral-50 rounded-lg">
                    <p className="text-body-sm text-neutral-500">
                      Scatter plot showing engagement rate vs ICP match percentage
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Recalibration Queue */}
            <section className="bg-white rounded-xl border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-heading-lg text-neutral-900">
                  Recalibration Queue
                </h2>
                <span className="px-2 py-1 bg-warning-500/10 text-warning-600 text-caption font-medium rounded">
                  {mockRecalibrationQueue.length} items
                </span>
              </div>
              <p className="text-body-sm text-neutral-600 mb-6">
                These items have been blocked from reinforcing your strategy. Review and take action to resolve.
              </p>

              <div className="space-y-3">
                {mockRecalibrationQueue.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-neutral-50 rounded-lg border border-neutral-100"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-neutral-900">{item.contentTitle}</h4>
                        <p className="text-caption text-neutral-500">
                          Original verdict: {item.originalVerdict}
                        </p>
                      </div>
                      <span
                        className={clsx(
                          'px-2 py-0.5 rounded text-caption font-medium',
                          item.priority === 'high' && 'bg-error-500/10 text-error-600',
                          item.priority === 'medium' && 'bg-warning-500/10 text-warning-600',
                          item.priority === 'low' && 'bg-neutral-200 text-neutral-600'
                        )}
                      >
                        {item.priority} priority
                      </span>
                    </div>
                    <p className="text-body-sm text-neutral-600 mb-2">
                      <strong>Reason:</strong> {item.reason}
                    </p>
                    <p className="text-body-sm text-brand-600">
                      <strong>Action:</strong> {item.action}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Appendix */}
            <section className="bg-white rounded-xl border border-neutral-200 p-6">
              <h2 className="font-display text-heading-lg text-neutral-900 mb-6">
                Appendix
              </h2>

              {/* Definitions */}
              <div className="mb-8">
                <h3 className="text-body-sm text-neutral-500 uppercase tracking-wider mb-4">
                  Verdict Definitions
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-success-500/5 rounded-lg border border-success-500/20">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-success-500" />
                      <span className="font-medium text-neutral-900">Pass</span>
                    </div>
                    <p className="text-body-sm text-neutral-600">
                      Content succeeded because of declared strategy. Safe to reinforce.
                    </p>
                  </div>
                  <div className="p-3 bg-error-500/5 rounded-lg border border-error-500/20">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-error-500" />
                      <span className="font-medium text-neutral-900">Fail</span>
                    </div>
                    <p className="text-body-sm text-neutral-600">
                      Content did not meet declared objectives. Clear signal to adjust.
                    </p>
                  </div>
                  <div className="p-3 bg-warning-500/5 rounded-lg border border-warning-500/20">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-warning-500" />
                      <span className="font-medium text-neutral-900">Coincidence</span>
                    </div>
                    <p className="text-body-sm text-neutral-600">
                      Performance likely driven by external factors. Blocked from reinforcing strategy.
                    </p>
                  </div>
                  <div className="p-3 bg-neutral-100 rounded-lg border border-neutral-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-neutral-400" />
                      <span className="font-medium text-neutral-900">Uncertain</span>
                    </div>
                    <p className="text-body-sm text-neutral-600">
                      Insufficient data to determine attribution. Requires enhanced tracking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Sources */}
              <div className="mb-8">
                <h3 className="text-body-sm text-neutral-500 uppercase tracking-wider mb-4">
                  Data Sources
                </h3>
                <ul className="text-body-sm text-neutral-600 space-y-1">
                  <li>• LinkedIn Analytics Export (CSV) – 47 posts</li>
                  <li>• Intent Declaration v3.2 – Last updated 28 Dec 2025</li>
                  <li>• ICP Definition Matrix – Enterprise B2B SaaS focus</li>
                </ul>
              </div>

              {/* Audit Log */}
              <div>
                <h3 className="text-body-sm text-neutral-500 uppercase tracking-wider mb-4">
                  Processing Audit Log
                </h3>
                <div className="bg-neutral-50 rounded-lg p-4 font-mono text-caption overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      {mockAuditLog.map((entry, index) => (
                        <tr key={index} className="border-b border-neutral-100 last:border-0">
                          <td className="py-1 pr-4 text-neutral-400 whitespace-nowrap">
                            {entry.timestamp}
                          </td>
                          <td className="py-1 pr-4 text-neutral-600">{entry.action}</td>
                          <td className="py-1 text-neutral-500">{entry.actor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Trust Rail - Right Column */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* Confidence Module */}
            <div className="bg-white rounded-xl border border-neutral-200 p-5">
              <h3 className="text-body-sm text-neutral-500 uppercase tracking-wider mb-4">
                Analysis Confidence
              </h3>
              <div className="relative h-3 bg-neutral-100 rounded-full overflow-hidden mb-2">
                <div
                  className="absolute inset-y-0 left-0 bg-brand-500 rounded-full"
                  style={{ width: `${mockProfile.confidence}%` }}
                />
              </div>
              <div className="flex justify-between text-caption">
                <span className="text-neutral-500">Overall</span>
                <span className="font-medium text-neutral-900">{mockProfile.confidence}%</span>
              </div>
            </div>

            {/* Data Quality Module */}
            <div className="bg-white rounded-xl border border-neutral-200 p-5">
              <h3 className="text-body-sm text-neutral-500 uppercase tracking-wider mb-4">
                Data Quality Score
              </h3>
              <div className="relative h-3 bg-neutral-100 rounded-full overflow-hidden mb-2">
                <div
                  className="absolute inset-y-0 left-0 bg-success-500 rounded-full"
                  style={{ width: `${mockProfile.dataQuality}%` }}
                />
              </div>
              <div className="flex justify-between text-caption">
                <span className="text-neutral-500">Completeness</span>
                <span className="font-medium text-neutral-900">{mockProfile.dataQuality}%</span>
              </div>
              <p className="text-caption text-neutral-500 mt-3">
                Based on field coverage, data recency, and attribution availability.
              </p>
            </div>

            {/* Model Information */}
            <div className="bg-white rounded-xl border border-neutral-200 p-5">
              <h3 className="text-body-sm text-neutral-500 uppercase tracking-wider mb-4">
                Analysis Model
              </h3>
              <div className="space-y-3 text-body-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Signals Lens</span>
                  <span className="text-neutral-900">v2.4.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Strategy Lens</span>
                  <span className="text-neutral-900">v2.4.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Pattern Engine</span>
                  <span className="text-neutral-900">v1.8.0</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-neutral-200 p-5">
              <h3 className="text-body-sm text-neutral-500 uppercase tracking-wider mb-4">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 text-body-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors text-left">
                  Update Intent Declaration
                </button>
                <button className="w-full px-4 py-2 text-body-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors text-left">
                  Upload New Data
                </button>
                <button className="w-full px-4 py-2 text-body-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors text-left">
                  Schedule Next Profile
                </button>
              </div>
            </div>

            {/* Support */}
            <div className="bg-neutral-900 rounded-xl p-5 text-white">
              <h3 className="text-body-sm text-neutral-400 uppercase tracking-wider mb-3">
                Need Help?
              </h3>
              <p className="text-body-sm text-neutral-300 mb-4">
                Questions about your analysis? Our team is here to help interpret results.
              </p>
              <a
                href="/contact?reason=support"
                className="inline-block px-4 py-2 text-body-sm font-medium bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
