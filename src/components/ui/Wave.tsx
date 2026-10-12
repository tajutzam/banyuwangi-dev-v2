// Dekorasi garis bergelombang
type WaveProps = { className?: string; stroke?: string }

export default function Wave({ className = '', stroke = '#1f6fe5' }: WaveProps) {
  return (
    <svg viewBox="0 0 40 120" className={className} fill="none" stroke={stroke} strokeWidth="2" aria-hidden="true">
      {[0, 10, 20, 30].map((y) => (
        <path key={y} d={`M2 ${y + 6} q 9 -8 18 0 t 18 0`} />
      ))}
      {[40, 50, 60, 70].map((y) => (
        <path key={y} d={`M2 ${y + 6} q 9 -8 18 0 t 18 0`} />
      ))}
    </svg>
  )
}