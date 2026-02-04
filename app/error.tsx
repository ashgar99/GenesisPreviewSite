'use client';

import { useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Container size="md">
        <div className="text-center">
          <h1 className="font-display text-display-md text-neutral-900 mb-4">
            Something went wrong
          </h1>
          <p className="text-body-lg text-neutral-600 mb-8 max-w-md mx-auto">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button onClick={reset} variant="primary">
              Try again
            </Button>
            <Button href="/" variant="ghost">
              Return home
            </Button>
          </div>
          {error.digest && (
            <p className="mt-8 text-caption text-neutral-400">
              Error reference: {error.digest}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
