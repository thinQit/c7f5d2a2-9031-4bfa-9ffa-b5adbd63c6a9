'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SecondaryButtonProps {
  label: string
  className: string
  onClick?: () => void
  type: 'button' | 'submit' | 'reset'
}

export default function SecondaryButton({
  label = 'Learn More',
  className = '',
  onClick,
  type = 'button',
}: Partial<SecondaryButtonProps>) {
  return (
    <Button
      type={type}
      variant="outline"
      onClick={onClick}
      className={cn('rounded-lg border-border bg-transparent px-6 py-3 font-medium text-[#111827] hover:bg-muted', className)}
    >
      {label}
    </Button>
  )
}
