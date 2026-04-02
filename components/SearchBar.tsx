'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  products?: string[]
  placeholder?: string
}

export default function SearchBar({
  products = ['Everyday Hoodie', 'Classic Sneakers', 'Aero Backpack', 'Premium Tee', 'Trail Jacket'],
  placeholder = 'Search for products...',
}: Partial<SearchBarProps>) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  const suggestions = useMemo(
    () => products.filter((p) => p.toLowerCase().includes(query.toLowerCase())).slice(0, 5),
    [products, query]
  )

  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="pl-9"
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') setActiveIndex((prev) => Math.min(prev + 1, suggestions.length - 1))
          if (e.key === 'ArrowUp') setActiveIndex((prev) => Math.max(prev - 1, 0))
          if (e.key === 'Enter' && suggestions[activeIndex]) setQuery(suggestions[activeIndex])
        }}
      />
      {query.length > 0 && suggestions.length > 0 && (
        <div className="absolute z-20 mt-2 w-full rounded-xl border bg-white p-2 shadow-lg">
          {suggestions.map((item, idx) => (
            <button
              key={item}
              onClick={() => setQuery(item)}
              className={cn(
                'w-full rounded-md px-3 py-2 text-left text-sm',
                idx === activeIndex ? 'bg-muted text-[#1A1A2E]' : 'hover:bg-muted/60'
              )}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
