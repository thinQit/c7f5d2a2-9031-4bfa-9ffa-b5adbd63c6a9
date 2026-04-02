export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import MenuSection from "@/components/MenuSection";
import MenuBuilder from "@/components/MenuBuilder";
import CtaBand from "@/components/CtaBand";

export default function MenuPage() {
  return (
    <main className="bg-background text-foreground pt-16">
      <div className="animate-fade-in-up">
        <HeroSpotlight
          headline="The Italo Menu"
          subheadline="Signature pizzas, classic pasta, and small plates—made fresh, packed carefully, and ready when you are."
          primaryCta={{ label: "Order Online", href: "/order" }}
          secondaryCta={{ label: "View Gallery", href: "/gallery" }}
        />
      </div>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <MenuSection />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <MenuBuilder />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CtaBand />
        </div>
      </section>
    </main>
  );
}
