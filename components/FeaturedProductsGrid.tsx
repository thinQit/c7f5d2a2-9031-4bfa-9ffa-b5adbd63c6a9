"use client";

import ProductCard from '@/components/ProductCard'
import { cn } from '@/lib/utils'

interface Product {
  name: string
  description: string
  price: string
  imageSrc: string
  isPopular: boolean
  isVegetarian: boolean
}

interface FeaturedProductsGridProps {
  title?: string
  products?: Product[]
  className?: string
}

export default function FeaturedProductsGrid({
  title = 'Featured Favorites',
  className = '',
  products = [
    {
      name: 'Truffle Funghi Pizza',
      description: 'Wild mushrooms, truffle cream, mozzarella, parmesan.',
      price: '$19.50',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577149/site-images/ecommerce/10223868.jpg',
      isPopular: true,
      isVegetarian: true,
    },
    {
      name: 'Diavola Pizza',
      description: 'Spicy salami, tomato sauce, mozzarella, chili flakes.',
      price: '$17.90',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577126/site-images/ecommerce/16675636.jpg',
      isPopular: true,
      isVegetarian: false,
    },
    {
      name: 'Pesto Burrata',
      description: 'Basil pesto base, cherry tomatoes, burrata, arugula.',
      price: '$18.40',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577162/site-images/ecommerce/18548434.jpg',
      isPopular: false,
      isVegetarian: true,
    },
    {
      name: 'Lasagna al Forno',
      description: 'Layers of beef ragù, béchamel, parmesan, baked golden.',
      price: '$16.90',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577159/site-images/ecommerce/10330108.jpg',
      isPopular: true,
      isVegetarian: false,
    },
  ],
}: Partial<FeaturedProductsGridProps>) {
  return (
    <section className={cn('mx-auto max-w-7xl px-4 py-20 md:px-6', className)}>
      <h2 className="mb-6 text-2xl font-bold text-[#1A1A2E] md:text-3xl">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}
