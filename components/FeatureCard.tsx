"use client";

import { BarChart3, Rocket, Shield, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className: string
}

const iconMap = {
  Sparkles,
  Rocket,
  BarChart3,
  Shield,
}

export default function FeatureCard({
  icon = 'Sparkles',
  title = 'Faster launches',
  description = 'Go from idea to live page quickly with conversion-focused building blocks.',
  className = '',
}: Partial<FeatureCardProps>) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Sparkles

  return (
    <Card className={cn('rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md', className)}>
      <div className="inline-flex rounded-lg bg-[#2563EB]/10 p-2 text-[#2563EB]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#111827]">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </Card>
  )
}
