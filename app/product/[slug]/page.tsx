export const dynamic = 'force-dynamic';

import ProductGallery from '@/components/ProductGallery'
import VariantSelector from '@/components/VariantSelector'
import RatingStars from '@/components/RatingStars'
import TestimonialsGrid from '@/components/TestimonialsGrid'
import CTAVortex from '@/components/CTAVortex'
import SectionReveal from '@/components/SectionReveal'

export default function ProductDetailPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 animate-fade-in-up">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <ProductGallery />
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">AeroBottle 24oz (Insulated)</h1>
            <p className="mt-3 text-muted-foreground">
              Leakproof, cup-holder friendly, and built to keep up with your day.
            </p>
            <div className="mt-4">
              <RatingStars />
            </div>
            <div className="mt-6">
              <VariantSelector />
            </div>
          </div>
        </div>
      </section>

      <SectionReveal>
        <section className="bg-muted py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <TestimonialsGrid />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <CTAVortex
              title="Ready to upgrade your daily carry?"
              subtitle="Add AeroBottle to your cart and unlock free shipping at $60."
              ctaLabel="Add to cart"
              ctaHref="/cart"
              secondaryCtaLabel="Continue shopping"
              secondaryCtaHref="/shop"
            />
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}
