"use client";
import { Vortex } from "@/components/ui/backgrounds/vortex";
import { Button } from "@/components/ui/button";

interface CTAVortexProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTAVortex({
  headline = "Ready to unlock exclusive shopping deals?",
  description = "Join NovaCart to get early access to limited drops, members-only discounts, and personalized recommendations.",
  ctaLabel = "Create Free Account",
  ctaHref = "#",
  secondaryCtaLabel = "View Best Sellers",
  secondaryCtaHref = "#",
}: Partial<CTAVortexProps>) {
  return (
    <section className="w-full mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex backgroundColor="black" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h2 className="text-primary-foreground text-2xl md:text-6xl font-bold text-center">{headline}</h2>
        {description && <p className="text-primary-foreground/70 text-sm md:text-xl max-w-xl mt-6 text-center">{description}</p>}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <Button size="lg" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-border text-primary-foreground hover:bg-background/10 transition-all duration-200 hover:scale-105"
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
