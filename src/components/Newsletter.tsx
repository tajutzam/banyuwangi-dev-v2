import Placeholder from './ui/Placeholder'
import DotGrid from './ui/DotGrid'
import Wave from './ui/Wave'

const posts = [
  { title: 'Providing Education & A Bright Future Is Our Goal' },
  { title: 'Ready For Tomorrow? Make Sense Of It With Credice Insurance' },
  { title: 'Don’t Be That ‘One’ Who Made The Mistakes And Wasn’t Prepared' },
]

function PostCard({ title }: { title: string }) {
  return (
    <article className="bg-white shadow-[0_2px_14px_rgba(10,42,107,0.08)]">
      <Placeholder alt={title} className="aspect-[3/2] w-full" />
      <div className="p-4">
        <h3 className="text-[11px] font-bold leading-4 text-navy">{title}</h3>
        <p className="mt-2 text-[8px] leading-4 text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Aliquam condimentum.
        </p>
        <p className="mt-3 flex gap-4 border-t border-slate-100 pt-2 text-[7px] text-muted">
          <span>May 31, 2022</span>
          <span>No Comments</span>
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
            <p className="eyebrow mb-1">Newsletter</p>
            <h2 className="text-xl font-bold text-navy">Our Latest Newsletter</h2>
          </div>
          <a href="#" className="btn-navy !px-5 !py-2.5 text-[10px]">All Newsletter</a>
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