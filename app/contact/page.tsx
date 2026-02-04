'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { clsx } from 'clsx';
import { MapPin, Clock } from 'lucide-react';

// Generate a unique reference ID for each form session
function generateRefId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 9);
  return `GEN-${timestamp}-${randomPart}`.toUpperCase();
}

// Concern options for the dropdown
const concernOptions = [
  'Low engagement on content',
  'Low following / audience growth',
  'Need creative direction',
  'Understanding what content works',
  'Proving ROI to leadership',
  'Agency partnership enquiry',
  'Enterprise solution enquiry',
  'Other',
];

// Interest options - maps to query param values
const interestOptions = [
  { value: 'genesis-profile', label: 'The Genesis Profile' },
  { value: 'verdict-system', label: 'The Verdict System' },
  { value: 'data-use-campaigns', label: 'Data Use in Campaigns' },
  { value: 'sample-outputs', label: 'Example Outputs Pack' },
  { value: 'pricing', label: 'Pricing & Plans' },
  { value: 'enterprise', label: 'Enterprise Solutions' },
  { value: 'agency', label: 'Agency Partnership' },
  { value: 'other', label: 'Other' },
];

// Map source/reason query params to pre-fill interest
const sourceToInterest: Record<string, string> = {
  'solutions-marketing-leaders': 'sample-outputs',
  'solutions-founders': 'sample-outputs',
  'solutions-agencies': 'agency',
  'pricing-core': 'pricing',
  'pricing-advanced': 'pricing',
  'pricing-enterprise': 'enterprise',
  'regional': 'enterprise',
  'platform-hero': 'genesis-profile',
};

// Map reason query params to pre-fill concern and interest
const reasonToConcern: Record<string, { concern: string; interest: string }> = {
  'pilot': { concern: 'Understanding what content works', interest: 'genesis-profile' },
  'example-outputs': { concern: 'Understanding what content works', interest: 'sample-outputs' },
  'pricing': { concern: 'Enterprise solution enquiry', interest: 'pricing' },
  'pricing-core': { concern: 'Understanding what content works', interest: 'pricing' },
  'pricing-advanced': { concern: 'Understanding what content works', interest: 'pricing' },
  'enterprise': { concern: 'Enterprise solution enquiry', interest: 'enterprise' },
  'partnership': { concern: 'Agency partnership enquiry', interest: 'agency' },
  'platform': { concern: 'Understanding what content works', interest: 'genesis-profile' },
  'case-studies': { concern: 'Understanding what content works', interest: 'sample-outputs' },
  'general': { concern: '', interest: '' },
};

