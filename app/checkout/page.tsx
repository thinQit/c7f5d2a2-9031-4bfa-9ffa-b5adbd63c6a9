export const dynamic = 'force-dynamic';

import PageHero from "@/components/PageHero"
import CheckoutLayout from "@/components/CheckoutLayout"
import RevealOnScroll from "@/components/RevealOnScroll"

export default function CheckoutPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up">
        <PageHero
          headline="Secure checkout"
          subheadline="Fast, encrypted payment with clear delivery expectations."
          primaryCta={{ label: "Pay now", href: "#payment" }}
          secondaryCta={{ label: "Back to cart", href: "/cart" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577104/site-images/ecommerce/29502358.jpg"
        />
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <CheckoutLayout
              headline="Complete your order"
              subheadline="Shipping address, delivery method, and payment in one clean flow."
              primaryCta={{ label: "Place order", href: "/order/confirmation" }}
              secondaryCta={{ label: "Need help?", href: "/contact" }}
            />
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
