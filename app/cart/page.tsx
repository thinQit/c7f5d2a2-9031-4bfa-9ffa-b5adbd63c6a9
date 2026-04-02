export const dynamic = 'force-dynamic';

import CartLineItem from '@/components/CartLineItem'
import OrderSummary from '@/components/OrderSummary'
import CTAVortex from '@/components/CTAVortex'
import SectionReveal from '@/components/SectionReveal'

export default function CartPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 animate-fade-in-up">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl font-bold md:text-4xl">Your cart</h1>
          <p className="mt-3 text-muted-foreground">Review items, apply a code, and head to secure checkout.</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <CartLineItem />
              <CartLineItem />
            </div>
            <OrderSummary />
          </div>
        </div>
      </section>

      <SectionReveal>
        <section className="bg-muted py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <CTAVortex
              title="You’re $13 away from free shipping"
              subtitle="Add a small essential and we’ll cover shipping."
              ctaLabel="Shop under $25"
              ctaHref="/shop?maxPrice=25"
              secondaryCtaLabel="Checkout now"
              secondaryCtaHref="/checkout"
            />
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}
