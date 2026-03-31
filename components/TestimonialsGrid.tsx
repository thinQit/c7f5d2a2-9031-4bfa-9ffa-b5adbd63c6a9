"use client";

import { Star } from 'lucide-react'

interface TestimonialsGridProps {
  testimonials?: { name: string; quote: string; product: string; rating: number }[]
}

export default function TestimonialsGrid({
  testimonials = [
    { name: 'Ariana M.', quote: 'Super fast shipping and exactly as described. Love the build quality.', product: 'Commuter Messenger Bag', rating: 5 },
    { name: 'Josh T.', quote: 'The fit and comfort were better than expected. Ordered a second pair.', product: 'Classic White Sneakers', rating: 5 },
    { name: 'Leah K.', quote: 'Smooth checkout and premium packaging. Highly recommend this store.', product: 'Minimal Leather Wallet', rating: 4 },
  ],
}: Partial<TestimonialsGridProps>) {
  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-6 text-2xl font-bold text-[#1A1A2E] md:text-3xl">Verified Customer Reviews</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.name + t.product} className="rounded-xl border bg-white p-5">
              <div className="mb-2 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={'h-4 w-4 ' + (i < t.rating ? 'fill-[#E63946] text-[#E63946]' : 'text-gray-300')} />
                ))}
              </div>
              <p className="text-sm text-[#1A1A2E]">"{t.quote}"</p>
              <p className="mt-3 text-xs text-muted-foreground">{t.name} • Purchased: {t.product}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
