import { Handshake, Eye, Users, type LucideIcon } from 'lucide-react'
import Placeholder from './ui/Placeholder'

const items: { icon: LucideIcon; title: string }[] = [
  { icon: Handshake, title: 'Provide Future Planning Solution And Trusted Protection With Excellent Service' },
  { icon: Eye, title: 'To Become The Nation’s Leading Insurance Company' },
  { icon: Users, title: 'Developing A Professional Human Resource Quality' },
]

export default function Mission() {
  return (
    <section className="py-16">
      <div className="container-x grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-2">Our Mission</p>
          <h2 className="h2">Trust Us For The Rest Of Your Life.</h2>

          <ul className="mt-6">
            {items.map(({ icon: Icon, title }, i) => (
              <li key={title} className="relative flex gap-4 pb-5 last:pb-0">
                {i < items.length - 1 && (
                  <span className="absolute left-[15px] top-8 h-[calc(100%-1rem)] w-px bg-slate-200" aria-hidden="true" />
                )}
                <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-2 ring-primary/30">
                  <Icon size={14} />
                </span>
                <div>
                  <h3 className="text-[11px] font-bold leading-4 text-navy">{title}</h3>
                  <p className="mt-1 text-[9px] leading-4 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative pb-10">
          <Placeholder alt="Pasangan lansia" className="aspect-[4/3] w-full" />
          <div className="absolute -bottom-0 right-0 w-[52%] bg-primary p-4 text-[9px] font-bold leading-4 text-white">
            Nam Faucibus Ipsum Vel Est Elementum Porttitor. Sed Eleifend Felis Ac Fringilla Euismod Suspendisse Sagittis Nisi A Neque Ultrices Laoreet.
          </div>
        </div>
      </div>
    </section>
  )
}