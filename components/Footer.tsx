"use client";

import { Mail, MapPin, Instagram, Youtube, Music } from 'lucide-react'

const socialIcons = {
  Instagram: Instagram,
  TikTok: Music,
  YouTube: Youtube,
}

interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

interface FooterProps {
  brand?: string
  description?: string
  columns?: FooterColumn[]
  copyright?: string
}

export default function Footer({
  brand = 'Spotlight Storefront',
  description = 'Curated essentials. Fast shipping. Easy returns.',
  columns = [
    {
      title: 'Shop',
      links: [
        { label: 'All products', href: '/shop' },
        { label: 'Best sellers', href: '/shop?sort=best' },
        { label: 'New arrivals', href: '/shop?tag=new' },
        { label: 'Giftable picks', href: '/shop?tag=giftable' },
      ],
    },
    {
      title: 'Help',
      links: [
        { label: 'Shipping & returns', href: '/shipping-returns' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Track order', href: '/track-order' },
        { label: 'Contact support', href: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Privacy policy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
  copyright = '© 2026 Spotlight Storefront. All rights reserved.',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-border bg-muted text-foreground text-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 md:gap-20">
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-2">{brand}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-col gap-2 text-muted-foreground text-xs">
            <span>
              <Mail className="inline-block mr-1 h-4 w-4" />
              support@spotlightstorefront.com
            </span>
            <span>
              <MapPin className="inline mr-1 h-4 w-4" />
              200 Congress Ave, Suite 1200, Austin, TX
            </span>
            <span>Mon–Fri, 9am–5pm CT</span>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
          {columns.map((col, colIdx) => (
            <div key={colIdx}>
              <h4 className="font-semibold mb-2">{col.title}</h4>
              <ul>
                {col.links.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors text-muted-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-6 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <span className="text-xs text-muted-foreground">{copyright}</span>
        <div className="flex gap-5 mt-3 md:mt-0">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-primary transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-primary transition"
          >
            <Music className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-primary transition"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
