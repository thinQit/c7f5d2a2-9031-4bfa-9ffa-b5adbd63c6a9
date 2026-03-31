export const dynamic = 'force-dynamic';

import ProductGallery from "@/components/ProductGallery"
import PurchasePanel from "@/components/PurchasePanel"
import FeaturesGrid from "@/components/FeaturesGrid"
import CTAVortex from "@/components/CTAVortex"
import RevealOnScroll from "@/components/RevealOnScroll"

export default function ProductDetailPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 md:py-28 bg-card animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-6 md:gap-8">
          <ProductGallery
            headline="Product details that answer questions fast"
            subheadline="High-res photos, specs, shipping estimates, and verified reviews—right where you need them."
            images={[
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577132/site-images/ecommerce/16675631.jpg",
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577117/site-images/ecommerce/29502363.jpg",
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577105/site-images/ecommerce/17485352.jpg",
            ]}
          />
          <PurchasePanel
            headline="Secure purchase panel"
            subheadline="Price, variants, quantity, stock, delivery estimate, and payment methods."
            primaryCta={{ label: "Add to cart", href: "/cart" }}
            secondaryCta={{ label: "Shipping & returns", href: "/shipping-returns" }}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <FeaturesGrid
              badge="Why customers choose this"
              headline="A quick, scannable proof section that reduces hesitation."
              subheadline="Built for daily use with clear policy coverage."
              features={[
                { icon: "CheckCircle2", title: "Built to last", description: "Materials selected for durability and everyday wear." },
                { icon: "ShieldCheck", title: "Quality checked", description: "Each order is verified before it leaves the warehouse." },
                { icon: "RefreshCcw", title: "Worry-free policy", description: "Clear warranty coverage and straightforward returns." },
              ]}
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CTAVortex
            title="Ready to check out?"
            subtitle="Secure payment, fast delivery, and 30-day returns."
            ctaLabel="Go to checkout"
            ctaHref="/checkout"
            secondaryCtaLabel="Continue shopping"
            secondaryCtaHref="/shop"
          />
        </div>
      </section>
    </main>
  )
}
