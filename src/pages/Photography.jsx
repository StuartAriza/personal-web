import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['All', 'Architecture', 'Nature', 'Landscapes', 'Portrait']


const photos = [
  { id: 1, cat: 'Architecture', label: 'Plaza de Bolívar', h: 300, src: '/photos/colombia-building.jpg' },
  { id: 2, cat: 'Landscapes', label: 'Somewhere in Colombia', h: 300, src: '/photos/colombia-landscape.jpg' },
  { id: 3, cat: 'Nature', label: 'Instrument Series', h: 300, src: '/photos/tree.jpg' },
  { id: 4, cat: 'Portrait', label: 'Pixie', h: 260, src: '/photos/pixie.jpg' },
  { id: 5, cat: 'Portrait', label: 'Sarge', h: 310, src: '/photos/sarge.jpg' },
  { id: 6, cat: 'Architecture', label: 'Product Launch', h: 190, src: '/photos/temple.jpg' },
  { id: 7, cat: 'Portrait', label: 'Bike man', h: 220, src: 'public/photos/pupbike.jpg' },
  { id: 8, cat: 'Architecture', label: 'Seoul', h: 250, src: '/photos/seoul.jpg' },
]

const accents = [
  'rgba(201,168,76,0.07)', 'rgba(201,168,76,0.04)', 'rgba(201,168,76,0.06)',
  'rgba(201,168,76,0.05)', 'rgba(201,168,76,0.07)', 'rgba(201,168,76,0.04)',
  'rgba(201,168,76,0.06)', 'rgba(201,168,76,0.05)',
]

export default function Photography() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    return active === 'All' ? photos : photos.filter((p) => p.cat === active)
  }, [active])

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 40px 88px' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{ marginBottom: '44px' }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: '#C9A84C',
            letterSpacing: '0.15em',
            marginBottom: '14px',
          }}
        >
          PHOTOGRAPHY
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 6vw, 56px)',
            lineHeight: 1.05,
            marginBottom: '14px',
          }}
        >
          Visual work.
        </h1>

        <p style={{ color: 'rgba(244,241,235,0.5)', fontSize: '15px', lineHeight: 1.85, maxWidth: '560px' }}>
          A small selection of images I’ve taken
        </p>
      </motion.div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '28px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.06em',
              padding: '8px 14px',
              border: `1px solid ${active === cat ? 'rgba(201,168,76,0.75)' : 'rgba(255,255,255,0.10)'}`,
              background: active === cat ? 'rgba(201,168,76,0.10)' : 'transparent',
              color: active === cat ? '#C9A84C' : 'rgba(244,241,235,0.40)',
              transition: 'all 0.2s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div style={{ columns: '2', columnGap: '12px' }}>
        {filtered.map((photo, i) => (
          <motion.div
            key={photo.id}
            className="photo-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            style={{ breakInside: 'avoid', marginBottom: '12px' }}
          >
      <div style={{ position: 'relative', border: '1px solid rgba(255,255,255,0.06)' }}>
        <img
          src={photo.src}
          alt={photo.label}
          loading="lazy"
          style={{
            width: '100%',
            height: `${photo.h}px`,
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at 30% 40%, ${accents[i % accents.length]}, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
    </div>

            <div style={{ paddingTop: '10px', paddingBottom: '6px' }}>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '16px',
                  color: 'rgba(244,241,235,0.80)',
                  marginBottom: '2px',
                }}
              >
                {photo.label}
              </p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'rgba(244,241,235,0.35)' }}>
                {photo.cat}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}