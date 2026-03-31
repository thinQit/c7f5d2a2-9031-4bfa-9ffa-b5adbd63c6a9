'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  placeholder?: string
  suggestions?: string[]
  className?: string
}

export default function SearchBar({
  placeholder = 'Search products, categories, SKU...',
  suggestions = ['Canvas Tote Bag', 'Running Sneakers', 'Women', 'SKU-10482', 'Desk Lamp'],
  className = '',
}: Partial<SearchBarProps>) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)

  const filtered = useMemo(
    () => suggestions.filter((s) => s.toLowerCase().includes(query.toLowerCase())).slice(0, 6),
    [query, suggestions]
  )

  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 120)}
        placeholder={placeholder}
        className="pl-9"
      />
      {focused && query.length > 0 && (
        <div className="absolute mt-2 w-full rounded-xl border bg-white p-2 shadow-lg">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <button key={item} onMouseDown={() => setQuery(item)} className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-muted">
                {item}
              </button>
            ))
          ) : (
            <p className="px-3 py-2 text-sm text-muted-foreground">No results found</p>
          )}
        </div>
      )}
    </div>
  )
}
