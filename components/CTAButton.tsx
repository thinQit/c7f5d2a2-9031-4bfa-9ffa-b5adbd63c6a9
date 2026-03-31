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
        variantType === 'primary' ? 'bg-[#E63946] text-white hover:bg-[#d62f3c]' : 'bg-white text-[#1A1A2E] border hover:bg-muted',
        className
      )}
    >
      {label}
    </Button>
  )
}
