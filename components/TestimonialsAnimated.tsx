'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Testimonial {
  quote: string
  name: string
  role: string
  stat: string
}

interface TestimonialsAnimatedProps {
  title?: string
  items?: Testimonial[]
}

export default function TestimonialsAnimated({
  title = 'Teams ship faster with less operational drag',
  items = [
    { quote: 'We replaced six disconnected tools and cut weekly reporting from 8 hours to 45 minutes.', name: 'Maya Chen', role: 'COO, Northpeak', stat: '4.2x faster reporting' },
    { quote: 'Our onboarding workflow is now fully standardized. New hires are productive in days, not weeks.', name: 'Jordan Lee', role: 'Head of People, BlueHarbor', stat: '58% faster onboarding' },
    { quote: 'Pipeline visibility improved instantly. Leadership now makes decisions from real-time data.', name: 'Priya Nair', role: 'VP Operations, Kinetiq', stat: '31% higher forecast accuracy' },
  ],
}: Partial<TestimonialsAnimatedProps>) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [items.length])

  return (
    <section id="testimonials" className="bg-muted/30 py-20 md:py-24">
      <div className={cn('mx-auto max-w-7xl px-4 md:px-6')}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[#2563EB]">Testimonials</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#111827] md:text-3xl">{title}</h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item, idx) => (
            <Card
              key={item.name}
              className={cn(
                'rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-500',
                idx === active ? 'scale-[1.02] border-[#2563EB]/40 shadow-md' : 'opacity-70'
              )}
            >
              <p className="text-sm text-[#111827]">“{item.quote}”</p>
              <div className="mt-5">
                <p className="font-semibold text-[#111827]">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
              <div className="mt-4 inline-flex rounded-md bg-[#2563EB]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                {item.stat}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
