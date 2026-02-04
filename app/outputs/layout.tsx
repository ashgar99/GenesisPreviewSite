import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Genesis Profile Example | Genesis',
  description:
    'Explore an example Genesis Profile—the comprehensive decision intelligence analysis that shows you whether your content succeeded by strategy or by coincidence.',
  openGraph: {
    title: 'Genesis Profile Example | Genesis',
    description:
      'See how Genesis delivers verdict-based analysis with full reasoning traces, pattern detection, and recalibration recommendations.',
  },
};

export default function OutputsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
