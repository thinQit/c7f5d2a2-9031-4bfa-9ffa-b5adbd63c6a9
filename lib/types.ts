export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface SectionBase {
  id: string;
  type: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: "USD";
  description: string;
  badges?: string[];
  image?: {
    src: string;
    alt: string;
  };
}

export interface Testimonial {
  name: string;
  title?: string;
  rating: number;
  quote: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "paid" | "fulfilled" | "cancelled";
  createdAt: string;
}
