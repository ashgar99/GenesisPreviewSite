import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { clsx } from 'clsx';
import { User, Briefcase, Users, ArrowRight } from 'lucide-react';

type IconName = 'user' | 'briefcase' | 'users';

const iconMap: Record<IconName, React.ElementType> = {
  user: User,
  briefcase: Briefcase,
  users: Users,
};

interface Persona {
  icon: IconName;
  title: string;
  description: string;
  href: string;
}

interface PersonaCardsProps {
  label?: string;
  headline: string;
  personas: Persona[];
}

export function PersonaCards({
  label = 'Who It\'s For',
  headline,
  personas,
}: PersonaCardsProps) {
  return (
    <section className="section bg-white">
      <Container size="xl">
        <div className="text-center mb-16">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="font-display text-display-lg text-neutral-900 text-balance">
            {headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {personas.map((persona, index) => {
            const Icon = iconMap[persona.icon];

            return (
              <Card
                key={persona.title}
                variant="elevated"
                padding="lg"
                className={clsx(
                  'group hover:shadow-lg transition-shadow',
                  'animate-on-scroll',
                  `stagger-${index + 1}`
                )}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-heading-lg text-neutral-900 mb-4 leading-snug">
                  {persona.title}
                </h3>

                {/* Description */}
                <p className="text-body-md text-neutral-600 leading-relaxed mb-6">
                  {persona.description}
                </p>

                {/* Link */}
                <a
                  href={persona.href}
                  className={clsx(
                    'inline-flex items-center gap-2 text-body-md font-semibold text-brand-500',
                    'hover:text-brand-600 transition-colors group/link'
                  )}
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
