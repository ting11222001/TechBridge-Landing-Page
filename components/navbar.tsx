'use client'

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Invoice Module', href: '#invoice' },
  { label: 'Device Donations Module', href: '#donations' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2] shadow-[0_1px_0_0_#E0DDD8]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="font-serif text-xl font-black text-[#1A1A1A] transition-colors hover:text-[#E8402A]"
        >
          TechBridge
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-full px-3 py-1.5 font-sans text-sm font-semibold text-[#1A1A1A] transition-all hover:bg-[#E8402A] hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: just a "↑ Top" link */}
        <a
          href="#hero"
          className="font-sans text-sm font-semibold text-[#E8402A] md:hidden"
        >
          ↑ Top
        </a>
      </div>
    </nav>
  )
}
