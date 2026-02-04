import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { AnimationProvider } from '@/contexts/AnimationContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1d21',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://genesis.preview'),
  title: {
    default: 'Genesis — Marketing Intelligence for LinkedIn',
    template: '%s | Genesis',
  },
  description:
    'Genesis analyses your LinkedIn content against your goals and shows you whether results came from your strategy—or from something else.',
  keywords: [
    'LinkedIn analytics',
    'marketing intelligence',
    'content strategy',
    'B2B marketing',
    'decision intelligence',
  ],
  authors: [{ name: 'Genesis' }],
  creator: 'Genesis',
  publisher: 'Genesis',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://genesis.preview',
    siteName: 'Genesis',
    title: 'Genesis — Marketing Intelligence for LinkedIn',
    description:
      'Know which posts worked—and why. Genesis analyses your LinkedIn content against your goals.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Genesis - Marketing Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genesis — Marketing Intelligence for LinkedIn',
    description:
      'Know which posts worked—and why. Genesis analyses your LinkedIn content against your goals.',
    images: ['/images/twitter-card.png'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Google Fonts - loaded via CSS for build compatibility */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-neutral-50 text-neutral-900 antialiased">
        <AnimationProvider>
          {/* Skip link for keyboard navigation */}
          <a
            href="#main-content"
            className="skip-link"
          >
            Skip to main content
          </a>

          <Navigation />

          <main id="main-content">{children}</main>

          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
