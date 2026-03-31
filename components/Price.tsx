"use client";

import { cn } from '@/lib/utils'

interface PriceProps {
  price?: number
  compareAt?: number
  currency?: string
  className?: string
}

export default function Price({
  price = 0,
  compareAt = 0,
  currency = '$',
  className = '',
}: Partial<PriceProps>) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="text-lg font-bold text-[#1A1A2E]">{currency + price.toFixed(2)}</span>
      {compareAt > price && <span className="text-sm text-muted-foreground line-through">{currency + compareAt.toFixed(2)}</span>}
    </div>
  )
}
