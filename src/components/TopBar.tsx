import { MapPin, Clock } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="hidden border-b border-slate-100 bg-white text-[10px] text-muted md:block">
      <div className="container-x flex items-center justify-between py-2">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5"><MapPin size={11} className="text-primary" />99 Roving St., Big City</span>
          <span className="flex items-center gap-1.5"><Clock size={11} className="text-primary" />Mon - Sun 9am - 5pm</span>
        </div>
        <div className="flex gap-6">
          <a href="#">Make A Claim</a>
          <a href="#">Costumer Services</a>
        </div>
      </div>
    </div>
  )
}