export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface Product {
  sku: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  shortDescription?: string;
  href: string;
  imageAlt: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  title: string;
  quote: string;
  product?: string;
}

export interface Category {
  name: string;
  description: string;
  href: string;
  imageAlt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}
