import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Detection & Alerting Engine',
    category: 'Detection System',
    focus: 'Detection',
    year: '2024',
    tags: ['Python', 'Computer Vision', 'PostgreSQL', 'WebSockets', 'React'],
    desc: 'Real-time video analysis pipeline that ingests multi-stream inputs, scores events, and triggers operator alerts. Built with a focus on low-latency signaling, configurable thresholds, and reducing false positives in operational workflows.',
    result: 'Alerting workflow with configurable thresholds + logged evaluations',
    type: 'detection',
    github: null,
    live: null,
  },
  {
    id: 2,
    title: 'Surveillance Monitoring Dashboard',
    category: 'Monitoring Interface',
    focus: 'Monitoring',
    year: '2024',
    tags: ['React', 'TypeScript', 'WebSockets', 'D3.js', 'REST APIs'],
    desc: 'Operator-facing dashboard for live events, timelines, and risk indicators. Designed for fast scanning under pressure with resilient real-time updates and clear state handling.',
    result: 'Smooth real-time UI updates with stable rendering under frequent events',
    type: 'dashboard',
    github: null,
    live: null,
  },
  {
  id: 6,
  title: 'Stock Monitor — Real-Time Alerts',
  category: 'Full-Stack System',
  focus: 'Real-time',
  year: '2026',
  tags: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'WebSockets', 'React', 'TypeScript', 'Docker'],
  desc: 'Full-stack stock monitoring platform that polls prices, stores history, evaluates rule-based alerts, and streams live updates via WebSockets. Built for production-style workflow with Docker Compose, Prisma migrations, and Discord webhook alerting (optional).',
  result: 'Live price feed + stored history + rule engine + real-time UI updates',
  type: 'web',
  github: 'https://github.com/StuartAriza/Stock-Monitor',
  live: null,
  },
  {
    id: 4,
    title: 'Automation Test Harness',
    category: 'Developer Tool',
    focus: 'Automation',
    year: '2023',
    tags: ['Python', 'Pytest', 'Docker', 'CI/CD'],
    desc: 'Regression test suite for core components with repeatable fixtures and CI gating. Focused on catching breaking changes early and keeping deploys predictable.',
    result: 'Reduced manual test passes and improved confidence in changes',
    type: 'tool',
    github: 'https://github.com',
    live: null,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: 'Web Application',
    focus: 'Frontend',
    year: '2024',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    desc: 'Personal portfolio built with a focus on typography, hierarchy, and fast navigation. Includes project case studies, resume, and contact flow.',
    result: 'Responsive, accessible layout with smooth motion and clear content structure',
    type: 'web',
    github: 'https://github.com',
    live: '/',
  },
]

function BrowserFrame({ title }) {
  return (
    <div style={{ border: '1px solid rgba(255,255,255,0.06)', marginBottom: '20px' }}>
      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        {['rgba(255,255,255,0.12)', 'rgba(255,255,255,0.12)', 'rgba(255,255,255,0.12)'].map((c, i) => (
          <span key={i} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, display: 'inline-block' }} />
        ))}
        <span style={{ flex: 1, fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'rgba(244,241,235,0.25)', textAlign: 'center' }}>
          localhost:5173
        </span>
      </div>
      <div style={{
        height: '120px',
        background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(11,17,33,0.8) 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontStyle: 'italic', color: 'rgba(201,168,76,0.2)' }}>{title}</span>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 40px 88px' }}>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '16px' }}>PORTFOLIO</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 6vw, 68px)', marginBottom: '16px' }}>Projects</h1>
        <p style={{ color: 'rgba(244,241,235,0.5)', fontSize: '16px', lineHeight: 1.75, maxWidth: '520px', marginBottom: '64px' }}>
          Detection systems, dashboards, and automation tools — built with precision and designed for environments where correctness is non-negotiable.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))', gap: '2px' }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', gap: '12px' }}>
              <div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#C9A84C', letterSpacing: '0.1em' }}>
                  {String(i + 1).padStart(2, '0')} · {p.year}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.25)', padding: '2px 8px', background: 'rgba(201,168,76,0.06)' }}>
                  {p.focus}
                </span>
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(244,241,235,0.35)', textDecoration: 'none' }}>GH ↗</a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', textDecoration: 'none' }}>Live ↗</a>}
              </div>
            </div>

            {/* Browser frame for web projects */}
            {(p.type === 'web' || p.type === 'dashboard' || p.type === 'fintech') && <BrowserFrame title={p.title} />}

            {/* Content */}
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '21px', marginBottom: '10px' }}>{p.title}</h3>
            <p style={{ fontSize: '12px', color: 'rgba(201,168,76,0.6)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '12px', letterSpacing: '0.04em' }}>{p.category}</p>
            <p style={{ fontSize: '13px', color: 'rgba(244,241,235,0.55)', lineHeight: 1.72, flex: 1, marginBottom: '16px' }}>{p.desc}</p>

            {/* Result callout */}
            <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)', padding: '10px 14px', marginBottom: '16px' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.08em' }}>RESULT — </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C' }}>{p.result}</span>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
