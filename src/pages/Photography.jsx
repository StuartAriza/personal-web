import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['All', 'Architecture', 'Events', 'Product', 'Portrait']

// Replace placeholders with real images later:
// { src: '/photos/steel-light.jpg', ... }
const photos = [
  { id: 1, cat: 'Architecture', label: 'Steel & Light', h: 300, bg: 'linear-gradient(160deg, #1a2035 0%, #0d1525 100%)' },
  { id: 2, cat: 'Events', label: 'Annual Conference', h: 200, bg: 'linear-gradient(160deg, #1e1a28 0%, #12101e 100%)' },
  { id: 3, cat: 'Product', label: 'Instrument Series', h: 230, bg: 'linear-gradient(160deg, #1a2030 0%, #0f1822 100%)' },
  { id: 4, cat: 'Architecture', label: 'Atrium Study', h: 260, bg: 'linear-gradient(160deg, #111827 0%, #0b1121 100%)' },
  { id: 5, cat: 'Portrait', label: 'Corporate Session', h: 310, bg: 'linear-gradient(160deg, #1c2436 0%, #0e1728 100%)' },
  { id: 6, cat: 'Events', label: 'Product Launch', h: 190, bg: 'linear-gradient(160deg, #161d2e 0%, #0b1121 100%)' },
  { id: 7, cat: 'Product', label: 'Detail Work', h: 220, bg: 'linear-gradient(160deg, #1a2535 0%, #0f1a2a 100%)' },
  { id: 8, cat: 'Architecture', label: 'Facade at Dusk', h: 250, bg: 'linear-gradient(160deg, #131c2c 0%, #0b1121 100%)' },
]

// Subtle gold accent overlays per photo
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
          A small selection of images I’ve taken — mostly architecture, events, and product detail. This is a personal gallery, separate from my software work.
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
            <div
              style={{
                height: `${photo.h}px`,
                background: photo.bg,
                position: 'relative',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle at 30% 40%, ${accents[i % accents.length]}, transparent 70%)`,
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