export const dynamic = 'force-dynamic';

import SearchBar from '@/components/SearchBar'
import ProductGrid from '@/components/ProductGrid'
import SectionReveal from '@/components/SectionReveal'

export default function SearchPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 animate-fade-in-up">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl font-bold md:text-4xl">Search the catalog</h1>
          <p className="mt-3 text-muted-foreground">
            Find products by name, category, or use-case—then filter by price and rating.
          </p>
          <div className="mt-8">
            <SearchBar />
          </div>
        </div>
      </section>

      <SectionReveal>
        <section className="bg-muted py-20 md:py-28 animate-fade-in-up">
          <div className="mx-auto max-w-7xl px-6">
            <ProductGrid />
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}
