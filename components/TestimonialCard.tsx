"use client";

import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  rating: number
  imageSrc: string
}

export default function TestimonialCard({
  name = 'Customer Name',
  role = 'Role, Company',
  quote = 'This product helped our team improve outcomes quickly.',
  rating = 5,
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg',
}: Partial<TestimonialCardProps>) {
  return (
    <Card className="rounded-xl border border-border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" unoptimized />
        <div>
          <p className="text-sm font-semibold text-[#111827]">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-[#111827]/90">“{quote}”</p>
      <div className="mt-3 flex gap-1">
        {Array.from({ length: Math.max(1, Math.min(5, rating)) }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
        ))}
      </div>
    </Card>
  )
}
