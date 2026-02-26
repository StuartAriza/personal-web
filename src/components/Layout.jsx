import { useEffect, useState } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: '#0B1121',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '24px',
              right: '28px',
              background: 'none',
              border: 'none',
              color: '#F4F1EB',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>

          {[
            { to: '/', label: 'Home', end: true },
            { to: '/projects', label: 'Projects' },
            { to: '/resume', label: 'Resume' },
            { to: '/photography', label: 'Photography' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '32px',
                color: '#F4F1EB',
                textDecoration: 'none',
              }}
            >
              {label}
            </NavLink>
          ))}

          {/* Mobile socials */}
          <div style={{ display: 'flex', gap: '14px', marginTop: '10px' }}>
            <a
              href="https://www.linkedin.com/in/raulariza/"
              target="_blank"
              rel="noreferrer"
              style={{
                border: '1px solid rgba(255,255,255,0.14)',
                padding: '10px 14px',
                textDecoration: 'none',
                color: 'rgba(244,241,235,0.8)',
                fontSize: '12px',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.05em',
              }}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/StuartAriza" 
              target="_blank"
              rel="noreferrer"
              style={{
                border: '1px solid rgba(255,255,255,0.14)',
                padding: '10px 14px',
                textDecoration: 'none',
                color: 'rgba(244,241,235,0.8)',
                fontSize: '12px',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.05em',
              }}
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.06, rootMargin: '0px 0px -24px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  })

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Nav */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 40px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(11,17,33,0.9)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '18px',
            textDecoration: 'none',
            color: '#F4F1EB',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          RBA<span style={{ color: '#C9A84C' }}>.</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {[
            { to: '/', label: 'Home', end: true },
            { to: '/projects', label: 'Projects' },
            { to: '/resume', label: 'Resume' },
            { to: '/photography', label: 'Photography' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              style={{
                fontSize: '13px',
                fontWeight: 500,
                textDecoration: 'none',
                color: 'rgba(244,241,235,0.7)',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </NavLink>
          ))}


          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginLeft: '10px',
              paddingLeft: '14px',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <a
              href="https://www.linkedin.com/in/raulariza/"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                letterSpacing: '0.08em',
                textDecoration: 'none',
                color: 'rgba(244,241,235,0.55)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '8px 10px',
                background: 'rgba(255,255,255,0.02)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)'
                e.currentTarget.style.color = '#C9A84C'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.color = 'rgba(244,241,235,0.55)'
              }}
            >
              LINKEDIN ↗
            </a>

            <a
              href="https://github.com/StuartAriza"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                letterSpacing: '0.08em',
                textDecoration: 'none',
                color: 'rgba(244,241,235,0.55)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '8px 10px',
                background: 'rgba(255,255,255,0.02)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)'
                e.currentTarget.style.color = '#C9A84C'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.color = 'rgba(244,241,235,0.55)'
              }}
            >
              GITHUB ↗
            </a>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          style={{ display: 'none', background: 'none', border: 'none', color: '#F4F1EB', fontSize: '20px' }}
          className="mobile-menu-btn"
        >
          ☰
        </button>
      </header>

      <main style={{ flex: 1, paddingTop: '64px' }}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer style={{ padding: '44px 40px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '80px' }}>
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(244,241,235,0.35)', letterSpacing: '0.08em' }}>
              © {new Date().getFullYear()} RAUL BOONSTRA-ARIZA
            </span>
            <span style={{ fontSize: '13px', color: 'rgba(244,241,235,0.45)' }}>
              Software developer · Calgary, AB
            </span>
          </div>

          <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
            {[
              { label: 'Projects', href: '/projects', internal: true },
              { label: 'Resume', href: '/resume', internal: true },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raulariza/', internal: false },
              { label: 'GitHub', href: 'https://github.com/StuartAriza', internal: false }, 
              { label: 'Email', href: 'mailto:StuartAriza@gmail.com', internal: false },
            ].map((s) =>
              s.internal ? (
                <Link
                  key={s.label}
                  to={s.href}
                  className="nav-link"
                  style={{ fontSize: '12px', color: 'rgba(244,241,235,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  {s.label}
                </Link>
              ) : (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="nav-link"
                  style={{ fontSize: '12px', color: 'rgba(244,241,235,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  {s.label}
                </a>
              )
            )}
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  )
}