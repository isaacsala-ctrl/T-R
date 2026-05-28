import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = ['Services', 'About', 'Projects', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 48px',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,13,26,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(26,110,247,0.12)' : 'none',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'linear-gradient(135deg, var(--blue) 0%, var(--copper) 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, fontWeight: 800, color: 'white', letterSpacing: '-0.5px',
        }}>
          T&R
        </div>
        <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.5px', color: 'var(--white)', whiteSpace: 'nowrap' }}>
          T&R <span style={{ color: 'var(--copper)' }}>Heating & Air</span>
        </span>
      </div>

      <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: 'var(--gray)',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--gray)')}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            padding: '10px 24px',
            background: 'var(--blue)',
            color: 'white',
            borderRadius: 40,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'background 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue-light)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Get a Quote
        </a>
      </div>
    </motion.nav>
  )
}
