import { useState } from 'react'
import SectionHeading from './ui/SectionHeading'
import Wave from './ui/Wave'
import DotGrid from './ui/DotGrid'

const testimonials = [
  { name: 'Puri Maha', role: 'Pemilik Bisnis', quote: 'BanyuwangiDev membantu kami meluncurkan website yang profesional dan mudah digunakan.' },
  { name: 'Rina Sari', role: 'Manajer Operasional', quote: 'Prosesnya komunikatif, pengerjaannya rapi, dan hasilnya sesuai kebutuhan bisnis kami.' },
  { name: 'Budi Santoso', role: 'Founder Startup', quote: 'Ide kami diterjemahkan menjadi produk digital yang siap digunakan dan dikembangkan.' },
  { name: 'Dewi Lestari', role: 'Kepala Divisi', quote: 'Tim BanyuwangiDev responsif dan mampu memberikan solusi teknis yang tepat.' },
]

export default function Testimonial() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section className="relative py-16">
      <DotGrid className="absolute left-0 top-4 hidden h-28 w-28 md:block" />
      <Wave className="absolute right-0 top-40 hidden h-24 w-10 md:block" />
      <div className="container-x">
        <SectionHeading center eyebrow="Kata Klien" title="Dipercaya oleh Klien dari Berbagai Industri." />

        <div className="mt-10 flex items-center justify-center gap-4">
          {/* kiri */}
          <div className="hidden items-center gap-2 sm:flex">
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <button onClick={() => setActive(i)} aria-label={`Lihat ${testimonials[i].name}`} className={`flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary ${active === i ? 'ring-2 ring-primary' : ''}`}>
                  {testimonials[i].name.charAt(0)}
                </button>
                {i === 0 && <span className="h-px w-16 bg-slate-300" />}
              </div>
            ))}
          </div>

          {/* kartu */}
          <figure className="w-full max-w-[240px] bg-soft px-5 py-4 text-center">
            <blockquote className="text-[8px] font-semibold leading-4 text-ink">
              “{current.quote}”
            </blockquote>
            <figcaption className="mt-3 flex items-center justify-center gap-2 text-left">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-white">{current.name.charAt(0)}</span>
              <span>
                <span className="block text-[8px] font-bold">{current.name}</span>
                <span className="block text-[7px] text-muted">{current.role}</span>
              </span>
            </figcaption>
          </figure>

          {/* kanan */}
          <div className="hidden items-center gap-2 sm:flex">
            {[2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <button onClick={() => setActive(i)} aria-label={`Lihat ${testimonials[i].name}`} className={`flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary ${active === i ? 'ring-2 ring-primary' : ''}`}>
                  {testimonials[i].name.charAt(0)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}