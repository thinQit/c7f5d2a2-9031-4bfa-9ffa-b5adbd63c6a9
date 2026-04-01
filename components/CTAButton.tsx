"use client";

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  label?: string
  variantType?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({
  label = 'Shop Now',
  variantType = 'primary',
  className = '',
}: Partial<CTAButtonProps>) {
  return (
    <Button
      className={cn(
        'rounded-lg px-6 py-3 font-medium',
        variantType === 'primary'
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'bg-card text-foreground border border-border hover:bg-muted',
        className
      )}
    >
      {label}
    </Button>
  )
}
