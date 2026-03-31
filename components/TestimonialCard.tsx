"use client";

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  quote?: string
  rating?: number
  name?: string
  location?: string
  product?: string
  className?: string
}

export default function TestimonialCard({
  quote = 'Great experience from browsing to checkout.',
  rating = 5,
  name = 'Customer',
  location = 'USA',
  product = 'Featured Product',
  className = '',
}: Partial<TestimonialCardProps>) {
  return (
    <article className={cn('rounded-xl border bg-card p-5 shadow-sm', className)}>
      <div className="mb-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={cn('h-4 w-4', i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground')} />
        ))}
      </div>
      <p className="text-sm text-foreground">“{quote}”</p>
      <p className="mt-3 text-xs text-muted-foreground">Purchased: {product}</p>
      <p className="mt-3 text-sm font-semibold text-[#1A1A2E]">{name}</p>
      <p className="text-xs text-muted-foreground">{location}</p>
    </article>
  )
}
