"use client";
import { Spotlight } from "@/components/ui/backgrounds/spotlight";
import { TypewriterEffect } from "@/components/ui/text/typewriter-effect";
import { Button } from "@/components/ui/button";

interface HeroSpotlightProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroSpotlight({
  headline = "Turn website traffic into qualified pipeline",
  subheadline = "Launch high-converting campaigns, personalize journeys, and grow revenue with one powerful platform.",
  primaryCta = { label: "Start Free Trial", href: "#" },
  secondaryCta = { label: "Book a Demo", href: "#" },
}: Partial<HeroSpotlightProps>) {
  var words = headline.split(" ").map(function (word) {
    return { text: word };
  });

  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden rounded-md bg-background antialiased md:min-h-[700px]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="absolute inset-0 bg-primary/10" />
      <div className="relative z-10 mx-auto w-full max-w-4xl animate-fade-in-up p-4 pt-20 text-center md:pt-0">
        <TypewriterEffect
          words={words}
          className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground"
          cursorClassName="bg-primary"
        />
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">{subheadline}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
