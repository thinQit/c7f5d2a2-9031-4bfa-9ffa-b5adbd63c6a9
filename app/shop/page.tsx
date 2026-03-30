export const dynamic = 'force-dynamic';

import SearchBar from "@/components/SearchBar"
import FilterSidebar from "@/components/FilterSidebar"
import SortSelect from "@/components/SortSelect"
import ProductGrid from "@/components/ProductGrid"
import CTABand from "@/components/CTABand"
import ScrollReveal from "@/components/ScrollReveal"

export default function ShopPage() {
  return (
    <main>
      <section className="py-20 md:py-28 bg-background animate-fade-in-up min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold">Shop all products</h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Search, filter, and sort to find the right pick—then check out in minutes.
            </p>
          </ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <SearchBar />
            </div>
            <div className="lg:col-span-4">
              <SortSelect />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <FilterSidebar />
          </aside>
          <div className="lg:col-span-9">
            <ProductGrid />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <CTABand />
        </div>
      </section>
    </main>
  )
}
