import { useState } from 'react'
import { ChevronDown, Menu, X, MessageSquareText, ShieldCheck } from 'lucide-react'

const links: { label: string; href: string; dropdown?: boolean }[] = [
  { label: 'Homepage', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#services', dropdown: true },
  { label: 'Page', href: '#', dropdown: true },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-navy text-white">
      <div className="container-x flex h-14 items-center justify-between">
        <a href="#" className="flex items-center gap-1.5 text-lg font-extrabold">
          <ShieldCheck size={20} /> BanyuwangiDev
        </a>

        <nav className="hidden items-center gap-7 text-[11px] font-semibold md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="flex items-center gap-1 hover:text-primary-light">
              {l.label}
              {l.dropdown && <ChevronDown size={11} />}
            </a>
          ))}
        </nav>

        <a href="#" className="hidden items-center gap-2 self-stretch bg-primary px-5 text-[10px] md:flex">
          <MessageSquareText size={20} />
          <span>
            <span className="block font-bold">Have Any Query ?</span>
            <span className="opacity-90">+123-234-456</span>
          </span>
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 text-sm md:hidden">
          {links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}