"use client";

import { BadgeCheck, HelpCircle, RotateCcw, ShieldCheck, Truck } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TrustBadgeItemProps {
  icon?: string
  title?: string
  description?: string
  className?: string
}

const iconMap = {
  Truck,
  RotateCcw,
  ShieldCheck,
  BadgeCheck,
}

export default function TrustBadgeItem({
  icon = 'ShieldCheck',
  title = 'Trusted Store',
  description = 'Built for secure and reliable shopping.',
  className = '',
}: Partial<TrustBadgeItemProps>) {
  const Icon = iconMap[icon as keyof typeof iconMap] || HelpCircle

  return (
    <div className={cn('rounded-xl border bg-card p-4 shadow-sm', className)}>
      <Icon className="mb-2 h-5 w-5 text-[#E63946]" />
      <h3 className="font-semibold text-[#1A1A2E]">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
