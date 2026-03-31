export const dynamic = 'force-dynamic';

import PageHero from "@/components/PageHero"
import CartLayout from "@/components/CartLayout"
import RevealOnScroll from "@/components/RevealOnScroll"

export default function CartPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up">
        <PageHero
          headline="Your cart"
          subheadline="Review items, adjust quantities, and head to secure checkout."
          primaryCta={{ label: "Checkout", href: "/checkout" }}
          secondaryCta={{ label: "Continue shopping", href: "/shop" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577136/site-images/ecommerce/16675632.jpg"
        />
      </section>

      <section className="py-20 md:py-28 bg-card animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <CartLayout
              headline="Order summary"
              subheadline="Transparent totals with shipping estimates before you pay."
              primaryCta={{ label: "Proceed to checkout", href: "/checkout" }}
              secondaryCta={{ label: "Apply promo code", href: "#promo" }}
            />
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
