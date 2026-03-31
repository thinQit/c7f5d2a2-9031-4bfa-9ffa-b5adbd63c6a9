export interface NavItem {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface MediaImage {
  src: string;
  alt: string;
  priority?: boolean;
}

export interface Product {
  sku: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  rating?: number;
  reviewCount?: number;
  badges?: string[];
  image: MediaImage;
  href: string;
  highlights?: string[];
}

export interface Category {
  name: string;
  href: string;
  description?: string;
  image: MediaImage;
}

export interface Testimonial {
  name: string;
  location?: string;
  rating: number;
  quote: string;
  product?: string;
  date?: string;
}
