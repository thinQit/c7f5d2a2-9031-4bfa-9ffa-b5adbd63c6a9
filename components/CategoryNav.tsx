"use client";

import CategoryCard from '@/components/CategoryCard'

interface CategoryItem {
  name: string
  description: string
  href: string
  imageSrc: string
}

interface CategoryNavProps {
  title?: string
  categories?: CategoryItem[]
}

export default function CategoryNav({
  title = 'Shop by Category',
  categories = [
    {
      name: 'Smart Home',
      description: 'Connected essentials for modern living',
      href: '/shop?category=smart-home',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577160/site-images/ecommerce/3756345.jpg',
    },
    {
      name: 'Work Setup',
      description: 'Productivity upgrades and desk gear',
      href: '/shop?category=work',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577129/site-images/ecommerce/16675635.jpg',
    },
    {
      name: 'Daily Carry',
      description: 'Portable items built for everyday use',
      href: '/shop?category=daily-carry',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577108/site-images/ecommerce/29502367.jpg',
    },
  ],
}: Partial<CategoryNavProps>) {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-2xl font-bold text-[#1A1A2E]">{title}</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {categories.map((category) => (
            <div key={category.href} className="min-w-[260px] flex-1 md:min-w-0">
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
