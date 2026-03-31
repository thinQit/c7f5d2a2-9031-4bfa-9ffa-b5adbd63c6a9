export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import CategoryNav from "@/components/CategoryNav";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustBadges from "@/components/TrustBadges";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import NewsletterForm from "@/components/NewsletterForm";
import StatsCounter from "@/components/StatsCounter";
import GalleryMasonry from "@/components/GalleryMasonry";

export default function HomePage() {
  return (
    <main className="bg-background">
      <section
        id="hero"
        className="animate-fade-in-up min-h-[80vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577129/site-images/ecommerce/16675635.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full">
          <HeroSpotlight
            title="Upgrade your everyday with curated essentials—delivered in 2–4 days."
            subtitle="Shop best-selling tech accessories, home upgrades, and travel-ready gear. Transparent pricing, easy returns, and secure checkout."
            primaryCta={{ label: "Shop Best Sellers", href: "/shop?sort=best" }}
            secondaryCta={{ label: "Browse Categories", href: "#categories" }}
          />
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
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577103/site-images/ecommerce/29502370.jpg",
              alt: "Tech accessories arranged neatly",
              caption: "Tech Accessories",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577126/site-images/ecommerce/16675636.jpg",
              alt: "Home essentials setup",
              caption: "Home Essentials",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577164/site-images/ecommerce/11952301.jpg",
              alt: "Travel carry setup",
              caption: "Travel & Carry",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577110/site-images/ecommerce/17485350.jpg",
              alt: "Wellness products flat lay",
              caption: "Wellness",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/35765454.jpg",
              alt: "Minimal desk setup essentials",
              caption: "Desk upgrades",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577152/site-images/ecommerce/11952304.jpg",
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
