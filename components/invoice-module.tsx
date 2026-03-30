import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'

export function InvoiceModule() {
  return (
    <section id="invoice" className="flex flex-col justify-center bg-[#FAF7F2] px-6 py-16 md:min-h-screen md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-6 bg-[#2D6A4F] text-white hover:bg-[#2D6A4F]">
              Live Now
            </Badge>
            
            <h2 className="mb-6 font-serif text-5xl font-black text-[#E8402A] md:text-6xl lg:text-[72px] lg:leading-none">
              Partner Invoice Management
            </h2>
            
            <p className="mb-8 font-sans text-lg text-[#1A1A1A] leading-relaxed">
              Program coordinators manage the full donation pipeline: business donors, refurbishers, and partner schools, with the right invoice generated automatically for each relationship. Track status, download PDFs, and spot outstanding invoices at a glance.
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#2D6A4F]" />
                <span className="font-sans text-[#1A1A1A]">Search partners instantly</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#2D6A4F]" />
                <span className="font-sans text-[#1A1A1A]">Generate invoice PDFs</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#2D6A4F]" />
                <span className="font-sans text-[#1A1A1A]">Track invoice status</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#2D6A4F]" />
                <span className="font-sans text-[#1A1A1A]">Dashboard overview</span>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-[#F0F0F0] text-[#1A1A1A]">
                Program Assistant
              </Badge>
              <Badge variant="secondary" className="bg-[#F0F0F0] text-[#1A1A1A]">
                Program Coordinator
              </Badge>
              <Badge variant="secondary" className="bg-[#F0F0F0] text-[#1A1A1A]">
                Program Admin
              </Badge>
              <Badge variant="secondary" className="bg-[#F0F0F0] text-[#1A1A1A]">
                Platform Owner
              </Badge>
            </div>

            <div className="flex items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-[#E8402A] font-bold uppercase tracking-wider text-white hover:bg-[#d63220]"
              >
                <a href="https://tech-bridge-invoice-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Try Live Demo
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-[#E8402A] bg-transparent font-bold uppercase tracking-wider text-[#E8402A] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A]"
              >
                <a href="https://github.com/ting11222001/TechBridge-Invoice-app" target="_blank" rel="noopener noreferrer">
                  View GitHub
                </a>
              </Button>
            </div>
            
            <p className="mt-4 font-sans text-sm text-[#666666]">
              Demo login available on the site
            </p>
          </div>
          
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1520423465871-0866049020b7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Invoice and financial management"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
