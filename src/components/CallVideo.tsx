import { Play } from 'lucide-react'
import Placeholder from './ui/Placeholder'

export default function CallVideo() {
  return (
    <section id="contact" className="pb-16">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="pt-4">
            <p className="eyebrow mb-2">Bangun Lebih Baik Bersama Kami</p>
            <h2 className="h2">Anda Punya Ide. Kami Membantu Mewujudkannya.</h2>
            <p className="mt-4 max-w-md text-[10px] leading-4 text-muted">
              Ceritakan kebutuhan bisnis Anda. Tim kami siap membantu merancang solusi digital yang tepat.
            </p>
          </div>

          <div className="bg-soft p-6 md:-mb-10">
            <p className="text-[11px] font-semibold">Konsultasikan Proyek Anda</p>
            <p className="mt-2 text-2xl font-bold text-navy">+62 812-3456-7890</p>
            <a href="#" className="btn-navy mt-4 !px-5 !py-2.5">Hubungi Kami</a>
          </div>
        </div>
      </div>
    </section>
  )
}