import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="hero" className="flex min-h-[calc(100vh-64px)]">
      {/* Left panel — yellow, 55% */}
      <div className="flex w-full flex-col justify-center gap-6 bg-[#FFF0A0] py-12 pl-6 pr-6 md:w-[55%] md:pl-12 md:pr-8">
        {/* Top: heading + stat */}
        <div>
          <h1 className="font-serif text-4xl font-black leading-none text-[#E8402A] md:text-5xl lg:text-8xl">
            <span className="block">Bridging</span>
            <span className="block">the Digital</span>
            <span className="block">Divide,</span>
            <span className="block">One Device</span>
            <span className="block">at a Time</span>
          </h1>

          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#1A1A1A] opacity-50">
            1 in 4 Australian students can&apos;t access a device at home
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-none bg-[#E8402A] font-bold uppercase tracking-wider text-white hover:bg-[#d63220]"
          >
            <a href="#solution">See What I Built →</a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-none border-[#E8402A] font-bold uppercase tracking-wider text-[#E8402A] hover:bg-[#E8402A] hover:text-white"
          >
            <a href="https://tech-bridge-invoice-app.vercel.app/" target="_blank" rel="noopener noreferrer">
              Try the Invoice Demo
            </a>
          </Button>
        </div>
      </div>

      {/* Right panel — image bleeds to edges, 45% */}
      <div className="hidden md:block md:w-[45%]">
        <img
          src="https://images.unsplash.com/photo-1584697964038-28e16a2b6a3a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Device donation and lifecycle management"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
