import Placeholder from './ui/Placeholder'
import Wave from './ui/Wave'

export default function CtaBanner() {
  return (
    <section className="px-5 pb-16 pt-16">
      <div className="relative mx-auto max-w-[1060px] overflow-visible bg-primary px-6 py-10 text-white md:pl-[28%]">
        <Wave className="absolute left-0 top-0 hidden h-full w-28 opacity-70 md:block" stroke="#fff" />
        <Placeholder
          alt="Konsultan BanyuwangiDev"
          className="absolute bottom-0 left-8 hidden h-[135%] w-[22%] md:block"
        />
        <div className="relative">
          <h2 className="max-w-lg text-xl font-bold leading-snug md:text-[22px]">
            Masa Depan Tidak Bisa Diprediksi, tetapi Bisa Dipersiapkan.
          </h2>
          <p className="mt-2 text-xs font-semibold">Konsultasikan dengan Tim Kami (+62 812-3456-7890)</p>
          <a href="#" className="btn-navy mt-4 !px-5 !py-2">Hubungi Kami</a>
        </div>
      </div>
    </section>
  )
}