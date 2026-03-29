import { TrendingUp, Users, AlertCircle } from 'lucide-react'

export function Problem() {
  return (
    <section id="problem" className="bg-[#FAF7F2] px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 font-serif text-6xl font-black text-[#E8402A] md:text-[96px] md:leading-none">
          The Digital Gap Is Real
        </h2>

        <div className="mb-20 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-8 rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 font-serif text-6xl font-black text-[#E8402A]">
                1 in 4
              </div>
              <p className="font-sans text-xl font-semibold text-[#1A1A1A]">
                Australian students can&apos;t access a computer at home
              </p>
            </div>

            <p className="mb-6 font-sans text-lg text-[#1A1A1A] leading-relaxed">
              That number grew from 19% to 23% in just one year. For high school students, this is the most critical window when digital skills shape their education and career readiness.
            </p>

            <p className="font-sans text-sm font-semibold text-[#666666]">
              <a 
                href="https://ia.acs.org.au/article/2026/businesses-urged-to-donate-tech-to-help-needy-students.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-[#E8402A]"
              >
                See the article here
              </a>
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Student studying"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <TrendingUp className="mb-4 h-8 w-8 text-[#E8402A]" />
            <h3 className="mb-2 font-serif font-bold text-[#1A1A1A]">Growing Gap</h3>
            <p className="font-sans text-sm text-[#666666]">
              Digital access inequality is widening year over year
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <Users className="mb-4 h-8 w-8 text-[#E8402A]" />
            <h3 className="mb-2 font-serif font-bold text-[#1A1A1A]">High Schoolers Hit Hardest</h3>
            <p className="font-sans text-sm text-[#666666]">
              Critical years for developing digital literacy skills
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <AlertCircle className="mb-4 h-8 w-8 text-[#E8402A]" />
            <h3 className="mb-2 font-serif font-bold text-[#1A1A1A]">No Platform to Manage</h3>
            <p className="font-sans text-sm text-[#666666]">
              Donation programs lack coordinated tracking systems
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
