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
  { title: 'About', items: ['Awards', 'About Us', 'Newsletter', 'Help'] },
  { title: 'Company', items: ['Company Policy', 'Client Policy', 'Our Terms', 'Terms'] },
]

export default function Footer() {
  return (
    <footer className="bg-navy pt-20 text-white">
      <div className="container-x grid gap-8 pb-10 md:grid-cols-[1.4fr_1fr_1fr_1.6fr]">
        <div>
          <a href="#" className="flex items-center gap-1.5 text-lg font-extrabold">
            <ShieldCheck size={20} /> Credice
          </a>
          <p className="mt-3 max-w-[200px] text-[9px] leading-4 text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Aliquam condimentum magna in tincidunt.
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
          <h3 className="mb-3 text-sm font-bold">Contact Us</h3>
          <ul className="space-y-2 text-[9px] text-white/80">
            <li className="flex gap-2"><MapPin size={11} className="shrink-0" />99 Roving St., Big City</li>
            <li className="flex gap-2"><Mail size={11} className="shrink-0" />hello@awesomesite.com</li>
            <li className="flex gap-2"><Phone size={11} className="shrink-0" />+123-234-1234</li>
          </ul>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-3 text-[8px]">
          <p>Copyright 2022 © Credice | Powered by Romethemes Studio.</p>
          <div className="flex gap-2">
            {socials.map(({ label, icon: Icon }) => (
              <a key={label} href="#" aria-label={label} className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 hover:bg-white/40">
                <Icon size={10} />
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            <a href="#">Terms Of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}