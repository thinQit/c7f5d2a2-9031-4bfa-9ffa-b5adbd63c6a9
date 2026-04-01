"use client";

import { cn } from '@/lib/utils'

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuSectionProps {
  id?: string
  title?: string
  items?: MenuItem[]
  className?: string
}

export default function MenuSection({
  id = 'pizzas',
  title = 'Pizza Selection',
  className = '',
  items = [
    { name: 'Margherita Classica', description: 'Tomato sauce, mozzarella, basil.', price: '$14.90' },
    { name: 'Quattro Formaggi', description: 'Mozzarella, gorgonzola, parmesan, fontina.', price: '$17.20' },
    { name: 'Prosciutto e Rucola', description: 'Prosciutto, arugula, parmesan shavings.', price: '$18.10' },
    { name: 'Vegetariana', description: 'Seasonal vegetables, olives, mozzarella.', price: '$16.80' },
  ],
}: Partial<MenuSectionProps>) {
  return (
    <section id={id} className={cn('mx-auto max-w-4xl px-4 py-10 md:px-6', className)}>
      <h2 className="mb-5 text-2xl font-bold text-[#1A1A2E]">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="flex items-start justify-between gap-4 border-b pb-4">
            <div>
              <h3 className="font-semibold text-[#1A1A2E]">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
            <p className="whitespace-nowrap font-bold text-[#4f46e5]">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
