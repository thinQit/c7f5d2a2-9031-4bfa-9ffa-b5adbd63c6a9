"use client";

import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Testimonial {
  name: string
  quote: string
  rating: number
  avatarSrc: string
  mention?: string
}

interface TestimonialsGridProps {
  testimonials?: Testimonial[]
  className?: string
}

export default function TestimonialsGrid({
  className = '',
  testimonials = [
    {
      name: 'Sofia R.',
      quote: 'The closest taste to Naples I have had in New York. Dough is perfect every time.',
      rating: 5,
      avatarSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg',
      mention: 'Featured in Local Food Guide',
    },
    {
      name: 'Daniel M.',
      quote: 'Quick delivery, still hot, and the truffle pizza is unreal. Highly recommend.',
      rating: 5,
      avatarSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg',
    },
    {
      name: 'Emily T.',
      quote: 'Great family dinner spot. Kids loved the Margherita and we loved the tiramisu.',
      rating: 4,
      avatarSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg',
      mention: 'Top Rated on City Eats',
    },
  ],
}: Partial<TestimonialsGridProps>) {
  return (
    <section className={cn('mx-auto max-w-7xl px-4 py-20 md:px-6', className)}>
      <h2 className="mb-6 text-2xl font-bold text-[#1A1A2E] md:text-3xl">Loved by Pizza Fans</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {testimonials.map((item) => (
          <Card key={item.name} className="rounded-xl border bg-white p-5">
            <div className="mb-3 flex items-center gap-3">
              <Image src={item.avatarSrc} alt={item.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" unoptimized />
              <div>
                <p className="font-semibold text-[#1A1A2E]">{item.name}</p>
                <div className="flex">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={item.name + i} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">“{item.quote}”</p>
            {item.mention && <p className="mt-3 text-xs font-medium text-[#4f46e5]">{item.mention}</p>}
          </Card>
        ))}
      </div>
    </section>
  )
}
