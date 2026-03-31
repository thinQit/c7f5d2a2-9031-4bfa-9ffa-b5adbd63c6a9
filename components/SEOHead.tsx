"use client";

import type { Metadata } from 'next'

interface SEOHeadProps {
  title?: string
  description?: string
  url?: string
  imageSrc?: string
  siteName?: string
}

export default function SEOHead({
  title = 'ClarityOps | Streamline Operations & Scale Faster',
  description = 'ClarityOps helps growing teams automate workflows, improve visibility, and scale with confidence.',
  url = 'https://example.com',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577696/site-images/hero-backgrounds/12966920.jpg',
  siteName = 'ClarityOps',
}: Partial<SEOHeadProps>): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [{ url: imageSrc, width: 1200, height: 800, alt: siteName }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageSrc],
    },
  }
}
