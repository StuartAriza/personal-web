import { motion } from 'framer-motion'

const experience = [
  {
    company: '1nd AI',
    role: 'Software Developer',
    period: 'Dec 2025 – Present',
    location: 'Calgary, AB · Remote',
    bullets: [
      'Designed and implemented an automated order-validation system for a retail business to improve fulfillment accuracy and reporting reliability.',
      'Built logic to flag incomplete, inconsistent, or mismatched customer orders using structured data processing pipelines.',
      'Developed scheduled validation workflows to run autonomously without manual intervention.',
      'Generated structured PDF discrepancy reports using Python (ReportLab/PyPDF) for operational visibility and audit tracking.',
      'Collaborated directly with stakeholders to translate business requirements into maintainable, scalable automation solutions.',
    ],
  },
  {
    company: 'Grey Eagle Casino',
    role: 'Surveillance Operator',
    period: 'Apr 2024 – Present',
    location: 'Calgary, AB',
    bullets: [
      'Monitored casino operations within a highly regulated environment, applying structured risk assessment and compliance protocols.',
      'Investigated operational irregularities and prepared detailed incident documentation supporting audit and regulatory processes.',
      'Maintained data integrity and procedural transparency across surveillance workflows.',
      'Worked cross-functionally with compliance and security teams to uphold operational standards.',
    ],
  },
  {
    company: 'Broil King',
    role: 'Operations & Sales Intern',
    period: 'May 2024 – Present',
    location: 'Calgary, AB',
    bullets: [
      'Managed logistics and part deliveries across 17+ warehouse and retail locations, optimizing coordination workflows.',
      'Maintained structured operational oversight across regional stores, reinforcing process consistency and accountability.',
      'Developed client-facing communication and stakeholder coordination skills in fast-paced environments.',
    ],
  },
]

const education = [
  {
    school: 'Wilfrid Laurier University',
    degree: 'Computer Science, BS',
    period: '20XX – 20XX',
    note: 'Update this with your actual education',
  },
]

const skills = {
  'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'D3.js'],
  'Backend & Data': ['Python', 'Node.js', 'PostgreSQL', 'REST APIs', 'WebSockets'],
  'Fintech Relevant': ['Real-time Data', 'Anomaly Detection', 'Risk Dashboards', 'Audit Logging'],
  'Tools': ['Git', 'Docker', 'Vite', 'Pytest', 'CI/CD', 'Figma'],
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
          <a href="/resume.pdf" download style={{
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
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }} style2={{ transitionDelay: `${i * 0.1}s` }}>
              <div>
                <p style={{ fontWeight: 500, marginBottom: '4px', color: '#F4F1EB' }}>{job.company}</p>
                <p style={{ fontSize: '12px', color: '#C9A84C', fontFamily: "'JetBrains Mono', monospace', marginBottom: '4px'" }}>{job.period}</p>
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

      <div style={{ marginTop: '56px', padding: '14px 18px', border: '1px dashed rgba(255,255,255,0.1)', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(244,241,235,0.25)' }}>
        // Place your CV at <code style={{ color: 'rgba(201,168,76,0.5)' }}>public/resume.pdf</code> for the download button · Edit experience in <code style={{ color: 'rgba(201,168,76,0.5)' }}>src/pages/Resume.jsx</code>
      </div>
    </div>
  )
}
