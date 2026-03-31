'use client'

import { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  placeholder?: string
  products?: string[]
  onSearch?: (value: string) => void
}

export default function SearchBar({
  placeholder = 'Search products...',
  products = ['Wireless Headphones', 'Smart Watch', 'Travel Backpack', 'Desk Lamp'],
  onSearch = () => {},
}: Partial<SearchBarProps>) {
  const [query, setQuery] = useState('')
  const [debounced, setDebounced] = useState('')

  useEffect(() => {
    const id = setTimeout(() => setDebounced(query), 300)
    return () => clearTimeout(id)
  }, [query])

  useEffect(() => {
    onSearch(debounced)
  }, [debounced, onSearch])

  const results = useMemo(
    () => products.filter((p) => p.toLowerCase().includes(debounced.toLowerCase())).slice(0, 5),
    [products, debounced]
  )

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent text-sm outline-none"
          placeholder={placeholder}
        />
        <span className="hidden rounded border px-1.5 py-0.5 text-xs text-muted-foreground sm:inline-block">⌘K</span>
      </div>

      {debounced && (
        <div className={cn('absolute z-20 mt-2 w-full rounded-lg border bg-background p-2 shadow-lg')}>
          {results.length ? (
            results.map((item) => (
              <button key={item} className="block w-full rounded-md px-2 py-2 text-left text-sm hover:bg-muted">
                {item}
              </button>
            ))
          ) : (
            <p className="px-2 py-2 text-sm text-muted-foreground">No results found.</p>
          )}
        </div>
      )}
    </div>
  )
}
