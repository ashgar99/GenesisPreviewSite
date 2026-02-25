import { HeroPrimary }     from '@/components/sections/HeroPrimary';
import { ProblemSection }   from '@/components/sections/ProblemSection';
import { SolutionOverview } from '@/components/sections/SolutionOverview';
import { HowItWorks }       from '@/components/sections/HowItWorks';
import { VerdictCards }     from '@/components/sections/VerdictCards';
import { WhoItsFor }        from '@/components/sections/WhoItsFor';
import { Pricing }          from '@/components/sections/Pricing';
import { FAQ }              from '@/components/sections/FAQ';

const faqItems = [
  {
    question: 'How is this different from LinkedIn Analytics?',
    answer:
      'LinkedIn Analytics tells you what happened—impressions, clicks, engagement rate. Genesis tells you why it happened and whether the "why" matches what you intended. Analytics show you numbers. Genesis shows you whether those numbers mean what you think they mean.',
  },
  {
    question: 'What data do I need?',
    answer:
      'Export your content performance data as CSV or XLSX from LinkedIn. Upload it to Genesis. No complex integrations required—setup takes minutes, not days.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. Your content data is encrypted at rest and in transit. It is stored in UK/EU data centres and is never shared with third parties or sold.',
  },
  {
    question: 'How long until I receive my first profile?',
    answer:
      'After uploading your data and declaring your intent, you will receive your first Genesis Profile within 5 business days.',
  },
  {
    question: 'What happens when content succeeds by luck?',
    answer:
      'Genesis marks it as Coincidence and blocks it from reinforcing your strategy. You can recalibrate the intent or exclude it entirely. This prevents lucky outcomes from corrupting your decision-making.',
  },
];

// Genesis home page — Editorial Brutalism × Precision Instrument
export default function HomePage() {
  return (
    <>
      {/* Hero: Calibration Grid canvas + key messaging + data block */}
      <HeroPrimary />

      {/* The Problem: dark section, topology-style narrative */}
      <ProblemSection />

      {/* The Solution: light section, clean resolution */}
      <SolutionOverview />

      {/* The Mechanism: 3-step Reducto-inspired diagram */}
      <HowItWorks />

      {/* The Verdicts: 4-card system logic grid */}
      <VerdictCards />

      {/* Target audience: 3-column persona grid */}
      <WhoItsFor />

      {/* Pricing: brutalist tables, 3 tiers */}
      <Pricing />

      {/* FAQ: clean unstyled accordion */}
      <FAQ headline="Common questions, direct answers" items={faqItems} />
    </>
  );
}
