import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function Counter({ to, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(to / 40)
        const id = setInterval(() => {
          start = Math.min(start + step, to)
          setCount(start)
          if (start >= to) clearInterval(id)
        }, 30)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])

  return <span ref={ref}>{count}{suffix}</span>
}

const recentProjects = [
  {
    num: '01',
    title: 'Card-Counting Detection Engine',
    year: '2024',
    desc: 'Real-time surveillance system that flags anomalous betting patterns using probabilistic modelling across live video streams.',
    tags: ['Python', 'React', 'Computer Vision', 'Real-time'],
    relevance: 'Fraud Detection',
  },
  {
    num: '02',
    title: 'Casino Automation Dashboard',
    year: '2024',
    desc: 'Operator-facing monitoring interface surfacing live alerts, bet-history timelines, and risk scores with sub-second latency.',
    tags: ['React', 'WebSocket', 'Data Viz'],
    relevance: 'Risk Systems',
  },
  {
    num: '03',
    title: 'PayFlow Dashboard',
    year: '2023',
    desc: 'Multi-currency payment monitoring interface with real-time transaction feeds, anomaly alerts, and exportable audit logs.',
    tags: ['React', 'TypeScript', 'REST APIs'],
    relevance: 'Fintech',
  },
]

export default function Home() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="grid-bg" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Gold gradient glow */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 40px', width: '100%' }}>
          <motion.div variants={stagger} initial="hidden" animate="show">

            <motion.div variants={fadeUp} style={{ marginBottom: '28px' }}>
              <span className="available-badge">
                <span className="dot" />
                OPEN TO FINTECH ROLES · JUNIOR SWE
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(44px, 7vw, 82px)',
              lineHeight: 1.05,
              marginBottom: '24px',
              maxWidth: '720px',
            }}>
              Building precise,<br />
              <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>data-driven</span> software.
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: 'rgba(244,241,235,0.65)',
              maxWidth: '540px',
              lineHeight: 1.75,
              marginBottom: '44px',
            }}>
              I'm <strong style={{ color: '#F4F1EB', fontWeight: 500 }}>Raul Boonstra-Ariza</strong> — a software engineer
              specializing in detection systems, automation, and financial-grade web applications.
              Currently seeking a junior fintech engineering role.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/projects" style={{
                background: '#C9A84C', color: '#0B1121',
                padding: '13px 28px', fontSize: '13px', fontWeight: 600,
                letterSpacing: '0.04em', textDecoration: 'none',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.target.style.background = '#E8C97A'}
                onMouseLeave={e => e.target.style.background = '#C9A84C'}
              >
                View Projects →
              </Link>
              <Link to="/resume" style={{
                border: '1px solid rgba(244,241,235,0.2)', color: '#F4F1EB',
                padding: '13px 28px', fontSize: '13px', fontWeight: 500,
                letterSpacing: '0.04em', textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                onMouseLeave={e => e.target.style.borderColor = 'rgba(244,241,235,0.2)'}
              >
                Download Resume
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { val: 3, suffix: '+', label: 'Detection systems built' },
            { val: 99, suffix: '%', label: 'Detection accuracy' },
            { val: 5, suffix: '+', label: 'Production projects' },
            { val: 2, suffix: '', label: 'Languages (React · Python)' },
          ].map((s, i) => (
            <div key={i} className="reveal" style={{
              padding: '36px 0',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              paddingLeft: i > 0 ? '32px' : '0',
              transitionDelay: `${i * 0.08}s`,
            }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#C9A84C', marginBottom: '4px' }}>
                <Counter to={s.val} suffix={s.suffix} />
              </p>
              <p style={{ fontSize: '12px', color: 'rgba(244,241,235,0.45)', letterSpacing: '0.03em' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Selected work ─────────────────────────────────── */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '88px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '48px' }}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '10px' }}>SELECTED WORK</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)' }}>Projects that matter.</h2>
          </div>
          <Link to="/projects" className="nav-link" style={{ fontSize: '13px', color: 'rgba(244,241,235,0.45)', textDecoration: 'none' }}>All projects →</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {recentProjects.map((p, i) => (
            <motion.div
              key={p.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ padding: '28px 32px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}
            >
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', flexShrink: 0, marginTop: '4px' }}>{p.num}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px' }}>{p.title}</h3>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', padding: '2px 8px', background: 'rgba(201,168,76,0.08)' }}>
                      {p.relevance}
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(244,241,235,0.3)' }}>{p.year}</span>
                  </div>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(244,241,235,0.55)', lineHeight: 1.7, marginBottom: '14px' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <span style={{ color: 'rgba(201,168,76,0.3)', fontSize: '18px', flexShrink: 0 }}>↗</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── About strip ───────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '88px 40px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', alignItems: 'start' }}>
          <div className="reveal">
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '16px' }}>ABOUT</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 38px)', lineHeight: 1.2 }}>
              Precision is<br /><em>the product.</em>
            </h2>
          </div>
          <div className="reveal">
            <p style={{ fontSize: '16px', color: 'rgba(244,241,235,0.65)', lineHeight: 1.85, marginBottom: '20px' }}>
              I build software that has to be <em>right</em> — not approximately right. My background in casino surveillance and card-detection systems taught me that precision, performance, and edge-case handling aren't optional extras.
            </p>
            <p style={{ fontSize: '16px', color: 'rgba(244,241,235,0.65)', lineHeight: 1.85, marginBottom: '28px' }}>
              I'm now applying that same mindset to fintech: systems where data integrity, real-time processing, and clean interfaces actually matter. I work primarily in React and Python, comfortable going deep into both the UI layer and the logic underneath it.
            </p>
            <Link to="/resume" className="nav-link" style={{ fontSize: '13px', color: '#C9A84C', textDecoration: 'none' }}>
              See full resume →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Photography CTA ───────────────────────────────── */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '88px 40px' }} className="reveal">
        <div style={{
          border: '1px solid rgba(255,255,255,0.07)',
          padding: '56px 64px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '32px',
          background: 'rgba(255,255,255,0.01)',
        }}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(244,241,235,0.3)', letterSpacing: '0.15em', marginBottom: '12px' }}>SECONDARY SERVICE</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '30px', fontStyle: 'italic', marginBottom: '8px' }}>Freelance Photography</h2>
            <p style={{ color: 'rgba(244,241,235,0.45)', fontSize: '14px', maxWidth: '360px', lineHeight: 1.65 }}>
              A small number of commissions each year — architecture, corporate events, and product work.
              Same obsession with detail, different medium.
            </p>
          </div>
          <Link to="/photography" style={{
            border: '1px solid rgba(244,241,235,0.2)', color: '#F4F1EB',
            padding: '12px 24px', textDecoration: 'none', fontSize: '13px',
            fontWeight: 500, letterSpacing: '0.04em', flexShrink: 0,
            transition: 'border-color 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.target.style.borderColor = '#C9A84C'; e.target.style.color = '#C9A84C' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(244,241,235,0.2)'; e.target.style.color = '#F4F1EB' }}
          >
            View Work →
          </Link>
        </div>
      </section>
    </div>
  )
}
