export const dynamic = 'force-dynamic';

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import ScrollReveal from "@/components/ScrollReveal"

export default function ContactPage() {
  return (
    <main>
      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold">Contact support</h1>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Questions about a product, shipping, or returns? We’re here 7 days/week.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-3xl mx-auto px-4">
          <form className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-5">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" placeholder="Taylor Morgan" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="taylor@example.com" />
            </div>
            <div>
              <Label htmlFor="order">Order number (optional)</Label>
              <Input id="order" placeholder="SS-10482" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us what you need help with…" />
            </div>
            <Button className="transition-all duration-200 hover:scale-105">Send message</Button>
          </form>
        </div>
      </section>
    </main>
  )
}
