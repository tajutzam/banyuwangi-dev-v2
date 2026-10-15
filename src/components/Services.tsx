import { HeartPulse, CarFront, BookOpen, Banknote, ArrowRight, type LucideIcon } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

type Service = { title: string; icon: LucideIcon; active: boolean }

const services: Service[] = [
  { title: 'Website & Landing Page', icon: HeartPulse, active: false },
  { title: 'Aplikasi Web & Mobile', icon: CarFront, active: true },
  { title: 'Sistem Informasi Bisnis', icon: BookOpen, active: false },
  { title: 'UI/UX & Branding Digital', icon: Banknote, active: true },
]

function ServiceCard({ title, icon: Icon, active }: Service) {
  return (
    <article
      className={`flex flex-col px-5 pb-6 pt-6 ${active ? 'bg-primary text-white' : 'bg-white text-ink'}`}
    >
      <Icon size={22} className={active ? 'text-white' : 'text-primary'} />
      <div className={`mt-4 border-l-2 pl-4 ${active ? 'border-white/60' : 'border-primary'}`}>
        <h3 className={`text-[13px] font-bold ${active ? 'text-white' : 'text-primary'}`}>{title}</h3>
        <p className={`mt-2 text-[9px] leading-4 ${active ? 'text-white/85' : 'text-muted'}`}>
          Solusi digital yang dirancang sesuai kebutuhan dan tujuan bisnis Anda.
        </p>
      </div>
      <a href="#" className="mt-6 flex items-center gap-1.5 text-[9px] font-bold">
        Lihat Detail <ArrowRight size={11} />
      </a>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-soft py-16">
      <div className="container-x">
        <SectionHeading
          center
eyebrow="Layanan Kami"
           title="Saatnya Bisnis Anda Tumbuh Lebih Cepat."
           desc="Kami merancang dan membangun solusi digital yang fungsional, mudah digunakan, dan siap berkembang bersama bisnis Anda."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}