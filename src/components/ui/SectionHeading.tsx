type Props = {
  eyebrow: string
  title: string
  desc?: string
  center?: boolean
}

export default function SectionHeading({ eyebrow, title, desc, center }: Props) {
  return (
    <div className={center ? 'mx-auto max-w-xl text-center' : ''}>
      <p className="eyebrow mb-2">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {desc && <p className="mt-3 text-[10px] leading-4 text-muted">{desc}</p>}
    </div>
  )
}
