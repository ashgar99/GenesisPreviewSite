import {
  HeroPrimary,
  TrustStrip,
  ProblemSection,
  SolutionOverview,
  HowItWorks,
  FeatureGrid,
  OutcomesMetrics,
  WhoItsFor,
  MethodologySection,
  CaseStudyTeaser,
  SecurityTrust,
  ResourcesTeaser,
  FAQ,
  FinalCTA,
} from '@/components/sections';

// Content data for the home page
const heroContent = {
  badge: 'Decision Intelligence',
  headline: 'Decision intelligence for marketing',
  subheadline:
    'Genesis analyses your content against declared goals and blocks coincidental wins from reinforcing strategy. Only verified learnings compound.',
  trustSignal: 'For marketing teams who need to prove strategy, not just activity.',
  videoSrc: '/videos/landing-hero-bg.mp4',
};

const problemContent = {
  headline: 'Analytics tell you what happened. They do not tell you why.',
  paragraphs: [
    'You have seen a post perform well. The engagement is there. The comments look good. But was it the hook that worked? The timing? The topic? Or was it something else entirely—something you could not repeat if you tried?',
    'Most analytics show you numbers without context. They tell you a post got 50,000 impressions but not whether those impressions came from the strategy you intended or from an algorithm quirk you will never understand.',
    'Teams end up doubling down on tactics that worked once by accident, while ignoring approaches that failed for fixable reasons. Lucky wins corrupt strategy. Without knowing why something worked, you cannot reliably do it again.',
  ],
};

const solutionContent = {
  headline: 'Genesis blocks luck from reinforcing your strategy',
  paragraphs: [
    'Genesis is a decision intelligence product for content marketing. It analyses your content performance against your declared goals and tells you whether your results align with your intent.',
    'When content performs well, Genesis shows you whether it performed because of your strategy—or despite it. Coincidental wins are blocked from influencing future decisions until you recalibrate.',
    'Only verified successes and clean failures reinforce your strategy. This means you build on what actually works, not what happened to work once.',
  ],
  cta: {
    text: 'Learn more about the platform',
    href: '/platform',
  },
};

const howItWorksContent = {
  headline: 'Three steps to clarity',
  steps: [
    {
      number: 1,
      title: 'Declare your intent',
      description:
        'Start by telling Genesis what you\'re trying to achieve—your strategic goals, target audience, and success criteria. This becomes the benchmark against which all results are measured.',
    },
    {
      number: 2,
      title: 'Connect your data',
      description:
        'Upload your content performance data via CSV or XLSX export. Additional data sources coming soon. No complex integrations required—setup takes minutes, not days.',
    },
    {
      number: 3,
      title: 'Receive your verdict',
      description:
        'Genesis analyses each piece of content against your declared intent and delivers a clear verdict: did it succeed because of your strategy, despite it, or by coincidence?',
    },
  ],
};

const featureGridContent = {
  label: 'The Genesis Profile',
  headline: 'A periodic verdict on your content strategy',
  subheadline:
    'The Genesis Profile is a comprehensive analysis of your content performance. It includes:',
  features: [
    {
      icon: 'check' as const,
      title: 'Verdict breakdown',
      description:
        'Every piece of content receives one of four verdicts: Pass (success by design), Fail (clear miss), Coincidence (likely circumstantial), or Uncertain (insufficient data).',
    },
    {
      icon: 'layers' as const,
      title: 'Pattern analysis',
      description:
        'Genesis identifies repeatable patterns in your content—approaches that consistently produce results aligned with your intent.',
    },
    {
      icon: 'chart' as const,
      title: 'Alignment score',
      description:
        'A single metric tracking how well your results align with your stated goals. Monitor trends to measure strategy improvement.',
    },
    {
      icon: 'file' as const,
      title: 'Reasoning traces',
      description:
        'For each verdict, Genesis provides full reasoning. You\'ll see exactly why content received its classification.',
    },
  ],
};

const outcomesContent = {
  headline: 'Operational clarity, not vanity metrics',
  metrics: [
    {
      value: '4',
      label: 'Verdict categories',
      context: 'Pass, Fail, Coincidence, Uncertain',
      isPlaceholder: false,
    },
    {
      value: '100%',
      label: 'Decision traced',
      context: 'Every verdict includes reasoning',
      isPlaceholder: false,
    },
    {
      value: '1',
      label: 'Alignment score',
      context: 'Track strategy fit over time',
      isPlaceholder: false,
    },
  ],
  sourceNote: 'Profile delivery typically within 5 business days. Timeline depends on data completeness and analysis requirements.',
};

const methodologyContent = {
  headline: 'Two lenses. One verdict.',
  description: [
    'Genesis analyses your content through a dual-framework approach. One lens examines what actually happened: engagement patterns, audience response, and performance metrics across your content.',
    'The other lens examines what you intended: your declared goals, target audience, and strategic priorities as defined in your intent declaration.',
    'Where these two perspectives intersect, Genesis generates a verdict. This intersection reveals whether success came from strategy or circumstance, the critical insight that transforms how marketing teams make decisions.',
  ],
};

