"use client";

import Link from 'next/link'

interface FooterProps {
  brandName: string
  supportEmail: string
}

export default function Footer({
  brandName = 'GrowthPilot',
  supportEmail = 'support@growthpilot.com',
}: Partial<FooterProps>) {
  const columns = [
    {
      title: 'Product',
      links: ['Features', 'Integrations', 'Pricing', 'Roadmap'],
    },
    {
      title: 'Company',
      links: ['About', 'Customers', 'Careers', 'Blog'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security', 'DPA'],
    },
  ]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-[#111827]">{brandName}</p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Conversion-focused platform for teams that want to launch faster, capture more leads, and scale with confidence.
            </p>
            <p className="mt-4 text-sm text-[#111827]">
              Support:{' '}
              <a className="text-[#2563EB] hover:underline" href={'mailto:' + supportEmail}>
                {supportEmail}
              </a>
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-[#111827]">{col.title}</h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-[#111827]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
