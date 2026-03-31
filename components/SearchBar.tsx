'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SearchBarProps {
  suggestions?: string[]
}

export default function SearchBar({
  suggestions = ['wireless earbuds', 'standing desk', 'portable speaker', 'usb-c hub'],
}: Partial<SearchBarProps>) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => suggestions.filter((s) => s.includes(query.toLowerCase())).slice(0, 4), [query, suggestions])

  return (
    <div className="relative w-full">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} className="pl-9" placeholder="Search products..." />
        </div>
        <Button asChild>
          <Link href={'/shop?q=' + encodeURIComponent(query)}>Search</Link>
        </Button>
      </div>
      {query && filtered.length > 0 && (
        <div className="absolute z-20 mt-1 w-full rounded-md border bg-background p-2 shadow">
          {filtered.map((item) => (
            <Link key={item} href={'/shop?q=' + encodeURIComponent(item)} className="block rounded px-2 py-1 text-sm hover:bg-muted">
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
