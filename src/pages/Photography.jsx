import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const categories = ['All', 'Architecture', 'Events', 'Product', 'Portrait']

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
  'rgba(201,168,76,0.08)', 'rgba(201,168,76,0.04)', 'rgba(201,168,76,0.06)',
  'rgba(201,168,76,0.05)', 'rgba(201,168,76,0.07)', 'rgba(201,168,76,0.04)',
  'rgba(201,168,76,0.06)', 'rgba(201,168,76,0.05)',
]

export default function Photography() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? photos : photos.filter(p => p.cat === active)

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 40px 88px' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: '56px' }}>
        {/* Recruiter note */}
        <div style={{
          display: 'inline-flex', gap: '10px', alignItems: 'center',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '8px 16px', marginBottom: '32px',
          fontFamily: "'JetBrains Mono', monospace", fontSize: '11px',
          color: 'rgba(244,241,235,0.35)', letterSpacing: '0.06em',
        }}>
          <span style={{ color: '#C9A84C' }}>ℹ</span>
          SECONDARY SERVICE · PRIMARY ROLE IS SOFTWARE ENGINEERING
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.05, marginBottom: '20px' }}>
          A second discipline,<br /><em style={{ color: '#C9A84C' }}>not a second job.</em>
        </h1>
        <p style={{ color: 'rgba(244,241,235,0.5)', fontSize: '16px', lineHeight: 1.8, maxWidth: '480px' }}>
          I take on a small number of commissions each year — architecture, corporate events, and product work.
          The same attention to detail I bring to software: clean, uncluttered, no lifestyle packages.
        </p>
      </motion.div>

      {/* Filter buttons */}
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', letterSpacing: '0.06em',
            padding: '8px 16px',
            border: `1px solid ${active === cat ? '#C9A84C' : 'rgba(255,255,255,0.1)'}`,
            background: active === cat ? 'rgba(201,168,76,0.1)' : 'transparent',
            color: active === cat ? '#C9A84C' : 'rgba(244,241,235,0.4)',
            transition: 'all 0.2s',
          }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry gallery */}
      <div style={{ columns: '2', columnGap: '12px', marginBottom: '80px' }}>
        {filtered.map((photo, i) => (
          <motion.div
            key={photo.id}
            className="photo-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            style={{ breakInside: 'avoid', marginBottom: '12px' }}
          >
            <div style={{
              height: `${photo.h}px`,
              background: photo.bg,
              position: 'relative',
            }}>
              {/* Gold accent overlay */}
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 30% 40%, ${accents[i % accents.length]}, transparent 70%)` }} />
            </div>
            <div className="photo-overlay">
              <p className="photo-label">{photo.label}</p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'rgba(244,241,235,0.4)', opacity: 0, transition: 'opacity 0.3s 0.05s' }}
                onMouseEnter={e => e.target.style.opacity = '1'}
              >
                {photo.cat}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <hr className="divider" style={{ marginBottom: '64px' }} />

      {/* Services & Pricing */}
      <section style={{ marginBottom: '64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '10px' }}>COMMISSIONS</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px' }}>Available Work</h2>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(244,241,235,0.35)', maxWidth: '300px', lineHeight: 1.6 }}>
            Limited availability. I keep the client list small to maintain quality.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {[
            {
              type: 'Architecture',
              price: 'from €280',
              desc: 'Interiors, facades, urban structures. Clean geometric compositions.',
              deliverables: '40+ edited, 48hr turnaround',
            },
            {
              type: 'Corporate Events',
              price: 'from €450',
              desc: 'Conferences, product launches, team days. Candid and staged.',
              deliverables: '80+ edited, online gallery',
            },
            {
              type: 'Product & Brand',
              price: 'from €320',
              desc: 'Product photography for digital use. Minimal, detail-focused.',
              deliverables: 'Packaged for web & print use',
            },
          ].map((s, i) => (
            <div key={s.type} className="reveal project-card" style={{ padding: '28px', transitionDelay: `${i * 0.1}s` }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#C9A84C', marginBottom: '8px', letterSpacing: '0.08em' }}>
                {s.type.toUpperCase()}
              </p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', marginBottom: '4px' }}>{s.price}</p>
              <p style={{ fontSize: '13px', color: 'rgba(244,241,235,0.5)', lineHeight: 1.65, marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '16px' }}>
                {s.desc}
              </p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(201,168,76,0.6)' }}>
                {s.deliverables}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="reveal" style={{
        border: '1px solid rgba(255,255,255,0.07)',
        padding: '56px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '32px',
        background: 'rgba(255,255,255,0.01)',
      }}>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontStyle: 'italic', marginBottom: '8px' }}>Enquire about availability</h2>
          <p style={{ color: 'rgba(244,241,235,0.4)', fontSize: '14px' }}>I respond within 24 hours. No obligation.</p>
        </div>
        <Link to="/contact" style={{
          background: 'transparent', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C',
          padding: '12px 24px', textDecoration: 'none', fontSize: '13px',
          fontWeight: 500, letterSpacing: '0.04em', flexShrink: 0,
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.target.style.background = 'rgba(201,168,76,0.1)' }}
          onMouseLeave={e => { e.target.style.background = 'transparent' }}
        >
          Get in Touch →
        </Link>
      </div>
    </div>
  )
}
