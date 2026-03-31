"use client";

import CategoryCard from '@/components/CategoryCard'

interface CategoryNavProps {
  title?: string
}

export default function CategoryNav({ title = 'Shop by Category' }: Partial<CategoryNavProps>) {
  const items = [
    { title: 'Electronics', description: 'Smart and connected', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577126/site-images/ecommerce/259200.jpg' },
    { title: 'Home', description: 'Designed for comfort', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577107/site-images/ecommerce/29502359.jpg' },
    { title: 'Fashion', description: 'Everyday style', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577159/site-images/ecommerce/10330108.jpg' },
  ]
  return <section />
}
