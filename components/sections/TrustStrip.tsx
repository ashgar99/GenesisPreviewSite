import { Container } from '@/components/layout/Container';
import { clsx } from 'clsx';

interface TrustStripProps {
  label?: string;
  logos?: Array<{
    name: string;
    src: string;
  }>;
  variant?: 'light' | 'dark';
  // When logos are unavailable, show placeholder text
  placeholderText?: string;
}

export function TrustStrip({
  label = 'Trusted by marketing teams at',
  logos,
  variant = 'light',
  placeholderText,
}: TrustStripProps) {
  const hasLogos = logos && logos.length > 0;

  return (
    <section
      className={clsx(
        'py-8 sm:py-12',
        variant === 'light' ? 'bg-neutral-100' : 'bg-neutral-800'
      )}
    >
      <Container size="xl">
        {hasLogos ? (
          <div className="flex flex-col items-center gap-6">
            <span
              className={clsx(
                'text-body-sm font-medium',
                variant === 'light' ? 'text-neutral-500' : 'text-neutral-400'
              )}
            >
              {label}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {logos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className={clsx(
                    'h-8 sm:h-10 w-auto object-contain',
                    variant === 'light' ? 'opacity-50' : 'opacity-40',
                    'grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-normal'
                  )}
                />
              ))}
            </div>
          </div>
        ) : (
          // Placeholder when no logos
          <div className="text-center">
            <p
              className={clsx(
                'text-body-md',
                variant === 'light' ? 'text-neutral-500' : 'text-neutral-400'
              )}
            >
              {placeholderText || 'Built for B2B marketing teams who need to prove results'}
            </p>
            {/* TODO marker for future logo additions */}
            <p className="text-caption text-neutral-400 mt-2 italic">
              [TODO: Add client logos when available]
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
