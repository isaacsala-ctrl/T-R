import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const words = ['Reliable.', 'Affordable.', 'Done Right.']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 48px',
        overflow: 'hidden',
      }}
    >
      {/* Background elements */}
      <motion.div style={{ y }} aria-hidden>
        {/* Glow blob */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '-10%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,110,247,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,120,64,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />
        {/* Grid lines */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#4d8fff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <motion.div style={{ opacity, position: 'relative', zIndex: 2, maxWidth: 1100 }}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginBottom: 48, padding: '6px 16px',
            border: '1px solid rgba(26,110,247,0.3)',
            borderRadius: 40, color: 'var(--blue-light)', fontSize: 13,
            letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
          Family-Owned · Hoover, AL
        </motion.div>

        {/* Headline */}
        <div style={{ overflow: 'hidden' }}>
          {words.map((word, i) => (
            <motion.h1
              key={word}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(64px, 9vw, 128px)',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: i === 1 ? 'var(--blue-light)' : i === 2 ? 'var(--copper)' : 'var(--white)',
                display: 'block',
              }}
            >
              {word}
            </motion.h1>
          ))}
        </div>

        {/* Sub + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}
        >
          <p style={{ maxWidth: 420, color: 'var(--gray)', fontSize: 17, lineHeight: 1.65 }}>
            Family-owned and operated in Hoover, AL. Quality HVAC maintenance, repair,
            and installation — done properly the first time, at prices that make sense.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                padding: '16px 40px', background: 'var(--blue)', color: 'white',
                borderRadius: 50, fontSize: 16, fontWeight: 700, textDecoration: 'none',
                letterSpacing: '-0.01em', transition: 'transform 0.2s, background 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'var(--blue-light)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--blue)' }}
            >
              Book Service
            </a>
            <a
              href="#services"
              style={{
                padding: '16px 40px', background: 'transparent', color: 'var(--cream)',
                borderRadius: 50, fontSize: 16, fontWeight: 600, textDecoration: 'none',
                letterSpacing: '-0.01em', border: '1.5px solid rgba(242,234,216,0.2)',
                transition: 'border-color 0.2s, transform 0.2s', display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(242,234,216,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(242,234,216,0.2)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Our Services
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{ marginTop: 80, display: 'flex', gap: 64, borderTop: '1px solid rgba(136,153,187,0.15)', paddingTop: 40 }}
        >
          {[['5.0★', 'Google Rating'], ['100%', 'Satisfaction'], ['Any Size', 'No Job Too Big or Small'], ['Call Now', '(205) 859-5222']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.03em' }}>{num}</div>
              <div style={{ fontSize: 13, color: 'var(--gray)', marginTop: 4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          color: 'var(--gray)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--gray), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
