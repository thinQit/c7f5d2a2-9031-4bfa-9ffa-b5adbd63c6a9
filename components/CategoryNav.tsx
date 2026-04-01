"use client";

import Link from 'next/link'
import { Pizza, Soup, UtensilsCrossed, IceCreamBowl, CupSoda } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface CategoryItem {
  title: string
  href: string
  icon: string
}

interface CategoryNavProps {
  items?: CategoryItem[]
  className?: string
}

const iconMap = {
  Pizza,
  Soup,
  UtensilsCrossed,
  IceCreamBowl,
  CupSoda,
}

export default function CategoryNav({
  items = [
    { title: 'Pizzas', href: '/menu#pizzas', icon: 'Pizza' },
    { title: 'Pasta', href: '/menu#pasta', icon: 'Soup' },
    { title: 'Starters', href: '/menu#starters', icon: 'UtensilsCrossed' },
    { title: 'Desserts', href: '/menu#desserts', icon: 'IceCreamBowl' },
    { title: 'Drinks', href: '/menu#drinks', icon: 'CupSoda' },
  ],
  className = '',
}: Partial<CategoryNavProps>) {
  return (
    <section className={cn('mx-auto max-w-7xl px-4 py-10 md:px-6', className)}>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap] || Pizza
          return (
            <Link key={item.title} href={item.href}>
              <Card className="rounded-xl border bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <Icon className="mx-auto mb-2 h-5 w-5 text-[#4f46e5]" />
                <p className="text-sm font-semibold text-[#1A1A2E]">{item.title}</p>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
