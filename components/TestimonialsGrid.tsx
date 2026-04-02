"use client";

import { Card } from '@/components/ui/card'
import RatingStars from '@/components/RatingStars'

interface TestimonialsGridProps {
  testimonials?: { name: string; quote: string; product: string; rating: number }[]
}

export default function TestimonialsGrid({
  testimonials = [
    { name: 'Sofia M.', quote: 'Fast shipping and the quality exceeded my expectations.', product: 'Essential Hoodie', rating: 5 },
    { name: 'Marcus T.', quote: 'Great fit, clean design, and checkout was super easy.', product: 'Urban Sneaker', rating: 5 },
    { name: 'Nina R.', quote: 'Customer support was helpful and returns were seamless.', product: 'Trail Jacket', rating: 4 },
  ],
}: Partial<TestimonialsGridProps>) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((t) => (
        <Card key={t.name} className="rounded-xl border bg-card p-5">
          <RatingStars rating={t.rating} count={0} />
          <p className="mt-3 text-sm text-[#1A1A2E]/85">“{t.quote}”</p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-[#1A1A2E]">{t.name}</p>
            <p className="text-xs text-muted-foreground">Purchased: {t.product}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
