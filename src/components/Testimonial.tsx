import { useState } from 'react'
import Placeholder from './ui/Placeholder'
import SectionHeading from './ui/SectionHeading'
import Wave from './ui/Wave'
import DotGrid from './ui/DotGrid'

const people = [
  { name: 'Puri Maha', role: 'CEO' },
  { name: 'Rina Sari', role: 'Manager' },
  { name: 'Budi Santoso', role: 'Designer' },
  { name: 'Dewi Lestari', role: 'Developer' },
]

export default function Testimonial() {
  const [active, setActive] = useState(0)
  const current = people[active]

  return (
    <section className="relative py-16">
      <DotGrid className="absolute left-0 top-4 hidden h-28 w-28 md:block" />
      <Wave className="absolute right-0 top-40 hidden h-24 w-10 md:block" />
      <div className="container-x">
        <SectionHeading center eyebrow="Testimonial" title="Our Services Has Been Proven By Many Client." />

        <div className="mt-10 flex items-center justify-center gap-4">
          {/* kiri */}
          <div className="hidden items-center gap-2 sm:flex">
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <button onClick={() => setActive(i)} aria-label={`Lihat ${people[i].name}`}>
                  <Placeholder round alt={people[i].name} className={`h-10 w-10 ${active === i ? 'ring-2 ring-primary' : ''}`} />
                </button>
                {i === 0 && <span className="h-px w-16 bg-slate-300" />}
              </div>
            ))}
          </div>

          {/* kartu */}
          <figure className="w-full max-w-[240px] bg-soft px-5 py-4 text-center">
            <blockquote className="text-[8px] font-semibold leading-4 text-ink">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </blockquote>
            <figcaption className="mt-3 flex items-center justify-center gap-2 text-left">
              <Placeholder round alt={current.name} className="h-6 w-6" />
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
                <button onClick={() => setActive(i)} aria-label={`Lihat ${people[i].name}`}>
                  <Placeholder round alt={people[i].name} className={`h-10 w-10 ${active === i ? 'ring-2 ring-primary' : ''}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}