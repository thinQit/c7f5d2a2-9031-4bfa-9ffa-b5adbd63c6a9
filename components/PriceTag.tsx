"use client";

import { cn } from '@/lib/utils'

interface PriceTagProps {
  price?: number
  compareAt?: number
  className?: string
}

export default function PriceTag({ price = 0, compareAt = 0, className = '' }: Partial<PriceTagProps>) {
  const hasDiscount = compareAt > price && compareAt > 0
  const discount = hasDiscount ? Math.round(((compareAt - price) / compareAt) * 100) : 0

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="text-lg font-bold text-[#1A1A2E]">${price.toFixed(2)}</span>
      {hasDiscount && (
        <>
          <span className="text-sm text-muted-foreground line-through">${compareAt.toFixed(2)}</span>
          <span className="rounded bg-[#E63946]/10 px-2 py-0.5 text-xs font-semibold text-[#E63946]">-{discount}%</span>
        </>
      )}
    </div>
  )
}
