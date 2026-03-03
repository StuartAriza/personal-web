import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Card Counting Detection Engine',
    category: 'AI Detection System',
    focus: 'Computer Vision',
    year: '2025',
    tags: ['Python', 'Computer Vision', 'Probabilistic Modelling', 'PostgreSQL', 'WebSockets', 'React'],
    desc: 'AI-powered surveillance system that analyzes blackjack gameplay to detect card counting behavior in real time. Combines computer vision signal processing with probabilistic risk modelling to score player activity and trigger operator alerts with low latency.',
    result: 'Real-time risk scoring pipeline with configurable alert thresholds and logged evaluations',
    github: null,
    live: null,
    focus_label: 'Computer Vision',
  },
  {
    id: 2,
    title: 'Fraud Detection Simulator',
    category: 'Fintech Risk System',
    focus: 'Fraud Detection',
    year: '2025',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
    desc: 'End-to-end transaction monitoring system simulating real-time fraud detection. Implements modular rule-based risk scoring, API-driven transaction ingestion, composite fraud evaluation, and an operator dashboard for reviewing flagged activity.',
    result: 'Containerized fraud scoring pipeline with real-time monitoring and modular rule engine',
    github: 'https://github.com/StuartAriza/fraud-detection-simulator',
    live: null,
  },
  {
    id: 3,
    title: 'Stock Monitor — Real-Time Alerts',
    category: 'Full-Stack System',
    focus: 'Real-time Systems',
    year: '2026',
    tags: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'WebSockets', 'React', 'TypeScript', 'Docker'],
    desc: 'Production-style stock monitoring platform that polls live market data, stores historical pricing, evaluates rule-based alerts, and streams updates to a live dashboard via WebSockets. Includes Dockerized services and optional Discord webhook notifications.',
    result: 'Live ingestion + historical persistence + rule engine + real-time UI streaming',
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
    github: 'https://github.com',
    live: null,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: 'Web Application',
    focus: 'Frontend',
    year: '2026',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    desc: 'Personal portfolio built with a focus on typography, hierarchy, and fast navigation. Includes project case studies, resume, and contact flow.',
    result: 'Responsive, accessible layout with smooth motion and clear content structure',
    github: 'https://github.com/StuartAriza/personal-web',
    live: 'https://raulboonstra-ariza.netlify.app',
  },
]

export default function Projects() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 24px 88px' }}>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
          gap: 2px;
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ paddingBottom: '64px' }}
      >
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '16px' }}>PORTFOLIO</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 6vw, 68px)', marginBottom: '16px' }}>Projects</h1>
        <p style={{ color: 'rgba(244,241,235,0.5)', fontSize: '16px', lineHeight: 1.75, maxWidth: '520px' }}>
          Detection systems, dashboards, and automation tools — built with precision and designed for environments where correctness is non-negotiable.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}
          >
            {/* Header row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#C9A84C', letterSpacing: '0.1em' }}>
                {String(i + 1).padStart(2, '0')} · {p.year}
              </span>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.25)', padding: '2px 8px', background: 'rgba(201,168,76,0.06)' }}>
                  {p.focus}
                </span>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(244,241,235,0.35)', textDecoration: 'none' }}>
                    GH ↗
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', textDecoration: 'none' }}>
                    Live ↗
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px, 3vw, 21px)', marginBottom: '8px' }}>{p.title}</h3>
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