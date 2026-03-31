"use client";

import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

const TESTIMONIALS = [
  {
    name: 'Maya R.',
    location: 'Seattle, WA',
    rating: 5,
    quote:
      'The weekender is the perfect size and the zippers feel premium. Arrived in two days and the packaging was spotless.',
    product: 'Weekender Duffel (35L)',
  },
  {
    name: 'Jordan K.',
    location: 'Brooklyn, NY',
    rating: 5,
    quote:
      'Finally a USB‑C cable that doesn’t fray after a month. Charges my laptop at full speed and feels indestructible.',
    product: 'Braided USB‑C Cable (2m)',
  },
  {
    name: 'Elena S.',
    location: 'Austin, TX',
    rating: 4,
    quote:
      'The bottle keeps ice overnight. Lid is truly leakproof—threw it in my bag with a laptop and no issues.',
    product: 'Stainless Insulated Bottle (24oz)',
  },
  {
    name: 'Chris D.',
    location: 'Denver, CO',
    rating: 5,
    quote:
      'Checkout was fast and I appreciated the clear return policy. The organizer pouch is now in every bag I own.',
    product: 'Tech Organizer Pouch',
  },
]

export default function TestimonialsGrid() {
  return (
    <section>
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Loved by customers who value quality</h2>
        <p className="text-muted-foreground mt-2">
          Verified reviews from recent orders—highlighting fit, finish, and delivery speed.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t, i) => (
          <Card
            key={i}
            className="border-border card-hover rounded-xl bg-card p-6 flex flex-col h-full shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              {[...Array(t.rating)].map((_, idx) => (
                <Star key={idx} size={16} className="text-yellow-400" fill="currentColor" />
              ))}
              {t.rating < 5 &&
                [...Array(5 - t.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="text-muted-foreground" />
                ))}
            </div>
            <blockquote className="mb-3 mt-1 text-foreground">"{t.quote}"</blockquote>
            <div className="mt-auto flex items-baseline justify-between">
              <span className="text-sm font-semibold">{t.name}</span>
              <span className="text-xs text-muted-foreground">{t.location}</span>
            </div>
            <div className="mt-2 text-xs text-muted-foreground italic">{t.product}</div>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex flex-row justify-center gap-4">
        <a
          href="/reviews"
          className="rounded-lg px-6 py-3 bg-primary text-primary-foreground font-medium transition hover:bg-primary/90"
        >
          Read more reviews
        </a>
        <a
          href="/shop?sort=rating"
          className="rounded-lg px-6 py-3 border border-border bg-background font-medium transition hover:bg-muted"
        >
          Shop top-rated
        </a>
      </div>
    </section>
  )
}