function ContactForm() {
  const searchParams = useSearchParams();

  // Auto-captured fields from URL and browser
  const [trackingData, setTrackingData] = useState({
    refId: '',
    source: 'direct',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    userAgent: '',
    pageUrl: '',
  });

  // Honeypot field for spam prevention
  const [honeypot, setHoneypot] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    companySector: '',
    concern: '',
    interest: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Capture UTM params, source, browser info on mount
  useEffect(() => {
    const source = searchParams.get('source') || searchParams.get('src') || 'direct';
    const reason = searchParams.get('reason');

    setTrackingData({
      refId: generateRefId(),
      source: reason || source,
      utmSource: searchParams.get('utm_source') || '',
      utmMedium: searchParams.get('utm_medium') || '',
      utmCampaign: searchParams.get('utm_campaign') || '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
    });

    // Pre-fill based on reason parameter (new system)
    if (reason && reasonToConcern[reason]) {
      const mapped = reasonToConcern[reason];
      setFormData(prev => ({
        ...prev,
        concern: mapped.concern || prev.concern,
        interest: mapped.interest || prev.interest,
      }));
    } else {
      // Fallback to old source-based mapping
      const mappedInterest = sourceToInterest[source];
      if (mappedInterest) {
        setFormData(prev => ({ ...prev, interest: mappedInterest }));
      }
    }

    // Also check for explicit interest param (overrides everything)
    const interestParam = searchParams.get('interest');
    if (interestParam) {
      setFormData(prev => ({ ...prev, interest: interestParam }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, silently reject (bot detected)
    if (honeypot) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const submissionData = {
        // Reference ID for tracking
        refId: trackingData.refId,
        // Form fields
        firstName: formData.firstName,
        surname: formData.surname,
        email: formData.email,
        companySector: formData.companySector,
        concern: formData.concern,
        interest: interestOptions.find(o => o.value === formData.interest)?.label || formData.interest,
        notes: formData.notes,
        // Timestamp
        timestamp: new Date().toISOString(),
        // Source tracking
        pageSource: trackingData.source,
        pageUrl: trackingData.pageUrl,
        utmSource: trackingData.utmSource,
        utmMedium: trackingData.utmMedium,
        utmCampaign: trackingData.utmCampaign,
        // Browser info
        userAgent: trackingData.userAgent,
        // Status
        status: 'pending',
      };

      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setError('Something went wrong. Please try again or email us directly.');
      console.error('Form submission error:', err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-success-500/10 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="font-display text-display-md text-neutral-900 mb-4">
          Message received
        </h2>
        <p className="text-body-lg text-neutral-600">
          Thanks for reaching out. We'll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field - hidden from humans, catches bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website_url">Website</label>
        <input
          type="text"
          id="website_url"
          name="website_url"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="Your first name"
        />
        <Input
          label="Surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          required
          placeholder="Your surname"
        />
      </div>

      {/* Email */}
      <Input
        label="Work Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="you@company.com"
      />

      {/* Company / Sector */}
      <Input
        label="Company / Sector"
        name="companySector"
        value={formData.companySector}
        onChange={handleChange}
        required
        placeholder="e.g., Acme Inc / B2B SaaS"
      />

      {/* What they're concerned with */}
      <div>
        <label
          htmlFor="concern"
          className="block text-body-sm font-medium text-neutral-700 mb-2"
        >
          Primary concern
        </label>
        <select
          id="concern"
          name="concern"
          value={formData.concern}
          onChange={handleChange}
          required
          className={clsx(
            'w-full px-4 py-3 rounded-lg border-2 transition-colors duration-fast',
            'font-body text-body-md text-neutral-900',
            'focus:outline-none focus:ring-0',
            'border-neutral-200 focus:border-brand-500 hover:border-neutral-300',
            'bg-white appearance-none cursor-pointer',
            !formData.concern && 'text-neutral-400'
          )}
        >
          <option value="" disabled>
            What brings you to Genesis?
          </option>
          {concernOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* What element they're curious about */}
      <div>
        <label
          htmlFor="interest"
          className="block text-body-sm font-medium text-neutral-700 mb-2"
        >
          Area of interest
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          required
          className={clsx(
            'w-full px-4 py-3 rounded-lg border-2 transition-colors duration-fast',
            'font-body text-body-md text-neutral-900',
            'focus:outline-none focus:ring-0',
            'border-neutral-200 focus:border-brand-500 hover:border-neutral-300',
            'bg-white appearance-none cursor-pointer',
            !formData.interest && 'text-neutral-400'
          )}
        >
          <option value="" disabled>
            What would you like to discuss?
          </option>
          {interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label
          htmlFor="notes"
          className="block text-body-sm font-medium text-neutral-700 mb-2"
        >
          Additional context (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Tell us about your situation, goals, or questions..."
          className={clsx(
            'w-full px-4 py-3 rounded-lg border-2 transition-colors duration-fast',
            'font-body text-body-md text-neutral-900 placeholder:text-neutral-400',
            'focus:outline-none focus:ring-0',
            'border-neutral-200 focus:border-brand-500 hover:border-neutral-300',
            'resize-none'
          )}
        />
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-error-500/10 text-error-500 px-4 py-3 rounded-lg text-body-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  );
}

function ContactFormFallback() {
  return (
    <div className="space-y-5 animate-pulse">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="h-[70px] bg-neutral-100 rounded-lg" />
        <div className="h-[70px] bg-neutral-100 rounded-lg" />
      </div>
      <div className="h-[70px] bg-neutral-100 rounded-lg" />
      <div className="h-[70px] bg-neutral-100 rounded-lg" />
      <div className="h-[70px] bg-neutral-100 rounded-lg" />
      <div className="h-[70px] bg-neutral-100 rounded-lg" />
      <div className="h-[120px] bg-neutral-100 rounded-lg" />
      <div className="h-[52px] w-40 bg-neutral-100 rounded-lg" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 bg-neutral-50 min-h-screen">
      <Container size="xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Intro + Contact Info */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <h1 className="font-display text-display-md text-neutral-900 mb-4">
                Let's talk
              </h1>
              <p className="text-body-lg text-neutral-600 mb-8">
                Whether you're exploring content strategy intelligence or ready to get started, we'd like to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">Location</div>
                    <p className="text-body-md text-neutral-600">London, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-100 rounded-lg">
                    <Clock className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">Response time</div>
                    <p className="text-body-md text-neutral-600">Within 1 business day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <Suspense fallback={<ContactFormFallback />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
