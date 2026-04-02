export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import WireframeBlocks from "@/components/WireframeBlocks";

export default function WireframePage() {
  return (
    <main className="pt-0">
      <div className="animate-fade-in-up text-foreground [&_h1]:!text-foreground [&_h2]:!text-foreground [&_p]:!text-muted-foreground">
        <HeroSpotlight
          headline="Welcome to Italo Pizza"
          subheadline={"A quick layout overview of the storefront-style structure before final imagery and polish" + "."}
          primaryCta={{ label: "Back to Home", href: "/" }}
          secondaryCta={{ label: "View Menu", href: "/menu" }}
        />
      </div>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <WireframeBlocks />
        </div>
      </section>
    </main>
  );
}
