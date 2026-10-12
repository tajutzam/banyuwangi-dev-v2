import { CheckCircle2 } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Wave from './ui/Wave'
import DotGrid from './ui/DotGrid'

type Plan = { name: string; sub: string; price: string; cents: string; popular: boolean }

const plans: Plan[] = [
  { name: 'Education', sub: 'Cras viverra elit non odio', price: '39', cents: '99', popular: false },
  { name: 'Life Protection', sub: 'Nunc vel odio ut velit', price: '79', cents: '99', popular: true },
  { name: 'Car Insurance', sub: 'Aliquam elementum auctor', price: '59', cents: '99', popular: false },
]
const features = ['Fixed for entire policy term', 'De Will be transferred', 'Documents for verification']

function PlanCard({ name, sub, price, cents, popular }: Plan) {
  return (
    <article className="relative overflow-hidden bg-soft">
      <header className={`px-5 py-3 text-white ${popular ? 'bg-navy' : 'bg-primary'}`}>
        <h3 className="text-sm font-bold">{name}</h3>
        <p className="text-[8px] opacity-90">{sub}</p>
      </header>
      {popular && (
        <span className="absolute right-0 top-0 h-12 w-12 bg-primary-light [clip-path:polygon(0_0,100%_0,100%_100%)]">
          <span className="absolute right-0.5 top-2 rotate-45 text-[7px] font-bold text-white">Popular</span>
        </span>
      )}

      <div className="px-5 pb-6 pt-5 text-center">
        <p className="flex items-start justify-center text-navy">
          <span className="mt-2 text-sm font-bold">$</span>
          <span className="text-5xl font-extrabold leading-none">{price}</span>
          <span className="mt-1 flex flex-col text-left leading-none">
            <span className="text-sm font-bold">{cents}</span>
            <span className="text-[7px] font-normal text-muted">Monthly</span>
          </span>
        </p>

        <ul className="mt-5 space-y-3 border-t border-slate-200 pt-4 text-left text-[8px] font-semibold">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <CheckCircle2 size={11} className="text-primary" />{f}
            </li>
          ))}
        </ul>

        <a href="#" className={`mt-5 inline-flex rounded-full px-6 py-2.5 text-[9px] font-bold text-white ${popular ? 'bg-navy' : 'bg-primary'}`}>
          Select The Plan
        </a>
        <p className="mt-3 text-[7px] text-muted">Ed cursus massa non arcu</p>
      </div>
    </article>
  )
}

export default function Pricing() {
  return (
    <section className="relative py-16">
      <Wave className="absolute left-0 top-64 hidden h-24 w-10 md:block" />
      <DotGrid className="absolute right-0 top-0 hidden h-28 w-28 md:block" />
      <div className="container-x">
        <SectionHeading center eyebrow="Our Best Plans" title="Life Can Be Limp, But We’ll Help You Take Shape." />
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}