import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { clsx } from 'clsx';
import { User, Briefcase, Users, TrendingUp, Settings, Globe, ArrowRight } from 'lucide-react';

type IconName = 'user' | 'briefcase' | 'users' | 'trending-up' | 'settings' | 'globe';

const iconMap: Record<IconName, React.ElementType> = {
  user: User,
  briefcase: Briefcase,
  users: Users,
  'trending-up': TrendingUp,
  settings: Settings,
  globe: Globe,
};

interface Persona {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  concerns?: string[];
  deliverable?: string;
  cta?: string;
}

interface PersonaCardsProps {
  label?: string;
  headline: string;
  subheadline?: string;
  personas: Persona[];
  variant?: 'simple' | 'detailed';
}

export function PersonaCards({
  label = 'Who It\'s For',
  headline,
  subheadline,
  personas,
  variant = 'simple',
}: PersonaCardsProps) {
  return (
    <section className="section bg-white">
      <Container size="xl">
        <div className="text-center mb-16">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="font-display text-display-lg text-neutral-900 text-balance mb-4">
            {headline}
          </h2>
          {subheadline && (
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              {subheadline}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {personas.map((persona, index) => {
            const Icon = iconMap[persona.icon];

            return (
              <div
                key={persona.title}
                className={clsx(
                  'group relative bg-neutral-50 rounded-2xl p-6 lg:p-8',
                  'hover:bg-neutral-100 transition-all duration-normal',
                  'animate-on-scroll',
                  `stagger-${index + 1}`
                )}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-heading-lg text-neutral-900 mb-3 leading-snug">
                  {persona.title}
                </h3>

                {/* Description */}
                <p className="text-body-md text-neutral-600 leading-relaxed mb-6">
                  {persona.description}
                </p>

                {/* Concerns list (if detailed variant) */}
                {variant === 'detailed' && persona.concerns && (
                  <div className="mb-6">
                    <p className="text-caption font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                      What you care about
                    </p>
                    <ul className="space-y-2">
                      {persona.concerns.map((concern) => (
                        <li key={concern} className="flex items-start gap-2 text-body-sm text-neutral-600">
                          <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-1.5 flex-shrink-0" />
                          {concern}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Deliverable (if detailed variant) */}
                {variant === 'detailed' && persona.deliverable && (
                  <div className="mb-6 p-4 bg-brand-500/5 rounded-lg border border-brand-500/10">
                    <p className="text-caption font-semibold uppercase tracking-wider text-brand-600 mb-2">
                      What you get
                    </p>
                    <p className="text-body-sm text-neutral-700">
                      {persona.deliverable}
                    </p>
                  </div>
                )}

                {/* Link */}
                <a
                  href={persona.href}
                  className={clsx(
                    'inline-flex items-center gap-2 text-body-md font-semibold text-brand-500',
                    'hover:text-brand-600 transition-colors group/link'
                  )}
                >
                  {persona.cta || 'Learn more'}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
