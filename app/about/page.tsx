export const dynamic = 'force-dynamic';

import PageHero from "@/components/PageHero"
import FeaturesGrid from "@/components/FeaturesGrid"
import GalleryMasonry from "@/components/GalleryMasonry"
import CTAVortex from "@/components/CTAVortex"
import RevealOnScroll from "@/components/RevealOnScroll"

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up">
        <PageHero
          headline="A tighter edit of products you’ll actually use"
          subheadline="We source essentials that hold up to daily life—then back them with fast shipping and straightforward returns."
          primaryCta={{ label: "Shop the edit", href: "/shop" }}
          secondaryCta={{ label: "Our policies", href: "/shipping-returns" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577152/site-images/ecommerce/11952304.jpg"
        />
      </section>

      <section className="py-20 md:py-28 bg-card animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <FeaturesGrid
              badge="Why we built Spotlight"
              headline="Too many stores bury the details. We focus on clarity."
              subheadline="Materials, specs, delivery, and real reviews—without the fluff."
              features={[
                { icon: "PackageCheck", title: "Curated quality", description: "Fewer products, stricter standards, better long-term value." },
                { icon: "Truck", title: "Reliable fulfillment", description: "Fast shipping windows with transparent delivery expectations." },
                { icon: "MessageSquareHeart", title: "Customer-first support", description: "Straight answers and fair return workflows." },
              ]}
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <GalleryMasonry
            headline="Inside Spotlight Storefront"
            subheadline="A look at our product standards, fulfillment process, and support culture."
            images={[
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577143/site-images/ecommerce/18512823.jpg", alt: "Curation and quality review" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577111/site-images/ecommerce/3767397.jpg", alt: "Warehouse operations" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577103/site-images/ecommerce/29502370.jpg", alt: "Product packaging details" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577145/site-images/ecommerce/35765454.jpg", alt: "Customer support workflow" },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CTAVortex
            title="Try it for 30 days"
            subtitle="If it’s not right, return it—no complicated hoops."
            ctaLabel="Shop now"
            ctaHref="/shop"
            secondaryCtaLabel="Shipping & returns"
            secondaryCtaHref="/shipping-returns"
          />
        </div>
      </section>
    </main>
  )
}
