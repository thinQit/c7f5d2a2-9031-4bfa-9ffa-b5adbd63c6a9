export const dynamic = 'force-dynamic';

import PageHero from "@/components/PageHero"
import RevealOnScroll from "@/components/RevealOnScroll"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up">
        <PageHero
          headline="Need help with an order or product?"
          subheadline="We reply quickly during business hours and keep answers straightforward."
          primaryCta={{ label: "Email support", href: "mailto:support@spotlightstorefront.com" }}
          secondaryCta={{ label: "Track an order", href: "/track-order" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577163/site-images/ecommerce/29502354.jpg"
        />
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-3xl mx-auto px-4">
          <RevealOnScroll>
            <Card className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm card-hover">
              <h2 className="text-3xl md:text-4xl font-semibold">Send a message</h2>
              <p className="text-muted-foreground mt-3">Include your order number if you have one (e.g., SS-10482).</p>
              <form className="mt-6 grid gap-4">
                <input className="h-11 rounded-lg border border-border bg-background px-3" placeholder="Alex Morgan" />
                <input className="h-11 rounded-lg border border-border bg-background px-3" placeholder="alex@example.com" />
                <input className="h-11 rounded-lg border border-border bg-background px-3" placeholder="SS-10482" />
                <select className="h-11 rounded-lg border border-border bg-background px-3">
                  <option>Order status</option>
                  <option>Returns</option>
                  <option>Product question</option>
                  <option>Bulk order</option>
                  <option>Other</option>
                </select>
                <textarea className="min-h-[140px] rounded-lg border border-border bg-background px-3 py-2" placeholder="Tell us what you need help with..." />
                <Button className="transition-all duration-200 hover:scale-105">Send message</Button>
              </form>
            </Card>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
