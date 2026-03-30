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
  headline = "Big savings on everyday essentials",
  subheadline = "Discover premium picks, limited-time bundles, and fast checkout trusted by thousands of happy shoppers.",
  primaryCta = { label: "Shop New Arrivals", href: "#" },
  secondaryCta = { label: "View Best Sellers", href: "#" },
}: Partial<HeroSpotlightProps>) {
  var words = headline.split(" ").map(function (word) {
    return { text: word, className: "text-primary-foreground" };
  });
  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden rounded-md bg-foreground antialiased md:min-h-[700px]">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="hsl(var(--primary))" />
      <div className="relative z-10 mx-auto w-full max-w-4xl p-4 pt-20 text-center md:pt-0 animate-fade-in-up">
        <TypewriterEffect words={words} className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl" cursorClassName="bg-primary" />
        <p className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/80 md:text-lg">{subheadline}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-primary px-8 py-6 text-lg text-primary-foreground transition-all duration-200 hover:scale-105" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="border-border px-8 py-6 text-lg text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-background/10"
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
