import { Phone, User } from 'lucide-react'
import Placeholder from './ui/Placeholder'
import Wave from './ui/Wave'
import DotGrid from './ui/DotGrid'

const stats = [
  { value: '2,578', label: 'Happy Costumar' },
  { value: '2,500+', label: 'Client' },
  { value: '50+', label: 'Branch Office' },
]

export default function Hero() {
  return (
    <section className="relative pb-16">
      {/* panel biru */}
      <div className="relative overflow-hidden bg-primary pb-24 pt-14 text-white md:mr-[8%] md:pb-32">
        <Wave className="absolute -left-2 top-2 h-28 w-20 opacity-60" stroke="#fff" />
        <div className="absolute right-0 top-0 hidden h-full w-[6%] bg-primary-light md:block" />
        <div className="container-x relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-[11px] font-semibold">Security Is A Priority, Not An Option</p>
            <h1 className="text-3xl font-extrabold leading-[1.2] md:text-[34px]">
              Be Prepared Cause The Future Isn’t Always Crystal Clear.
            </h1>
            <p className="mt-4 max-w-sm text-[10px] leading-4 text-white/85">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="btn bg-navy text-white"><Phone size={12} />Let’s Talk</a>
              <a href="#" className="btn text-white"><User size={12} />Find An Agent</a>
            </div>
          </div>

          <div className="relative">
            <DotGrid className="absolute -right-4 top-2 h-full w-full" color="#9ec3f5" />
            <Placeholder alt="Keluarga bahagia" className="relative aspect-[4/3] w-full" />
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="container-x relative -mt-14 md:-mt-16">
        <div className="flex w-fit gap-8 bg-navy px-8 py-4 text-white md:gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold">{s.value}</p>
              <p className="text-[9px] font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}