'use client'

import { cn } from '@/lib/utils'

interface CategoryPillsProps {
  categories?: string[]
  activeCategory?: string
  onCategoryChange?: (category: string) => void
}

export default function CategoryPills({
  categories = ['All', 'Clothing', 'Shoes', 'Bags', 'Accessories', 'Tech'],
  activeCategory = 'All',
  onCategoryChange = () => {},
}: Partial<CategoryPillsProps>) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => {
        const isActive = category === activeCategory
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              'whitespace-nowrap rounded-full border px-4 py-2 text-sm transition',
              isActive ? 'border-[#E63946] bg-[#E63946] text-white' : 'border-border bg-white text-[#1A1A2E] hover:border-[#E63946]/40'
            )}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
