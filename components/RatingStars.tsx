"use client";

import { Star } from 'lucide-react'

interface RatingStarsProps {
  rating?: number
  count?: number
}

export default function RatingStars({
  rating = 0,
  count = 0,
}: Partial<RatingStarsProps>) {
  const full = Math.round(rating)

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={'h-4 w-4 ' + (i < full ? 'fill-[#E63946] text-[#E63946]' : 'text-gray-300')} />
      ))}
      <span className="ml-1 text-xs text-muted-foreground">({count})</span>
    </div>
  )
}
