"use client";

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RatingStarsProps {
  rating?: number
  count?: number
  className?: string
}

export default function RatingStars({ rating = 0, count = 0, className = '' }: Partial<RatingStarsProps>) {
  return (
    <div className={cn('flex items-center gap-1.5', className)} aria-label={'Rated ' + rating + ' out of 5 from ' + count + ' reviews'}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className={cn('h-4 w-4', rating >= star ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground')} />
      ))}
      <span className="ml-1 text-xs text-muted-foreground">({count})</span>
    </div>
  )
}
