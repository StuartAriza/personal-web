import { motion } from 'framer-motion'

const experience = [
  {
    company: '1nd AI',
    role: 'Software Developer',
    period: 'Dec 2025 – Present',
    location: 'Calgary, AB · Remote',
    bullets: [
      'Engineered an automated order-validation system improving fulfillment accuracy and reducing manual review overhead.',
      'Designed structured data pipelines to detect incomplete, inconsistent, or high-risk transactions.',
      'Implemented scheduled background workflows to ensure autonomous validation and reporting.',
      'Built PDF discrepancy reporting tools using Python (ReportLab, PyPDF) for audit and operational visibility.',
      'Worked directly with stakeholders to translate business requirements into maintainable backend systems.',
    ],
  },
  {
    company: 'Grey Eagle Casino',
    role: 'Surveillance Analyst',
    period: 'Apr 2024 – Present',
    location: 'Calgary, AB',
    bullets: [
      'Monitored live operations in a highly regulated gaming environment with zero tolerance for error.',
      'Identified irregular activity patterns and produced structured documentation for investigations.',
      'Applied compliance and risk protocols requiring sustained attention to detail and discretion.',
      'Maintained audit-ready reporting aligned with regulatory standards.',
    ],
  },
  {
    company: 'Broil King',
    role: 'Operations & Sales Intern',
    period: 'Apr 2022 – Sep 2022',
    location: 'Calgary, AB',
    bullets: [
      'Coordinated logistics operations across 17+ warehouse and retail distribution locations.',
      'Built a route-optimization script to determine the fastest path across all warehouse stops.',
      'Tracked inventory movement and maintained structured reporting workflows.',
      'Improved cross-functional communication between sales, operations, and distribution teams.',
    ],
  },
]

const education = [
  {
    school: 'Wilfrid Laurier University',
    degree: 'Bachelor of Science in Computer Science',
    period: '2019 – 2023',
    note: 'VP of Events – Laurier Fintech Association · VP of Operations – Laurier Latin Society',
  },
]

const skills = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  'Backend & Data': ['Python', 'Node.js', 'Express', 'Django', 'Flask', 'REST APIs'],
  'Databases': ['PostgreSQL', 'Microsoft SQL Server', 'Oracle SQL'],
  'Tools': ['Git', 'Docker', 'AWS', 'Azure ML', 'Firebase', 'CI/CD'],
}

export default function Resume() {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 40px 88px' }}>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '14px' }}>CURRICULUM VITAE</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 60px)', marginBottom: '6px' }}>Raul Boonstra-Ariza</h1>
            <p style={{ color: 'rgba(244,241,235,0.5)', fontSize: '17px' }}>Software Developer</p>
          </div>
          <a href="/Raul_Boonstra-Ariza_Resume.pdf" download style={{
            background: '#C9A84C', color: '#0B1121',
            padding: '13px 24px', fontSize: '13px', fontWeight: 600,
            letterSpacing: '0.04em', textDecoration: 'none', flexShrink: 0,
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.target.style.background = '#E8C97A'}
            onMouseLeave={e => e.target.style.background = '#C9A84C'}
          >
            ↓ Download PDF
          </a>
        </div>
      </motion.div>

      {/* Experience */}
      <section style={{ marginBottom: '56px' }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '36px' }}>EXPERIENCE</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {experience.map((job, i) => (
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }}>
              <div>
                <p style={{ fontWeight: 500, marginBottom: '4px', color: '#F4F1EB' }}>{job.company}</p>
                <p style={{ fontSize: '12px', color: '#C9A84C', fontFamily: "'JetBrains Mono', monospace", marginBottom: '4px' }}>{job.period}</p>
                <p style={{ fontSize: '12px', color: 'rgba(244,241,235,0.35)' }}>{job.location}</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', marginBottom: '16px' }}>{job.role}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: '12px', fontSize: '13px', color: 'rgba(244,241,235,0.55)', lineHeight: 1.7 }}>
                      <span style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" style={{ marginBottom: '48px' }} />

      {/* Education */}
      <section style={{ marginBottom: '56px' }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '36px' }}>EDUCATION</p>
        {education.map((e, i) => (
          <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }}>
            <div>
              <p style={{ fontWeight: 500, color: '#F4F1EB' }}>{e.school}</p>
              <p style={{ fontSize: '12px', color: 'rgba(244,241,235,0.35)', marginTop: '4px' }}>{e.period}</p>
            </div>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px' }}>{e.degree}</p>
              {e.note && <p style={{ fontSize: '12px', color: 'rgba(244,241,235,0.3)', marginTop: '6px', fontStyle: 'italic' }}>{e.note}</p>}
            </div>
          </div>
        ))}
      </section>

      <hr className="divider" style={{ marginBottom: '48px' }} />

      {/* Skills */}
      <section className="reveal">
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '36px' }}>SKILLS</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {Object.entries(skills).map(([cat, list]) => (
            <div key={cat}>
              <p style={{ fontWeight: 500, marginBottom: '12px', color: '#F4F1EB', fontSize: '14px' }}>{cat}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {list.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}