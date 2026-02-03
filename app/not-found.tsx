import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center pt-24">
      <Container size="md">
        <div className="text-center">
          <p className="text-brand-500 font-semibold text-body-lg mb-4">404</p>
          <h1 className="font-display text-display-lg text-neutral-900 mb-4">
            Page not found
          </h1>
          <p className="text-body-lg text-neutral-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              Go home
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
