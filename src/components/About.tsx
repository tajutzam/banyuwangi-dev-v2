import { Check } from 'lucide-react'
import Wave from './ui/Wave'
import DotGrid from './ui/DotGrid'

const points = [
  'Solusi sesuai kebutuhan bisnis',
  'Tim berpengalaman dan responsif',
  'Teknologi modern dan terukur',
  'Pendampingan dari awal hingga rilis',
]

export default function About() {
  return (
    <section id="about" className="relative py-16">
      <Wave className="absolute left-0 top-24 hidden h-24 w-10 md:block" />
      <DotGrid className="absolute bottom-6 right-0 hidden h-24 w-24 md:block" />
      <div className="container-x grid items-center gap-10 md:grid-cols-2">
        <div className="relative pb-10">
          <img src="/about-us-image.png" alt="Tim BanyuwangiDev sedang berkolaborasi" className="aspect-[4/3] w-full object-cover" />
          <div className="absolute bottom-0 left-0 w-[58%] bg-primary p-4 text-[9px] font-semibold leading-4 text-white">
            BanyuwangiDev membantu bisnis menghadirkan produk digital yang bermanfaat dan berdampak.
          </div>
        </div>

        <div>
          <p className="eyebrow mb-2">Tentang BanyuwangiDev</p>
          <h2 className="h2">Kami Membangun Produk Digital yang Berdampak.</h2>
          <p className="mt-4 text-[10px] leading-4 text-muted">
            BanyuwangiDev adalah software house yang membantu bisnis mengubah ide menjadi website, aplikasi, dan sistem digital yang siap digunakan.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-[9px] text-ink">
            {points.map((p, i) => (
              <li key={i} className="flex items-center gap-2"><Check size={11} />{p}</li>
            ))}
          </ul>
          <a href="#" className="btn-navy mt-7">Kenali Kami</a>
        </div>
      </div>
    </section>
  )
}