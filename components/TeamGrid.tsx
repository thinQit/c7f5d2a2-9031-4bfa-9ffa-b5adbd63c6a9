"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
}

interface TeamGridProps {
  title?: string
  members?: TeamMember[]
}

export default function TeamGrid({
  title = 'Meet the team behind ClarityOps',
  members = [
    { name: 'Elena Brooks', role: 'CEO & Co-Founder', bio: 'Former operations leader focused on helping teams scale without chaos.', photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg' },
    { name: 'Marcus Reid', role: 'CTO & Co-Founder', bio: 'Built workflow systems used by global teams across SaaS and fintech.', photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg' },
    { name: 'Anika Shah', role: 'VP Customer Success', bio: 'Partners with customers to drive adoption and measurable business impact.', photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg' },
    { name: 'Daniel Kim', role: 'Head of Product', bio: 'Translates customer feedback into practical, high-impact product experiences.', photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg' },
  ],
}: Partial<TeamGridProps>) {
  return (
    <section className="bg-muted/30 py-20 md:py-24">
      <div className={cn('mx-auto max-w-7xl px-4 md:px-6')}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[#2563EB]">Team</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#111827] md:text-3xl">{title}</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <Card key={member.name} className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
                <Image src={member.photo} alt={member.name} fill className="object-cover" unoptimized />
              </div>
              <h3 className="font-semibold text-[#111827]">{member.name}</h3>
              <p className="text-sm text-[#2563EB]">{member.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
