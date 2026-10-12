import { Check } from 'lucide-react'
import Placeholder from './ui/Placeholder'
import Wave from './ui/Wave'
import DotGrid from './ui/DotGrid'

const points = [
  'Aliquam condimentum dictum',
  'Quisque nec viverra mauris',
  'Suspendisse tristique orci',
  'Aliquam condimentum dictum',
]

export default function About() {
  return (
    <section id="about" className="relative py-16">
      <Wave className="absolute left-0 top-24 hidden h-24 w-10 md:block" />
      <DotGrid className="absolute bottom-6 right-0 hidden h-24 w-24 md:block" />
      <div className="container-x grid items-center gap-10 md:grid-cols-2">
        <div className="relative pb-10">
          <Placeholder alt="Keluarga pindahan" className="aspect-[4/3] w-[85%]" />
          <Placeholder alt="Keluarga" className="absolute bottom-0 right-0 aspect-[4/3] w-[40%] border-4 border-white" />
          <div className="absolute bottom-0 left-0 w-[58%] bg-primary p-4 text-[9px] font-semibold leading-4 text-white">
            since 2010, we have been providing service and satisfaction to our customers, and we managed to rank in the top rank for insurance company.
          </div>
        </div>

        <div>
          <p className="eyebrow mb-2">Welcome To Credice</p>
          <h2 className="h2">We Are Award Wining Insurance Company !</h2>
          <p className="mt-4 text-[10px] leading-4 text-muted">
            Sed eu porttitor metus. Quisque nec viverra mauris, vel convallis felis. Aliquam vel pulvinar metus, sed fringilla lacus. Donec nec tincidunt turpis. Phasellus sodales congue ex sed volutpat. Phasellus sodales congue ex sed volutpat.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-[9px] text-ink">
            {points.map((p, i) => (
              <li key={i} className="flex items-center gap-2"><Check size={11} />{p}</li>
            ))}
          </ul>
          <a href="#" className="btn-navy mt-7">Read More</a>
        </div>
      </div>
    </section>
  )
}