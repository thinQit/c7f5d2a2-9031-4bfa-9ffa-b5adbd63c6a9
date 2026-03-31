'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PrimaryButtonProps {
  label: string
  className: string
  onClick?: () => void
  type: 'button' | 'submit' | 'reset'
}

export default function PrimaryButton({
  label = 'Get Started',
  className = '',
  onClick,
  type = 'button',
}: Partial<PrimaryButtonProps>) {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={cn('rounded-lg bg-[#2563EB] px-6 py-3 font-medium text-white hover:bg-[#1d4ed8] focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2', className)}
    >
      {label}
    </Button>
  )
}
