"use client";
import { Spotlight } from "@/components/ui/backgrounds/spotlight";
import { TypewriterEffect } from "@/components/ui/text/typewriter-effect";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSpotlightProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  saleBanner?: string;
}

export default function HeroSpotlight({
  headline = "Discover Deals You’ll Actually Love",
  subheadline = "Shop handpicked essentials, trending favorites, and limited-time offers with secure checkout and fast delivery.",
  primaryCta = { label: "Shop Now", href: "#" },
  secondaryCta = { label: "Browse Categories", href: "#" },
  imageSrc,
  saleBanner,
}: Partial<HeroSpotlightProps>) {
  const words = headline.split(" ").map((word) => ({
    text: word,
    className: "text-primary-foreground"
  }));
  return (
    <section className="relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden rounded-md bg-foreground antialiased md:min-h-[700px]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#f59e0b" />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {saleBanner && (
              <p className="mb-4 inline-flex rounded-full bg-primary/15 px-4 py-1 text-sm font-semibold text-primary-foreground">
                {saleBanner}
              </p>
            )}
            <TypewriterEffect
              words={words}
              className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
              cursorClassName="bg-primary"
            />
            <p className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/80 md:text-lg lg:mx-0">
              {subheadline}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                className="transition-all duration-200 hover:scale-105 px-8 py-6 text-lg"
                asChild
              >
                <a href={primaryCta?.href ?? "#"}>{primaryCta?.label}</a>
              </Button>
              {secondaryCta && (
                <Button
                  variant="outline"
                  size="lg"
                  className="transition-all duration-200 hover:scale-105 px-8 py-6 text-lg border-border bg-background/10 text-primary-foreground hover:bg-background/20"
                  asChild
                >
                  <a href={secondaryCta.href}>{secondaryCta.label}</a>
                </Button>
              )}
            </div>
          </div>
          {/* Right hero image */}
          {imageSrc && (
            <div className="mt-10 lg:mt-0 w-full max-w-xl mx-auto">
              <Image
                src={imageSrc}
                alt="Hero"
                width={1200}
                height={800}
                unoptimized
                priority
                className="w-full h-auto rounded-xl border border-border object-cover shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
