import { Linkedin } from 'lucide-react'

export function CTAFooter() {
  return (
    <section id="contact" className="overflow-hidden">
      {/* Top image section */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Team collaboration"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Red footer section */}
      <div className="bg-[#E8402A] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="mb-8 font-serif text-5xl font-black text-[#FFF0A0] md:text-6xl lg:text-[72px]">
                Work with me
              </h2>
              
              <div className="flex flex-col gap-8 md:flex-row md:gap-16">                
                <div>
                  <h3 className="mb-2 font-serif font-bold text-[#FFF0A0]">Email</h3>
                  <p className="font-sans text-[#FFF0A0]">admin@techBridge.com</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/li-ting-liao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFF0A0] transition-opacity hover:opacity-80"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-8 w-8" />
              </a>
            </div>
          </div>
          
          <p className="mt-12 font-sans text-sm text-[#FFF0A0]/70">
            Built by Li-Ting in Adelaide, Australia
          </p>
        </div>
      </div>
    </section>
  )
}
