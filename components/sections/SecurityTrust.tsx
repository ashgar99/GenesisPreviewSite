import { Container } from '@/components/layout/Container';
import { Shield, Lock, Server, Ban } from 'lucide-react';
import { clsx } from 'clsx';

interface TrustBadge {
  icon: 'shield' | 'lock' | 'server' | 'ban';
  label: string;
}

const iconMap = {
  shield: Shield,
  lock: Lock,
  server: Server,
  ban: Ban,
};

interface SecurityTrustProps {
  headline: string;
  description: string;
  badges: TrustBadge[];
}

export function SecurityTrust({
  headline,
  description,
  badges,
}: SecurityTrustProps) {
  return (
    <section className="py-16 bg-neutral-50">
      <Container size="lg">
        <div className="text-center">
          <h2 className="font-display text-display-md text-neutral-900 mb-4">
            {headline}
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-10">
            {description}
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {badges.map((badge) => {
              const Icon = iconMap[badge.icon];

              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-neutral-600"
                >
                  <Icon className="h-5 w-5 text-brand-500" />
                  <span className="text-body-md font-medium">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
