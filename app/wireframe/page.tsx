export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturesGrid from "@/components/FeaturesGrid";

export default function WireframePage() {
  return (
    <main className="bg-background">
      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577143/site-images/ecommerce/18512823.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full">
          <HeroSpotlight
            title="Wireframe preview"
            subtitle="A structural view of the conversion-first layout and section hierarchy."
            primaryCta={{ label: "Back to home", href: "/" }}
            secondaryCta={{ label: "Shop", href: "/shop" }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <FeaturesGrid
          badge="Wireframe map"
          headline="Landing page structure"
          subheadline="Matches the golden layout order for e-commerce storefronts."
          features={[
            { icon: "Layout", title: "HeroSpotlight", description: "Headline + sale banner + CTAs + hero image." },
            { icon: "Grid2X2", title: "CategoryNav", description: "4 category cards with imagery and hover lift." },
            { icon: "ShoppingBag", title: "FeaturedProducts", description: "6 product cards with pricing and quick add." },
            { icon: "ShieldCheck", title: "TrustBadges", description: "Shipping, returns, secure payments, support." },
            { icon: "Quote", title: "TestimonialsGrid", description: "Verified purchase social proof cards." },
            { icon: "Mail", title: "Newsletter", description: "Email capture and first-order incentive." },
          ]}
        />
      </div>
    </main>
  );
}
