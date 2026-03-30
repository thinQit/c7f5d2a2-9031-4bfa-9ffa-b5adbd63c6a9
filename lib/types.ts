export interface CtaLink {
  label: string;
  href: string;
}

export interface BaseSection {
  id: string;
  type: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  content?: Record<string, unknown>;
}

export interface SitePage {
  path: string;
  name: string;
  sections: BaseSection[];
}

export interface SiteConfig {
  projectName: string;
  displayName: string;
  tagline: string;
  pages: SitePage[];
}

export interface ProductSummary {
  id?: string;
  slug?: string;
  name: string;
  category?: string;
  price: number;
  compareAtPrice?: number;
  rating?: number;
  reviewCount?: number;
  imageAlt?: string;
}
