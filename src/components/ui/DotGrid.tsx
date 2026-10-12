type DotGridProps = { className?: string; color?: string }

export default function DotGrid({ className = '', color = '#cfe1fb' }: DotGridProps) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ backgroundImage: `radial-gradient(${color} 1.5px, transparent 1.5px)`, backgroundSize: '10px 10px' }}
    />
  )
}