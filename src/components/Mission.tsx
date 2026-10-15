import { Handshake, Eye, Users, type LucideIcon } from 'lucide-react'

const items: { icon: LucideIcon; title: string }[] = [
  { icon: Handshake, title: 'Membangun solusi digital yang tepat guna' },
  { icon: Eye, title: 'Menjadi partner teknologi pilihan bisnis' },
  { icon: Users, title: 'Mengembangkan talenta digital terbaik' },
]

export default function Mission() {
  return (
    <section className="py-16">
      <div className="container-x max-w-3xl text-center">
        <div>
          <p className="eyebrow mb-2">Misi Kami</p>
          <h2 className="h2">Teknologi yang Tumbuh Bersama Bisnis Anda.</h2>

          <ul className="mt-6 grid gap-5 text-left md:grid-cols-3">
            {items.map(({ icon: Icon, title }) => (
              <li key={title} className="flex flex-col items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-2 ring-primary/30">
                  <Icon size={14} />
                </span>
                <div className="text-center">
                  <h3 className="text-[11px] font-bold leading-4 text-navy">{title}</h3>
                  <p className="mt-1 text-[9px] leading-4 text-muted">
                    Kami bekerja dengan proses yang transparan, kolaboratif, dan berorientasi pada hasil.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}