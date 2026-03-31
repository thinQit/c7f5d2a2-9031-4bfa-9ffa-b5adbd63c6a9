"use client";

import CategoryCard from '@/components/CategoryCard'

interface CategoryNavProps {
  categories?: { title: string; description: string; href: string; imageSrc: string }[]
}

export default function CategoryNav({
  categories = [
    {
      title: 'New Arrivals',
      description: 'Fresh picks just landed this week.',
      href: '/collections/new-arrivals',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577126/site-images/ecommerce/16675636.jpg',
    },
    {
      title: 'Work & Office',
      description: 'Functional products for productive days.',
      href: '/collections/work-office',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577164/site-images/ecommerce/11952301.jpg',
    },
    {
      title: 'Weekend Style',
      description: 'Relaxed essentials for off-duty looks.',
      href: '/collections/weekend-style',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577110/site-images/ecommerce/17485350.jpg',
    },
  ],
}: Partial<CategoryNavProps>) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-3 md:px-6">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  )
}