const caseStudiesContent = {
  headline: 'See how Genesis analysis works',
  caseStudies: [
    {
      company: 'B2B SaaS Analysis',
      industry: 'Pilot Study',
      challenge: 'High engagement but unclear connection to pipeline',
      outcome: 'Identified that 43% of "successful" posts succeeded by coincidence',
      href: '/case-studies',
      image: '/images/case-studies/b2b-saas.jpg',
      isPlaceholder: false,
    },
    {
      company: 'Agency Reporting',
      industry: 'Pilot Study',
      challenge: 'Monthly reports lacked strategic insight',
      outcome: 'Verdict-based reporting that clients could act on',
      href: '/case-studies',
      isPlaceholder: false,
    },
    {
      company: 'Founder Content',
      industry: 'Pilot Study',
      challenge: 'Limited time, no clear measurement framework',
      outcome: 'Clear verdicts on what to continue vs stop',
      href: '/case-studies',
      isPlaceholder: false,
    },
  ],
};

const securityContent = {
  headline: 'Your data stays secure',
  description:
    'Genesis is built with enterprise security in mind. Your content data is encrypted, stored in UK/EU data centres, and never shared or sold.',
  badges: [
    { icon: 'shield' as const, label: 'GDPR Compliant' },
    { icon: 'server' as const, label: 'UK/EU Data Centres' },
    { icon: 'lock' as const, label: 'Encrypted at Rest' },
    { icon: 'ban' as const, label: 'Never Sold' },
  ],
};

const resourcesContent = {
  headline: 'Latest insights',
  resources: [
    {
      title: 'Why Platform Analytics Are Not Enough',
      excerpt:
        'Understanding the gap between what happened and why it happened in your content strategy.',
      category: 'Insights',
      date: 'January 2026',
      href: '/resources',
    },
    {
      title: 'The Blocking Mechanism Explained',
      excerpt:
        'How Genesis prevents lucky wins from corrupting your strategy—and why this matters.',
      category: 'Methodology',
      date: 'January 2026',
      href: '/resources',
    },
    {
      title: 'Understanding the Four Verdicts',
      excerpt:
        'A deep dive into Pass, Fail, Coincidence, and Uncertain—and what each means for your strategy.',
      category: 'Product',
      date: 'December 2025',
      href: '/resources',
    },
  ],
};

const faqContent = {
  headline: 'Common questions, direct answers',
  items: [
    {
      question: 'How is this different from platform analytics?',
      answer:
        'Platform analytics tell you what happened—impressions, clicks, engagement rate. Genesis tells you why it happened and whether the "why" matches what you intended. Analytics show you numbers. Genesis shows you whether those numbers mean what you think they mean.',
    },
    {
      question: 'What data do I need to provide?',
      answer:
        'Export your content performance data as CSV or XLSX. Currently we support LinkedIn exports, with additional data sources coming soon. Upload that file to Genesis. No complex integrations required.',
    },
    {
      question: 'How long until I get my first profile?',
      answer:
        'After you upload your data and declare your intent, you will receive your first Genesis Profile within 5 business days. Subsequent profiles arrive on your chosen schedule.',
    },
    {
      question: 'What happens when content succeeds by luck?',
      answer:
        'Genesis marks it as Coincidence and blocks it from reinforcing your strategy. You can recalibrate the intent or exclude it entirely. This prevents lucky outcomes from corrupting your decision-making.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes. Your content data is encrypted at rest and in transit. It is stored in UK/EU data centres and is never shared with third parties or sold to anyone.',
    },
    {
      question: 'Can I cancel anytime?',
      answer:
        'Yes. Cancel with 30 days notice. After cancellation, your data is deleted within 30 days unless you request an export first. No penalties, no long-term contracts.',
    },
  ],
};

const finalCtaContent = {
  headline: 'Ready to separate strategy from luck?',
  subheadline:
    'Genesis is now accepting pilot customers. Contact us to discuss how decision intelligence can transform your content strategy.',
  formPlaceholder: 'Enter your work email',
  buttonText: 'Contact us',
  buttonHref: '/contact?reason=pilot',
  note: 'We review every enquiry and respond within 1 business day.',
};

export default function HomePage() {
  return (
    <>
      <HeroPrimary {...heroContent} />

      <TrustStrip />

      <ProblemSection {...problemContent} />

      <SolutionOverview {...solutionContent} />

      <section id="how-it-works">
        <HowItWorks {...howItWorksContent} />
      </section>

      <FeatureGrid {...featureGridContent} variant="dark" columns={2} />

      <OutcomesMetrics {...outcomesContent} />

      <WhoItsFor />

      <MethodologySection {...methodologyContent} />

      <CaseStudyTeaser {...caseStudiesContent} />

      <SecurityTrust {...securityContent} />

      <ResourcesTeaser {...resourcesContent} />

      <FAQ {...faqContent} variant="grid" />

      <FinalCTA {...finalCtaContent} variant="dark" />
    </>
  );
}
