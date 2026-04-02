export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import WireframeBlocks from "@/components/WireframeBlocks";
import Aurora from "@/components/backgrounds/Aurora";

export default function WireframePage() {
  return (
    <main className="pt-0">
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Aurora
            colorStops={["#E63946", "#F4A261", "#2A9D8F"]}
            amplitude={1.1}
            blend={0.5}
            speed={0.8}
          />
        </div>
        <div className="relative z-10 animate-fade-in-up text-foreground [&_h1]:!text-foreground [&_h2]:!text-foreground [&_p]:!text-muted-foreground">
          <HeroSpotlight
            headline="Welcome to Italo Pizza"
            subheadline={"A quick layout overview of the storefront-style structure before final imagery and polish" + "."}
            primaryCta={{ label: "Back to Home", href: "/" }}
            secondaryCta={{ label: "View Menu", href: "/menu" }}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <WireframeBlocks />
        </div>
      </section>
    </main>
  );
}
