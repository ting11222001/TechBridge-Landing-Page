import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { WhatIBuilt } from '@/components/what-i-built'
import { InvoiceModule } from '@/components/invoice-module'
import { DonationModule } from '@/components/donation-module'
import { TechStack } from '@/components/tech-stack'
import { CTAFooter } from '@/components/cta-footer'

export default function Home() {
  return (
    <main className="min-h-screen scroll-pt-16">
      <Navbar />
      <Hero />
      <Problem />
      <WhatIBuilt />
      <InvoiceModule />
      <DonationModule />
      <TechStack />
      <CTAFooter />
    </main>
  )
}
