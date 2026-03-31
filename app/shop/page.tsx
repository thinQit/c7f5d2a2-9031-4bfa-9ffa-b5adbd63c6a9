export const dynamic = 'force-dynamic';

import PageHero from "@/components/PageHero"
import ProductGrid from "@/components/ProductGrid"
import CTAVortex from "@/components/CTAVortex"
import RevealOnScroll from "@/components/RevealOnScroll"

export default function ShopPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up">
        <PageHero
          headline="Shop curated essentials"
          subheadline="Search, filter, and sort by what matters: rating, price, and shipping speed."
          primaryCta={{ label: "Best sellers", href: "/shop?sort=best" }}
          secondaryCta={{ label: "New arrivals", href: "/shop?tag=new" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577167/site-images/ecommerce/29502369.jpg"
        />
      </section>

      <section className="py-20 md:py-28 bg-card animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <ProductGrid
              headline="All products"
              subheadline="Transparent pricing, clear specs, and quick add-to-cart."
              primaryCta={{ label: "View cart", href: "/cart" }}
              secondaryCta={{ label: "Need help choosing?", href: "/contact" }}
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CTAVortex
            title="Free shipping over $50"
            subtitle="Bundle a few essentials and save on delivery—plus easy 30-day returns."
            ctaLabel="Shop bundles"
            ctaHref="/shop?tag=bundle"
            secondaryCtaLabel="Shipping details"
            secondaryCtaHref="/shipping-returns"
          />
        </div>
      </section>
    </main>
  )
}
