"use client";

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CtaBandProps {
  title?: string
  subtitle?: string
  className?: string
}

export default function CtaBand({
  title = 'Hungry? Your Perfect Pizza Is One Click Away.',
  subtitle = 'Order now for fast delivery or schedule pickup in minutes.',
  className = '',
}: Partial<CtaBandProps>) {
  return (
    <section className={cn('bg-[#1A1A2E] py-14 text-white', className)}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6 md:text-left">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm text-white/80">{subtitle}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1A2E]">View Menu</Button>
          <Button className="bg-[#E63946] hover:bg-[#d92f3d]">Order Now</Button>
        </div>
      </div>
    </section>
  )
}
