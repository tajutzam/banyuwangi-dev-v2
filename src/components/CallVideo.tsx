import { Play } from 'lucide-react'
import Placeholder from './ui/Placeholder'

export default function CallVideo() {
  return (
    <section id="contact" className="pb-16">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="pt-4">
            <p className="eyebrow mb-2">Getting Better All The Time</p>
            <h2 className="h2">You Don’t Need A License To Live, But A Way To Protect It.</h2>
            <p className="mt-4 max-w-md text-[10px] leading-4 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nisi in ligula tristique ornare. Donec pretium cursus elit, nec laoreet. Integer sit amet urna non magna ultrices laoreet.
            </p>
          </div>

          <div className="bg-soft p-6 md:-mb-10">
            <p className="text-[11px] font-semibold">Call Us For Detail</p>
            <p className="mt-2 text-2xl font-bold text-navy">+123-234-456</p>
            <a href="#" className="btn-navy mt-4 !px-5 !py-2.5">Contact Us</a>
          </div>
        </div>

        <div className="relative mt-8">
          <Placeholder alt="Ibu dan anak" className="aspect-[2.3/1] w-full" />
          <button
            aria-label="Putar video"
            className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-white backdrop-blur hover:bg-primary"
          >
            <Play size={18} fill="currentColor" />
          </button>
        </div>
      </div>
    </section>
  )
}