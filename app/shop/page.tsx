export const dynamic = 'force-dynamic';

import ProductGrid from '@/components/ProductGrid'
import SearchBar from '@/components/SearchBar'
import CategoryPills from '@/components/CategoryPills'
import CTAVortex from '@/components/CTAVortex'
import SectionReveal from '@/components/SectionReveal'

export default function ShopPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative min-h-[80vh] animate-fade-in-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577149/site-images/ecommerce/10223868.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 py-20 md:py-28">
          <h1 className="text-5xl font-bold text-white md:text-7xl">Shop all essentials</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Browse curated products with transparent pricing, verified reviews, and fast shipping.
          </p>
          <div className="mt-8 max-w-2xl">
            <SearchBar />
          </div>
        </div>
      </section>

      <SectionReveal>
        <section className="py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <CategoryPills />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="bg-muted py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <ProductGrid />
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <CTAVortex
              title="Free shipping starts at $60"
              subtitle="Add a small essential to unlock free shipping—most orders arrive in 2–3 business days."
              ctaLabel="Shop under $25"
              ctaHref="/shop?maxPrice=25"
              secondaryCtaLabel="Shop bundles"
              secondaryCtaHref="/collections/bundles"
            />
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}
