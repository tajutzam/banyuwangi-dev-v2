
import { ArrowUpRight, Phone, Code2 } from "lucide-react";
import Wave from "./ui/Wave";
import DotGrid from "./ui/DotGrid";

const stats = [
  { value: "50+", label: "Proyek Selesai" },
  { value: "30+", label: "Klien Puas" },
  { value: "5+", label: "Tahun Berkarya" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary text-white"
    >
      {/* Background decoration */}
      <Wave
        className="pointer-events-none absolute -left-4 top-10 h-32 w-24 opacity-30"
        stroke="#fff"
      />

      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[5%] bg-primary-light lg:block" />

      <div className="container-x relative mx-auto">
        <div className="grid min-h-[580px] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">

          <div className="relative z-10 max-w-[600px]">

            <h1 className="max-w-[620px] text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[52px]">
              Wujudkan Ide Digital Anda Bersama{" "}
              <span className="text-blue-200">
                BanyuwangiDev.
              </span>
            </h1>

            <p className="mt-6 max-w-[480px] text-sm leading-7 text-white/80 sm:text-base">
              Kami membantu bisnis membangun solusi digital
              yang modern, aman, cepat, dan siap berkembang
              untuk menghadapi tantangan masa depan.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-navy/85 hover:shadow-xl"
              >
                <Phone size={17} />
                Konsultasikan
              </a>

              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                Lihat Layanan
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <DotGrid
              className="pointer-events-none absolute -right-5 -top-5 h-full w-full opacity-60"
              color="#9ec3f5"
            />

            {/* Image container */}
            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/15 bg-navy/20 p-2 shadow-2xl">
              <img
                src="/hero-image.jpg"
                alt="Tim developer BanyuwangiDev membangun solusi digital"
                className="h-[320px] w-full rounded-xl object-cover object-center sm:h-[400px] lg:h-[440px]"
              />
            </div>

          </div>
        </div>

        {/* Statistics */}
        <div className="relative z-20 border-t border-white/20 py-7">
          <div className="grid grid-cols-3 gap-4 sm:max-w-[600px] sm:gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-medium text-white/75 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
