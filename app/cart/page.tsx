export const dynamic = 'force-dynamic';

import CartDrawer from "@/components/CartDrawer"
import CartLineItem from "@/components/CartLineItem"
import CTABand from "@/components/CTABand"
import ScrollReveal from "@/components/ScrollReveal"

export default function CartPage() {
  return (
    <main>
      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold">Your cart</h1>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Review items, adjust quantities, and head to secure checkout.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4">
            <CartLineItem />
            <CartLineItem />
          </div>
          <div className="lg:col-span-4">
            <CartDrawer />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CTABand />
        </div>
      </section>
    </main>
  )
}
