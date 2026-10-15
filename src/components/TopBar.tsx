import { MapPin, Clock } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="hidden border-b border-slate-100 bg-white text-[10px] text-muted md:block">
      <div className="container-x flex items-center justify-between py-2">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5"><MapPin size={11} className="text-primary" />Banyuwangi, Jawa Timur</span>
          <span className="flex items-center gap-1.5"><Clock size={11} className="text-primary" />Senin - Jumat, 09.00 - 17.00</span>
        </div>
        <div className="flex gap-6">
          <a href="#">Ajukan Proyek</a>
          <a href="#">Layanan Klien</a>
        </div>
      </div>
    </div>
  )
}