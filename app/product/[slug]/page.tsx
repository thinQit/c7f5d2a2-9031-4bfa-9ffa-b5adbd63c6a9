export const dynamic = 'force-dynamic';

import ProductGallery from "@/components/ProductGallery"
import PurchaseModule from "@/components/PurchaseModule"
import FeaturesGrid from "@/components/FeaturesGrid"
import TestimonialsGrid from "@/components/TestimonialsGrid"
import CTABand from "@/components/CTABand"
import ScrollReveal from "@/components/ScrollReveal"

export default function ProductDetailPage() {
  return (
    <main>
      <section className="py-20 md:py-28 bg-background animate-fade-in-up min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <ProductGallery />
          </div>
          <div className="lg:col-span-5" id="buy">
            <PurchaseModule />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <FeaturesGrid
              headline="Why this one wins"
              subheadline="A quick comparison so you can choose without overthinking."
              features={[
                { icon: "ShieldCheck", title: "1-year warranty", description: "Coverage on eligible electronics and accessories." },
                { icon: "Package", title: "Fast fulfillment", description: "Most orders leave our warehouse within 24 hours." },
                { icon: "RefreshCcw", title: "30-day returns", description: "Easy return process with clear eligibility rules." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsGrid />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CTABand />
        </div>
      </section>
    </main>
  )
}
