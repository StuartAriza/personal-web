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
                OPEN TO SOFTWARE ROLES · JUNIOR SWE
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(44px, 7vw, 82px)',
              lineHeight: 1.05,
              marginBottom: '24px',
              maxWidth: '720px',
            }}>
              Raul<br />
              <span style={{ color: '#C9A84C'}}>Boonstra-Ariza</span> 
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: 'rgba(244,241,235,0.65)',
              maxWidth: '540px',
              lineHeight: 1.75,
              marginBottom: '44px',
            }}>
          A Software engineer focused on building reliable, data-driven systems.
          Experience in detection, automation, and production-ready web applications
 
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
      {/* ── Tech stack strip ──────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 40px' }}>
          {[
            {
              label: 'Core Technologies',
              items: ['JavaScript', 'TypeScript', 'Python', ],
            },
            {
              label: 'Frontend',
              items: ['React', 'Next.js', 'Tailwind CSS'],
            },
            {
              label: 'Backend & Data',
              items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'WebSockets'],
            },
            {
              label: 'Tools',
              items: ['Git', 'Docker', 'CI/CD'],
            },
          ].map((group, i) => (
            <div key={group.label} className="reveal" style={{
              display: 'flex', alignItems: 'baseline', gap: '32px',
              padding: '24px 0',
              borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              transitionDelay: `${i * 0.08}s`,
            }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px', color: '#C9A84C',
                letterSpacing: '0.12em', flexShrink: 0,
                width: '180px',
              }}>
                {group.label.toUpperCase()}
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {group.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
          
          
        </div>
      </section>

{/* ── Featured Projects ─────────────────────────────────── */}
<section style={{ maxWidth: '1000px', margin: '0 auto', padding: '88px 40px' }}>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '56px',
      flexWrap: 'wrap',
      gap: '12px',
    }}
  >
    <div>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: '#C9A84C',
          letterSpacing: '0.15em',
          marginBottom: '12px',
        }}
      >
        FEATURED PROJECTS
      </p>

      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px, 4vw, 40px)',
        }}
      >
        Selected work.
      </h2>
    </div>

    <Link
      to="/projects"
      className="nav-link"
      style={{
        fontSize: '13px',
        color: 'rgba(244,241,235,0.45)',
        textDecoration: 'none',
      }}
    >
      All projects →
    </Link>
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
    {recentProjects.map((p, i) => (
      <Link
        key={p.title}
        to="/projects"
        style={{ textDecoration: 'none' }}
      >
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          style={{
            padding: '32px 36px',
            display: 'flex',
            gap: '28px',
            alignItems: 'flex-start',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            transition: 'background 0.3s ease',
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: '#C9A84C',
              flexShrink: 0,
              marginTop: '4px',
            }}
          >
            {p.num}
          </span>

          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '10px',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '20px',
                }}
              >
                {p.title}
              </h3>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    color: '#C9A84C',
                    border: '1px solid rgba(201,168,76,0.3)',
                    padding: '3px 10px',
                    background: 'rgba(201,168,76,0.08)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {p.category}
                </span>

                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: 'rgba(244,241,235,0.3)',
                  }}
                >
                  {p.year}
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: '14px',
                color: 'rgba(244,241,235,0.55)',
                lineHeight: 1.7,
                marginBottom: '16px',
                maxWidth: '650px',
              }}
            >
              {p.desc}
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <span
            style={{
              color: 'rgba(201,168,76,0.3)',
              fontSize: '18px',
              flexShrink: 0,
              transition: 'transform 0.3s ease',
            }}
          >
            ↗
          </span>
        </motion.div>
      </Link>
    ))}
  </div>
</section>

{/* ── About strip ───────────────────────────────────── */}
<section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
  <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '88px 40px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', alignItems: 'start' }}>
    <div className="reveal">
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '16px' }}>ABOUT</p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 38px)', lineHeight: 1.2 }}>
        Reliability<br /><em>by design.</em>
      </h2>
    </div>

    <div className="reveal">
      <p style={{ fontSize: '16px', color: 'rgba(244,241,235,0.65)', lineHeight: 1.85, marginBottom: '20px' }}>
        I build software for environments where speed and correctness matter. My background in casino surveillance exposed me to real-time workflows,
        edge cases, and operational decision-making — the kind of constraints that quickly reveal whether a system is actually dependable.
      </p>

      <p style={{ fontSize: '16px', color: 'rgba(244,241,235,0.65)', lineHeight: 1.85, marginBottom: '28px' }}>
        I’m most comfortable working across the stack: designing clean interfaces in React, building backend logic in Python, and connecting everything with
        well-structured data and predictable behavior. I’m currently looking for a junior software engineering role where I can ship useful features and keep improving fast.
      </p>

      <Link to="/resume" className="nav-link" style={{ fontSize: '13px', color: '#C9A84C', textDecoration: 'none' }}>
        See full resume →
      </Link>
    </div>
  </div>
</section>

{/* ── Photography ─────────────────────────────── */}
<section style={{ maxWidth: '1000px', margin: '0 auto', padding: '64px 40px' }} className="reveal">
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: '24px',
      flexWrap: 'wrap',
      paddingTop: '18px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}
  >
    <div>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: 'rgba(244,241,235,0.35)',
          letterSpacing: '0.15em',
          marginBottom: '10px',
        }}
      >
        ALSO
      </p>

      <p style={{ color: 'rgba(244,241,235,0.55)', fontSize: '14px', lineHeight: 1.7, maxWidth: '620px' }}>
        Photography gallery — Things I thought looked cool
      </p>
    </div>

    <Link
      to="/photography"
      className="nav-link"
      style={{
        fontSize: '13px',
        color: 'rgba(244,241,235,0.45)',
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      View gallery →
    </Link>
  </div>
</section>
    </div>
  )
}
