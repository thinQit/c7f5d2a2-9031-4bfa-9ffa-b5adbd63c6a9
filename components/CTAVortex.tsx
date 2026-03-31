'use client';
import { Vortex } from '@/components/ui/backgrounds/vortex';
import { Button } from '@/components/ui/button';

interface CTAVortexProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTAVortex({
  headline = 'Ready to upgrade your cart?',
  description = 'Unlock member-only deals, early product drops, and priority support today.',
  ctaLabel = 'Start Shopping',
  ctaHref = '/shop',
  secondaryCtaLabel = 'Join Newsletter',
  secondaryCtaHref = '/newsletter',
}: Partial<CTAVortexProps>) {
  return (
    <section className="w-full mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        baseHue={22}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full animate-fade-in-up"
      >
        <h2 className="text-background text-2xl md:text-6xl font-bold text-center">{headline}</h2>
        {description && <p className="text-background/70 text-sm md:text-xl max-w-xl mt-6 text-center">{description}</p>}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <Button
            size="lg"
            className="px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            asChild
          >
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-border text-background hover:bg-background/10 transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </Vortex>
    </section>
  );
}
