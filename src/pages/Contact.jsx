import { useState } from 'react'
import { motion } from 'framer-motion'

const types = [
  'Full-time Software Role',
  'Internship / New Grad',
  'Contract / Freelance Software',
  'Collaboration',
  'General',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: types[0], message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/xbdavrrd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', type: types[0], message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '48px 40px 88px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '56px' }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: '#C9A84C',
            letterSpacing: '0.15em',
            marginBottom: '16px',
          }}
        >
          CONTACT
        </p>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 6vw, 68px)', marginBottom: '20px' }}>
          Let’s connect.
        </h1>

        <p style={{ color: 'rgba(244,241,235,0.5)', fontSize: '16px', lineHeight: 1.75, maxWidth: '560px' }}>
          Open to software engineering opportunities and collaborations. If you’re reaching out about a role, include the stack, team, and what you’re building.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '64px' }}>
        {/* Form */}
        <div>
          {status === 'sent' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                border: '1px solid rgba(201,168,76,0.3)',
                background: 'rgba(201,168,76,0.04)',
                padding: '56px',
                textAlign: 'center',
              }}
            >
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontStyle: 'italic', marginBottom: '10px' }}>
                Message received.
              </p>
              <p style={{ color: 'rgba(244,241,235,0.45)', fontSize: '14px', marginBottom: '24px' }}>
                I’ll reply soon.
              </p>
              <button
                onClick={() => setStatus(null)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: '#C9A84C',
                  background: 'none',
                  border: 'none',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Send another →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} name="contact" data-netlify="true" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="hidden" name="form-name" value="contact" />

              <div style={{ display: 'none' }}>
                <label>
                  Don’t fill this out: <input name="bot-field" onChange={onChange} />
                </label>
              </div>

              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(244,241,235,0.35)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  NAME *
                </p>
                <input className="form-input" name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
              </div>

              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(244,241,235,0.35)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  EMAIL *
                </p>
                <input className="form-input" type="email" name="email" value={form.email} onChange={onChange} placeholder="your@email.com" required />
              </div>

              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(244,241,235,0.35)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  INQUIRY TYPE
                </p>
                <select className="form-input" name="type" value={form.type} onChange={onChange}>
                  {types.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(244,241,235,0.35)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  MESSAGE *
                </p>
                <textarea
                  className="form-input"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me about the role or project (team, stack, timeline, and what you need help with)."
                  rows={6}
                  required
                  style={{ resize: 'none' }}
                />
              </div>

              {status === 'error' && (
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#f87171' }}>
                  Something went wrong. Please email me directly instead.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  background: '#C9A84C',
                  color: '#0B1121',
                  padding: '15px',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  border: 'none',
                  opacity: status === 'sending' ? 0.6 : 1,
                  transition: 'background 0.2s, opacity 0.2s',
                  cursor: status === 'sending' ? 'default' : 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (status !== 'sending') e.currentTarget.style.background = '#E8C97A'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#C9A84C'
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingTop: '4px' }}>
          <div className="reveal">
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '14px' }}>
              EMAIL
            </p>
            <a href="mailto:StuartAriza@gmail.com" style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', color: '#F4F1EB', textDecoration: 'none' }}>
              StuartAriza@gmail.com
            </a>
          </div>

          <div className="reveal">
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '14px' }}>
              CONNECT
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raulariza/' },
                { label: 'GitHub', href: 'https://github.com/stuartariza' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                  style={{
                    fontSize: '14px',
                    color: 'rgba(244,241,235,0.5)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ borderLeft: '2px solid rgba(201,168,76,0.4)', paddingLeft: '16px' }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '14px', color: 'rgba(244,241,235,0.45)', lineHeight: 1.7 }}>
              “Open to junior software engineering roles — full-time or contract. Based in Calgary, available remote or hybrid.”
            </p>
          </div>

          <div className="reveal">
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', marginBottom: '14px' }}>
              RESPONSE TIME
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(244,241,235,0.4)', lineHeight: 1.6 }}>
              Within 24 hours on weekdays.<br />
              Calgary time (MT).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}