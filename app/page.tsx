import {
  HeroPrimary,
  TrustStrip,
  ProblemSection,
  SolutionOverview,
  HowItWorks,
  FeatureGrid,
  OutcomesMetrics,
  PersonaCards,
  MethodologySection,
  CaseStudyTeaser,
  SecurityTrust,
  ResourcesTeaser,
  FAQ,
  FinalCTA,
} from '@/components/sections';

// Content data for the home page
const heroContent = {
  badge: 'Marketing Intelligence',
  headline: 'Know which posts worked—and why',
  subheadline:
    'Genesis analyses your LinkedIn content against your goals and shows you whether results came from your strategy—or from something else.',
  primaryCta: {
    text: 'Get your first profile',
    href: '/contact',
  },
  secondaryCta: {
    text: 'See how it works',
    href: '#how-it-works',
  },
};

const problemContent = {
  headline: 'LinkedIn analytics tell you what happened. They don\'t tell you why.',
  paragraphs: [
    'You\'ve seen a post perform well. The likes are there. The comments look good. But was it the hook that worked? The timing? The topic? Or was it something else entirely—something you couldn\'t repeat if you tried?',
    'Most analytics show you numbers without context. They tell you a post got 50,000 impressions but not whether those impressions came from the strategy you intended or from an algorithm quirk you\'ll never understand.',
    'Teams end up doubling down on tactics that worked once by accident, while ignoring approaches that failed for fixable reasons. Without knowing why something worked, you can\'t reliably do it again.',
  ],
};

const solutionContent = {
  headline: 'Genesis tells you if results happened for the right reasons',
  paragraphs: [
    'Genesis is a decision intelligence product for LinkedIn marketing. It analyses your content performance against your declared goals and tells you whether your results align with your intent.',
    'When a post performs well, Genesis shows you whether it performed because of your strategy—or despite it. When a post underperforms, Genesis shows you whether the approach was flawed or just unlucky.',
    'This means you can build on what actually works, not what happened to work once. Your strategy improves based on evidence, not guesswork.',
  ],
  cta: {
    text: 'Learn more about the platform',
    href: '/platform',
  },
};

const howItWorksContent = {
  headline: 'Three steps to understanding what\'s working',
  steps: [
    {
      number: 1,
      title: 'Declare your intent',
      description:
        'Before any analysis happens, you tell Genesis what you\'re trying to achieve. What\'s the goal of your LinkedIn presence? Who are you trying to reach? This isn\'t optional—it\'s foundational.',
    },
    {
      number: 2,
      title: 'Upload your data',
      description:
        'Export your LinkedIn data (CSV or XLSX) and upload it to Genesis. No complex integrations. No API connections to manage. Just your data, which takes about two minutes to prepare.',
    },
    {
      number: 3,
      title: 'Receive your profile',
      description:
        'Genesis analyses your content against your declared intent and delivers a Genesis Profile—a clear breakdown of which posts succeeded for the right reasons.',
    },
  ],
};

const featureGridContent = {
  label: 'The Genesis Profile',
  headline: 'A monthly verdict on your LinkedIn strategy',
  subheadline:
    'The Genesis Profile is a comprehensive analysis delivered every month. It includes:',
  features: [
    {
      icon: 'check' as const,
      title: 'Verdict breakdown',
      description:
        'Every post receives one of four verdicts: Pass (success by design), Fail (clean miss), Coincidence (success by accident), or Uncertain (insufficient data).',
    },
    {
      icon: 'layers' as const,
      title: 'Pattern analysis',
      description:
        'Genesis identifies repeatable patterns in your content—approaches that consistently produce results for the right reasons.',
    },
    {
      icon: 'chart' as const,
      title: 'Alignment score',
      description:
        'A single metric that shows how well your results align with your stated intent. Track this over time to see if your strategy is improving.',
    },
    {
      icon: 'file' as const,
      title: 'Reasoning traces',
      description:
        'For each verdict, Genesis provides its reasoning. You\'ll see exactly why a post received its classification.',
    },
  ],
};

const outcomesContent = {
  headline: 'Results that matter',
  metrics: [
    {
      value: '67%',
      label: 'Average pattern confidence',
      context: 'After 3 months of analysis',
      isPlaceholder: true,
    },
    {
      value: '3×',
      label: 'ROI improvement',
      context: 'For teams using Genesis insights',
      isPlaceholder: true,
    },
    {
      value: '<5min',
      label: 'Setup time',
      context: 'From signup to first upload',
      isPlaceholder: false,
    },
  ],
};

const personasContent = {
  headline: 'Built for people who need to justify their approach',
  personas: [
    {
      icon: 'user' as const,
      title: 'Heads of marketing at growing companies',
      description:
        'You\'re accountable for results, but you\'re tired of presenting metrics without knowing if they mean anything. Genesis gives you evidence to back up your strategy.',
      href: '/solutions/marketing-leaders',
    },
    {
      icon: 'briefcase' as const,
      title: 'Founders doing their own content',
      description:
        'You don\'t have time to guess what works. You need to know which of your approaches is worth continuing and which is wasting your limited time.',
      href: '/solutions/founders',
    },
    {
      icon: 'users' as const,
      title: 'Agency owners managing multiple clients',
      description:
        'You need to show clients that your work is producing results for the right reasons—not just producing numbers.',
      href: '/solutions/agencies',
    },
  ],
};

