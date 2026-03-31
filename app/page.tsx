export const dynamic = 'force-dynamic';

import Image from "next/image";
import HeroSpotlight from "@/components/HeroSpotlight";
import CategoryNav from "@/components/CategoryNav";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustBadges from "@/components/TrustBadges";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import NewsletterForm from "@/components/NewsletterForm";
import StatsCounter from "@/components/StatsCounter";
import GalleryMasonry from "@/components/GalleryMasonry";

export default function HomePage() {
  const heroImage =
    "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577164/site-images/ecommerce/11952301.jpg";

  return (
    <main className="bg-background">
      <section
        id="hero"
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
            <HeroSpotlight
              title="Upgrade your everyday with curated essentials—delivered in 2–4 days."
              subtitle="Shop best-selling tech accessories, home upgrades, and travel-ready gear. Transparent pricing, easy returns, and secure checkout."
              primaryCta={{ label: "Shop Best Sellers", href: "/shop?sort=best" }}
              secondaryCta={{ label: "Browse Categories", href: "#categories" }}
            />
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-6 rounded-[32px] bg-white/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/20 shadow-2xl">
                <Image
                  src={heroImage}
                  alt="Curated essentials hero"
                  width={720}
                  height={900}
                  className="h-[360px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted" id="categories">
        <CategoryNav />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <FeaturedProducts />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <TrustBadges />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <TestimonialsGrid />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <StatsCounter
          stats={[
            { value: "2–4 days", label: "Avg. delivery" },
            { value: "30 days", label: "Easy returns" },
            { value: "4.8/5", label: "Customer rating" },
            { value: "2,140+", label: "Verified reviews" },
          ]}
          bgColor="bg-muted"
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <GalleryMasonry
          headline="Best sellers in action"
          subheadline="Real products, everyday use, zero fluff."
          images={[
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577105/site-images/ecommerce/17485352.jpg",
              alt: "Tech accessories arranged neatly",
              caption: "Tech Accessories",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577132/site-images/ecommerce/16675631.jpg",
              alt: "Home essentials setup",
              caption: "Home Essentials",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577147/site-images/ecommerce/35541612.jpg",
              alt: "Travel carry setup",
              caption: "Travel & Carry",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577126/site-images/ecommerce/259200.jpg",
              alt: "Wellness products flat lay",
              caption: "Wellness",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577159/site-images/ecommerce/10330108.jpg",
              alt: "Minimal desk setup essentials",
              caption: "Desk upgrades",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771577163/site-images/ecommerce/29502354.jpg",
              alt: "Curated product collection",
              caption: "Curated collection",
            },
          ]}
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted" id="newsletter">
        <NewsletterForm />
      </div>
    </main>
  );
}
