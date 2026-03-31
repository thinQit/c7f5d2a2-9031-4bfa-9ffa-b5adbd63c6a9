'use client'

import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import TestimonialCard from '@/components/TestimonialCard'

interface TestimonialItem {
  name: string
  role: string
  quote: string
  rating: number
}

interface TestimonialsAnimatedProps {
  testimonials: TestimonialItem[]
}

export default function TestimonialsAnimated({
  testimonials = [
    { name: 'Ariana Park', role: 'Head of Marketing, Vertex', quote: 'We doubled qualified demo bookings in 8 weeks.', rating: 5 },
    { name: 'Leo Martin', role: 'Founder, Northstar AI', quote: 'Setup was fast and conversion lift was immediate.', rating: 5 },
    { name: 'Priya Shah', role: 'Revenue Ops, Catalyst', quote: 'Best ROI from any landing page tooling we have used.', rating: 5 },
    { name: 'Daniel Cruz', role: 'CMO, Aperture', quote: 'Clarity plus speed. Our team finally ships with confidence.', rating: 5 },
  ],
}: Partial<TestimonialsAnimatedProps>) {
  const reduceMotion = useReducedMotion()
  const row = useMemo(() => [...testimonials, ...testimonials], [testimonials])

  return (
    <section id="testimonials" className="overflow-hidden bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">What customers say</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Real teams. Real outcomes. Built for fast-moving operators.
        </p>

        <div className="group relative mt-10">
          <motion.div
            className="flex gap-6"
            animate={reduceMotion ? {} : { x: ['0%', '-50%'] }}
            transition={reduceMotion ? {} : { ease: 'linear', duration: 28, repeat: Infinity }}
            whileHover={reduceMotion ? {} : { animationPlayState: 'paused' as unknown as never }}
          >
            {row.map((t, index) => (
              <div key={t.name + index} className="w-[320px] shrink-0">
                <TestimonialCard name={t.name} role={t.role} quote={t.quote} rating={t.rating} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
