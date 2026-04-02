export const dynamic = 'force-dynamic';

import CheckoutForm from '@/components/CheckoutForm'
import SectionReveal from '@/components/SectionReveal'

export default function CheckoutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative min-h-[80vh] animate-fade-in-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577104/site-images/ecommerce/29502358.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 py-20 md:py-28">
          <h1 className="text-5xl font-bold text-white md:text-7xl">Secure checkout</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Complete your order in under a minute with fast payment options.
          </p>
        </div>
      </section>

      <SectionReveal>
        <section className="py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-4xl px-6">
            <CheckoutForm />
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}
