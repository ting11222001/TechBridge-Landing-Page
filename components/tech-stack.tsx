import { Database, Code2, Box, Lock, Cloud, Zap } from 'lucide-react'

const techItems = [
  { icon: Code2, label: 'ASP.NET Core' },
  { icon: Code2, label: 'React' },
  { icon: Database, label: 'PostgreSQL' },
  { icon: Box, label: 'Docker' },
  { icon: Zap, label: 'Spring Boot' },
  { icon: Code2, label: 'Angular' },
  { icon: Database, label: 'MySQL' },
  { icon: Cloud, label: 'Vercel & Railway' },
]

export function TechStack() {
  return (
    <section id="tech" className="bg-[#FAF7F2] px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 font-serif text-6xl font-black text-[#E8402A] md:text-[96px] md:leading-none">
          Built with Modern Stack
        </h2>
        <p className="mb-16 font-sans text-lg text-[#1A1A1A]">
          Both modules are deployed on real infrastructure using industry-standard tools.
        </p>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {techItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm"
              >
                <Icon className="h-6 w-6 text-[#E8402A]" />
                <span className="text-center text-sm font-semibold text-[#1A1A1A]">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
