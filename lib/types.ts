export interface NavItem {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Product {
  sku: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  rating?: number;
  reviewCount?: number;
  image: ImageAsset;
  highlights?: string[];
  href: string;
}

export interface Category {
  name: string;
  href: string;
  description?: string;
  image: ImageAsset;
}

export interface Testimonial {
  name: string;
  location?: string;
  rating: number;
  quote: string;
  productMentioned?: string;
}