const methodologyContent = {
  headline: 'Two models. One verdict.',
  description: [
    'Genesis uses a dual-model approach to analyse your content. The Result Intelligence Model (RIM) examines what happened—engagement patterns, audience response, performance metrics.',
    'The Intent Execution Model (IEM) examines what you intended—your declared goals, target audience, and strategic priorities.',
    'Where these two models intersect, Genesis generates a verdict: did this content succeed because of your strategy, despite it, or by coincidence? This is the insight that other analytics tools simply cannot provide.',
  ],
};

const caseStudiesContent = {
  headline: 'See how teams use Genesis',
  caseStudies: [
    {
      company: 'Acme Marketing Co.',
      industry: 'Marketing Agency',
      challenge: 'Struggled to prove ROI to clients beyond vanity metrics',
      outcome: '67% increase in client retention through evidence-based reporting',
      href: '/case-studies/acme-marketing',
      isPlaceholder: true,
    },
    {
      company: 'TechStart Inc.',
      industry: 'B2B SaaS',
      challenge: 'Founder posting without clear strategy measurement',
      outcome: '3× improvement in content-attributed leads',
      href: '/case-studies/techstart',
      isPlaceholder: true,
    },
    {
      company: 'Growth Partners',
      industry: 'Consultancy',
      challenge: 'Needed to justify marketing spend to board',
      outcome: 'Clear evidence of strategy alignment for board reporting',
      href: '/case-studies/growth-partners',
      isPlaceholder: true,
    },
  ],
};

const securityContent = {
  headline: 'Your data stays secure',
  description:
    'Genesis is built with enterprise security in mind. Your LinkedIn data is encrypted, stored in UK/EU data centres, and never shared or sold.',
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
      title: 'Why LinkedIn Analytics Aren\'t Enough',
      excerpt:
        'Understanding the gap between what happened and why it happened in your content strategy.',
      category: 'Insights',
      date: 'January 2026',
      href: '/resources/blog/linkedin-analytics-gap',
    },
    {
      title: 'The Intent-First Approach to Content',
      excerpt:
        'How declaring your goals before analysis transforms the way you measure success.',
      category: 'Methodology',
      date: 'January 2026',
      href: '/resources/blog/intent-first-approach',
    },
    {
      title: 'Understanding the Four Verdicts',
      excerpt:
        'A deep dive into Pass, Fail, Coincidence, and Uncertain—and what each means for your strategy.',
      category: 'Product',
      date: 'December 2025',
      href: '/resources/blog/four-verdicts',
    },
  ],
};

const faqContent = {
  headline: 'Common questions, direct answers',
  items: [
    {
      question: 'How is this different from LinkedIn Analytics?',
      answer:
        'LinkedIn Analytics tells you what happened—impressions, clicks, engagement rate. Genesis tells you why it happened and whether the "why" matches what you intended. LinkedIn shows you numbers. Genesis shows you whether those numbers mean what you think they mean.',
    },
    {
      question: 'What data do I need to provide?',
      answer:
        'You\'ll export your LinkedIn data using LinkedIn\'s built-in export feature. This gives you a CSV or XLSX file containing your posts, their content, and their performance metrics. Upload that file to Genesis. No API integration required.',
    },
    {
      question: 'How long until I get my first profile?',
      answer:
        'After you upload your data and declare your intent, you\'ll receive your first Genesis Profile within 5 business days. Subsequent profiles arrive on your chosen schedule.',
    },
    {
      question: 'What if I don\'t have clear goals yet?',
      answer:
        'Genesis includes an intent-setting workshop as part of onboarding. We\'ll help you articulate what you\'re actually trying to achieve with your LinkedIn presence.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes. Your LinkedIn data is encrypted at rest and in transit. It\'s stored in UK/EU data centres and is never shared with third parties or sold to anyone.',
    },
    {
      question: 'Can I cancel anytime?',
      answer:
        'Yes. Cancel with 30 days notice. After cancellation, your data is deleted within 30 days unless you request an export first. No penalties, no long-term contracts.',
    },
  ],
};

const finalCtaContent = {
  headline: 'Find out what\'s actually driving your results',
  subheadline:
    'Start with your first Genesis Profile. See which of your LinkedIn posts succeeded for the right reasons—and which ones just got numbers.',
  formPlaceholder: 'Enter your email',
  buttonText: 'Get your first profile',
  note: '14-day evaluation period. No credit card required to start.',
};

export default function HomePage() {
  return (
    <>
      <HeroPrimary {...heroContent} />

      <TrustStrip
        placeholderText="Built for B2B marketing teams who need to prove results"
      />

      <ProblemSection {...problemContent} />

      <SolutionOverview {...solutionContent} />

      <section id="how-it-works">
        <HowItWorks {...howItWorksContent} />
      </section>

      <FeatureGrid {...featureGridContent} variant="dark" columns={2} />

      <OutcomesMetrics {...outcomesContent} />

      <PersonaCards {...personasContent} />

      <MethodologySection {...methodologyContent} />

      <CaseStudyTeaser {...caseStudiesContent} />

      <SecurityTrust {...securityContent} />

      <ResourcesTeaser {...resourcesContent} />

      <FAQ {...faqContent} variant="grid" />

      <FinalCTA {...finalCtaContent} variant="dark" />
    </>
  );
}
