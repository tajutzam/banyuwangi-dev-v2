// Ganti `src` dengan gambar asli (taruh di src/assets). Tanpa src = blok placeholder.
type PlaceholderProps = {
  src?: string
  alt?: string
  className?: string
  round?: boolean
}

export default function Placeholder({ src, alt = '', className = '', round = false }: PlaceholderProps) {
  if (src) {
    return <img src={src} alt={alt} className={`object-cover ${round ? 'rounded-full' : ''} ${className}`} />
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`bg-gradient-to-br from-[#cfe1fb] to-[#9ec3f5] ${round ? 'rounded-full' : ''} ${className}`}
    />
  )
}