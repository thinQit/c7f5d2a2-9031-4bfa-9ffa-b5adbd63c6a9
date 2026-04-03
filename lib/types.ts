export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SeoMeta {
  title: string;
  description: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface ProductCard {
  id: string;
  name: string;
  description?: string;
  price?: string;
  image?: string;
  href?: string;
  badge?: string;
}
