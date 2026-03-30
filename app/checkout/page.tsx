export const dynamic = 'force-dynamic';

import CheckoutSteps from "@/components/CheckoutSteps"
import CheckoutForm from "@/components/CheckoutForm"
import ScrollReveal from "@/components/ScrollReveal"

export default function CheckoutPage() {
  return (
    <main>
      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold">Secure checkout</h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Fast payment with card or wallet options. Your information stays protected.
            </p>
          </ScrollReveal>
          <CheckoutSteps />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CheckoutForm />
        </div>
      </section>
    </main>
  )
}
