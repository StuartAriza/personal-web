import { useMemo, useState } from 'react'

const categories = ['All', 'Architecture', 'Nature', 'Landscapes', 'Portrait']

const photos = [
  { id: 1, cat: 'Architecture', label: 'Plaza de Bolívar', h: 300, src: '/photos/colombia-building.jpg' },
  { id: 2, cat: 'Landscapes', label: 'Somewhere in Colombia', h: 300, src: '/photos/colombia-landscape.jpg' },
  { id: 3, cat: 'Nature', label: 'Nice Tree', h: 300, src: '/photos/tree.jpg' },
  { id: 4, cat: 'Portrait', label: 'Pixie', h: 260, src: '/photos/pixie.jpg' },
  { id: 5, cat: 'Portrait', label: 'Sarge', h: 310, src: '/photos/sarge.jpg' },
  { id: 6, cat: 'Architecture', label: 'Temple in Korea', h: 190, src: '/photos/temple.jpg' },
  { id: 7, cat: 'Portrait', label: 'Bike man', h: 220, src: '/photos/pupbike.jpg' },
  { id: 8, cat: 'Architecture', label: 'Seoul', h: 250, src: '/photos/seoul.jpg' },
]

export default function Photography() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    return active === 'All' ? photos : photos.filter(p => p.cat === active)
  }, [active])

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 24px 88px' }}>

      <style>{`
        .photo-item { break-inside: avoid; margin-bottom: 12px; }
        .photo-item img { width: 100%; display: block; object-fit: cover; border: 1px solid rgba(255,255,255,0.06); }
        .photo-item .photo-meta { padding: 8px 0 4px; }
        .photo-item .photo-meta p { font-family: 'Playfair Display', serif; font-size: 15px; color: rgba(244,241,235,0.8); margin-bottom: 2px; }
        .photo-item .photo-meta span { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: rgba(244,241,235,0.35); }
        .filter-btn { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.06em; padding: 7px 14px; border: 1px solid rgba(255,255,255,0.1); background: transparent; color: rgba(244,241,235,0.4); transition: border-color 0.15s, color 0.15s, background 0.15s; }
        .filter-btn.active { border-color: rgba(201,168,76,0.75); background: rgba(201,168,76,0.1); color: #C9A84C; }
        .gallery { columns: 2; column-gap: 12px; }
        @media (max-width: 480px) { .gallery { columns: 1; } }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '14px' }}>
          PHOTOGRAPHY
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 1.05, marginBottom: '14px' }}>
          Visual work.
        </h1>
        <p style={{ color: 'rgba(244,241,235,0.5)', fontSize: '15px', lineHeight: 1.85, maxWidth: '560px' }}>
          A small selection of images I've taken.
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '28px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`filter-btn${active === cat ? ' active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery — no motion wrappers, no gradient overlays, just images */}
      <div className="gallery">
        {filtered.map(photo => (
          <div key={photo.id} className="photo-item">
            <img
              src={photo.src}
              alt={photo.label}
              loading="lazy"
              height={photo.h}
            />
            <div className="photo-meta">
              <p>{photo.label}</p>
              <span>{photo.cat}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram */}
      <div style={{ marginTop: '64px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '22px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '18px', flexWrap: 'wrap' }}>
        <div>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(244,241,235,0.35)', letterSpacing: '0.15em', marginBottom: '10px' }}>MORE</p>
          <p style={{ color: 'rgba(244,241,235,0.55)', fontSize: '14px', lineHeight: 1.7 }}>
            More photos and recent work on Instagram.
          </p>
        </div>
        <a
          href="https://instagram.com/foundbystu"
          target="_blank"
          rel="noreferrer"
          className="nav-link"
          style={{ fontSize: '13px', color: 'rgba(244,241,235,0.45)', textDecoration: 'none', flexShrink: 0 }}
        >
          @FoundbyStu ↗
        </a>
      </div>

    </div>
  )
}