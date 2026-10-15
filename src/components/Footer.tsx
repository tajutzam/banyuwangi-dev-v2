import { ShieldCheck, MapPin, Mail, Phone } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './ui/SocialIcons'

const socials = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'LinkedIn', icon: LinkedinIcon },
  { label: 'YouTube', icon: YoutubeIcon },
]

const cols: { title: string; items: string[] }[] = [
  { title: 'Tentang Kami', items: ['Pencapaian', 'Profil Kami', 'Artikel', 'Bantuan'] },
  { title: 'Perusahaan', items: ['Kebijakan Perusahaan', 'Kebijakan Klien', 'Ketentuan Kami', 'Syarat dan Ketentuan'] },
]

export default function Footer() {
  return (
    <footer className="bg-navy pt-20 text-white">
      <div className="container-x grid gap-8 pb-10 md:grid-cols-[1.4fr_1fr_1fr_1.6fr]">
        <div>
          <a href="#" className="flex items-center gap-1.5 text-lg font-extrabold">
            <img src="/logo.png" alt="BanyuwangiDev" className="h-8 w-auto" />
          </a>
          <p className="mt-3 max-w-[200px] text-[9px] leading-4 text-white/80">
            Software house dari Banyuwangi yang membantu bisnis membangun solusi digital yang berdampak.
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="mb-3 text-sm font-bold">{c.title}</h3>
            <ul className="space-y-1.5 text-[9px] text-white/80">
              {c.items.map((i) => (
                <li key={i}><a href="#" className="hover:text-white">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-3 text-sm font-bold">Hubungi Kami</h3>
          <ul className="space-y-2 text-[9px] text-white/80">
            <li className="flex gap-2"><MapPin size={11} className="shrink-0" />Banyuwangi, Jawa Timur</li>
            <li className="flex gap-2"><Mail size={11} className="shrink-0" />halo@banyuwangidev.com</li>
            <li className="flex gap-2"><Phone size={11} className="shrink-0" />+62 812-3456-7890</li>
          </ul>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-3 text-[8px]">
          <p>© 2026 BanyuwangiDev. Semua hak dilindungi.</p>
          <div className="flex gap-2">
            {socials.map(({ label, icon: Icon }) => (
              <a key={label} href="#" aria-label={label} className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 hover:bg-white/40">
                <Icon size={10} />
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            <a href="#">Syarat Layanan</a>
            <a href="#">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  )
}