'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { clsx } from 'clsx';
import { Mail, MapPin, Clock } from 'lucide-react';

// Note: Metadata won't work in 'use client' component
// In production, move form to a separate client component

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-neutral-50">
        <Container size="xl">
          <div className="max-w-2xl">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="font-display text-display-lg text-neutral-900 mb-6">
              Let's talk about your LinkedIn strategy
            </h1>
            <p className="text-body-lg text-neutral-600">
              Whether you're ready to get started or just want to learn more, we'd love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container size="xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
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
                    Message sent!
                  </h2>
                  <p className="text-body-lg text-neutral-600">
                    Thanks for reaching out. We'll get back to you within 1 business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      placeholder="Your name"
                    />
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      placeholder="you@company.com"
                    />
                  </div>

                  <Input
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Your company name"
                  />

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-body-sm font-medium text-neutral-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      placeholder="Tell us about your goals and how we can help..."
                      className={clsx(
                        'w-full px-4 py-3 rounded-lg border-2 transition-colors duration-fast',
                        'font-body text-body-md text-neutral-900 placeholder:text-neutral-400',
                        'focus:outline-none focus:ring-0',
                        'border-neutral-200 focus:border-brand-500 hover:border-neutral-300',
                        'resize-none'
                      )}
                    />
                  </div>

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
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-xl p-8 space-y-8">
                <div>
                  <h3 className="font-display text-heading-lg text-neutral-900 mb-4">
                    Get in touch
                  </h3>
                  <p className="text-body-md text-neutral-600">
                    Have a question? We're here to help. Send us a message and we'll respond within 1 business day.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-100 rounded-lg">
                      <Mail className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 mb-1">Email</div>
                      <a
                        href="mailto:hello@genesis.preview"
                        className="text-body-md text-brand-500 hover:text-brand-600"
                      >
                        hello@genesis.preview
                      </a>
                    </div>
                  </div>

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
          </div>
        </Container>
      </section>
    </>
  );
}
