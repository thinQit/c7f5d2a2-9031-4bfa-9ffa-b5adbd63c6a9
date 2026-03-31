"use client";

import TestimonialCard from '@/components/TestimonialCard'
import { Star } from 'lucide-react'

interface Testimonial {
  quote: string
  rating: number
  name: string
  location: string
  product: string
}

interface TestimonialsGridProps {
  testimonials?: Testimonial[]
}

export default function TestimonialsGrid({
  testimonials = [
    { quote: 'Shipping was fast and the quality exceeded expectations.', rating: 5, name: 'Maya R.', location: 'Austin, TX', product: 'Aero Headphones' },
    { quote: 'Checkout was smooth, and support answered in minutes.', rating: 5, name: 'Jordan K.', location: 'Seattle, WA', product: 'Pulse Smartwatch Pro' },
    { quote: 'Exactly what I needed for my home office setup.', rating: 4, name: 'Chris L.', location: 'Denver, CO', product: 'Arc USB-C Dock' },
  ],
}: Partial<TestimonialsGridProps>) {
  const avg = testimonials.length ? testimonials.reduce((a, b) => a + b.rating, 0) / testimonials.length : 0

  return (
    <section className="bg-muted/30 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#1A1A2E]">Loved by Customers</h2>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{avg.toFixed(1)}</span>
            <span className="text-muted-foreground">from {testimonials.length} reviews</span>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.name + i} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
