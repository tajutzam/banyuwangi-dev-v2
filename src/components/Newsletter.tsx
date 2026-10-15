import Placeholder from './ui/Placeholder'
import DotGrid from './ui/DotGrid'
import Wave from './ui/Wave'

const posts = [
  { title: 'Membangun Solusi Digital untuk Masa Depan yang Lebih Baik' },
  { title: 'Siap Mengembangkan Bisnis di Era Digital?' },
  { title: 'Hindari Kesalahan Digital dengan Perencanaan yang Tepat' },
]

function PostCard({ title }: { title: string }) {
  return (
    <article className="bg-white shadow-[0_2px_14px_rgba(10,42,107,0.08)]">
      <Placeholder alt={title} className="aspect-[3/2] w-full" />
      <div className="p-4">
        <h3 className="text-[11px] font-bold leading-4 text-navy">{title}</h3>
        <p className="mt-2 text-[8px] leading-4 text-muted">
          Insight singkat seputar teknologi, produk digital, dan pengembangan bisnis.
        </p>
        <p className="mt-3 flex gap-4 border-t border-slate-100 pt-2 text-[7px] text-muted">
          <span>31 Mei 2026</span>
          <span>Belum ada komentar</span>
        </p>
      </div>
    </article>
  )
}

export default function Newsletter() {
  return (
    <section className="relative pb-24 pt-10">
      <DotGrid className="absolute left-0 top-0 hidden h-28 w-28 md:block" />
      <Wave className="absolute right-0 top-[55%] hidden h-24 w-10 md:block" />
      <div className="container-x">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-1">Artikel</p>
            <h2 className="text-xl font-bold text-navy">Insight Terbaru Kami</h2>
          </div>
          <a href="#" className="btn-navy !px-5 !py-2.5 text-[10px]">Lihat Semua Artikel</a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}