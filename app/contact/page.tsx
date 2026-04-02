export const dynamic = 'force-dynamic';

import FeaturesGrid from '@/components/FeaturesGrid'
import SectionReveal from '@/components/SectionReveal'

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative min-h-[80vh] animate-fade-in-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577164/site-images/ecommerce/11952301.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 py-20 md:py-28">
          <h1 className="text-5xl font-bold text-white md:text-7xl">Contact support</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Questions about sizing, shipping, or your order? We’re here every day.
          </p>
        </div>
      </section>

      <SectionReveal>
        <section className="py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-5xl px-6">
            <FeaturesGrid
              headline="Send a message"
              subheadline="Include your order number (if you have one) so we can help faster."
              features={[
                { icon: 'Mail', title: 'Email', description: 'support@lumencart.co' },
                { icon: 'Phone', title: 'Phone', description: '+1 (512) 555-0198' },
                { icon: 'Clock', title: 'Hours', description: 'Daily 9am–6pm CT • Avg reply under 2 hours' },
              ]}
            />
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}
