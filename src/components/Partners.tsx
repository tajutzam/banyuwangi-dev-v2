import { Layers, Aperture, Zap, Hexagon } from 'lucide-react'

const logos = [
  { icon: Layers, label: 'Mitra Teknologi' },
  { icon: Aperture, label: 'Mitra Bisnis' },
  { icon: Zap, label: 'Komunitas Lokal' },
  { icon: Hexagon, label: 'Partner Strategis' },
]

export default function Partners() {
  return (
    <div className="relative -mb-10 px-5">
      <div className="mx-auto flex max-w-[1060px] flex-wrap items-center justify-between gap-4 bg-primary px-6 py-3 text-white">
        <p className="text-sm font-bold leading-4">Dipercaya &amp;<br />Didukung Oleh</p>
        {logos.map(({ icon: Icon, label }, i) => (
          <span key={i} className="flex items-center gap-1.5 text-lg font-bold">
            <Icon size={20} />{label}
          </span>
        ))}
      </div>
    </div>
  )
}