import './globals.css'
import { DM_Sans, Inter } from 'next/font/google'
import NavbarSticky from '@/components/NavbarSticky'
import FooterMultiColumn from '@/components/FooterMultiColumn'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '600'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.variable} ${inter.variable} font-sans bg-background text-foreground`}>
        <NavbarSticky
          logo="LumenCart"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Collections', href: '/collections' },
            { label: 'Search', href: '/search' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Wireframe', href: '/wireframe' },
          ]}
          ctaLabel="Shop now"
          ctaHref="/shop"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="LumenCart"
          description="Curated essentials for modern routines."
          columns={[
            {
              title: 'Shop',
              links: [
                { label: 'All products', href: '/shop' },
                { label: 'Collections', href: '/collections' },
                { label: 'Bundles', href: '/collections/bundles' },
                { label: 'Gift cards', href: '/gift-cards' },
              ],
            },
            {
              title: 'Help',
              links: [
                { label: 'Shipping & returns', href: '/shipping-returns' },
                { label: 'Order tracking', href: '/track-order' },
                { label: 'FAQ', href: '/faq' },
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
          ]}
          copyright="© 2026 LumenCart Co. All rights reserved."
        />
      </body>
    </html>
  )
}
