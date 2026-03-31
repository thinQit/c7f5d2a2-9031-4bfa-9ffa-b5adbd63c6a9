export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturesGrid from "@/components/FeaturesGrid";
import GalleryMasonry from "@/components/GalleryMasonry";
import CTAVortex from "@/components/CTAVortex";

export default function AboutPage() {
  return (
    <main className="bg-background">
      <section
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577167/site-images/ecommerce/29502369.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full">
          <HeroSpotlight
            title="A storefront built around fewer, better products"
            subtitle="We test materials, compare specs, and only stock what we’d recommend to friends."
            primaryCta={{ label: "Shop best sellers", href: "/shop?sort=best" }}
            secondaryCta={{ label: "Contact us", href: "/contact" }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <FeaturesGrid
          badge="Our standards"
          headline="How we choose what to sell"
          subheadline="A simple rubric: utility, durability, and honest value."
          features={[
            {
              icon: "CheckCircle",
              title: "Utility first",
              description: "Products must solve a real daily problem—charging, carrying, organizing, or comfort.",
            },
            {
              icon: "Shield",
              title: "Durable materials",
              description: "We prioritize reinforced cables, reliable batteries, and finishes that hold up.",
            },
            {
              icon: "BadgeDollarSign",
              title: "Transparent pricing",
              description: "No inflated MSRP games—clear compare-at pricing and frequent bundle savings.",
            },
          ]}
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <GalleryMasonry
          headline="Meet the team behind LumenCart"
          subheadline="Built in Austin, focused on better everyday commerce."
          images={[
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg",
              alt: "Avery Chen portrait",
              caption: "Avery Chen — Merchandising Lead",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg",
              alt: "Diego Martinez portrait",
              caption: "Diego Martinez — Operations",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg",
              alt: "Priya Nair portrait",
              caption: "Priya Nair — Customer Experience",
            },
          ]}
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <CTAVortex
          title="Ready to refresh your everyday kit?"
          subtitle="Free shipping over $60 + 30-day returns."
          ctaLabel="Shop now"
          ctaHref="/shop"
          secondaryCtaLabel="Browse categories"
          secondaryCtaHref="/#categories"
        />
      </div>
    </main>
  );
}
