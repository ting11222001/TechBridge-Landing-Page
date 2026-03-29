import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'

export function DonationModule() {
  return (
    <section id="donations" className="flex flex-col justify-center bg-white px-6 py-16 md:min-h-screen md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 hidden md:order-1 md:block">
            <img
              src="https://images.unsplash.com/photo-1584697964038-28e16a2b6a3a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Device lifecycle and donation management"
              className="rounded-2xl object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <Badge variant="secondary" className="mb-6 bg-[#E8402A] text-white hover:bg-[#E8402A]">
              In Development
            </Badge>
            
            <h2 className="mb-6 font-serif text-5xl font-black text-[#E8402A] md:text-6xl lg:text-[72px] lg:leading-none">
              Device Lifecycle Management
            </h2>
            
            <p className="mb-8 font-sans text-lg text-[#1A1A1A] leading-relaxed">
              Manages the full journey of a donated device: from submission and approval, through certified data wiping and refurbishment, to final allocation via a partner school. Schools submit requests on behalf of students; the platform matches and tracks every device.
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#2D6A4F]" />
                <span className="font-sans text-[#1A1A1A]">Device lifecycle state machine</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#2D6A4F]" />
                <span className="font-sans text-[#1A1A1A]">Role-based access for all partners</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#2D6A4F]" />
                <span className="font-sans text-[#1A1A1A]">Audit trail for every transition</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#2D6A4F]" />
                <span className="font-sans text-[#1A1A1A]">Admin-controlled matching and allocation</span>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-[#F0F0F0] text-[#1A1A1A]">
                Business Donor
              </Badge>
              <Badge variant="secondary" className="bg-[#F0F0F0] text-[#1A1A1A]">
                Refurb Partner
              </Badge>
              <Badge variant="secondary" className="bg-[#F0F0F0] text-[#1A1A1A]">
                School / NGO
              </Badge>
              <Badge variant="secondary" className="bg-[#F0F0F0] text-[#1A1A1A]">
                Admin
              </Badge>
            </div>

            <Button
              disabled
              size="lg"
              className="rounded-none cursor-not-allowed bg-[#E8E8E8] font-bold uppercase tracking-wider text-[#1A1A1A]"
            >
              Coming Soon
            </Button>
            
            <p className="mt-4 font-sans text-sm text-[#666666]">
              Currently in active development
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
