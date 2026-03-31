export const dynamic = 'force-dynamic';

import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main>
      <section className="relative min-h-[80vh] flex items-center animate-fade-in-up">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577128/site-images/ecommerce/16675634.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold">Questions before you buy?</h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-primary-foreground/90">
            We respond within 1 business day. Include your order number if you already checked out.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="mx-auto max-w-3xl px-6">
            <Card className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm card-hover">
              <h2 className="text-3xl md:text-4xl font-bold">Send a message</h2>
              <p className="mt-3 text-muted-foreground">
                Product questions, order help, or bulk gifting—send details and we’ll take it from there.
              </p>
              <form className="mt-6 grid gap-4">
                <input className="rounded-lg border border-border bg-background px-4 py-3" placeholder="Full name" />
                <input className="rounded-lg border border-border bg-background px-4 py-3" placeholder="Email" />
                <input
                  className="rounded-lg border border-border bg-background px-4 py-3"
                  placeholder="Order number (optional)"
                />
                <textarea
                  className="rounded-lg border border-border bg-background px-4 py-3 min-h-[140px]"
                  placeholder="Tell us what you’re looking for..."
                />
                <Button className="rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <CTAVortex
            title="Prefer self-serve?"
            subtitle="Most questions are answered in our shipping, returns, and FAQ pages."
            ctaLabel="Shipping & Returns"
            ctaHref="/shipping-returns"
            secondaryCtaLabel="FAQ"
            secondaryCtaHref="/faq"
          />
        </section>
      </ScrollReveal>
    </main>
  );
}
