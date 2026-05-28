import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = to / 60
    const timer = setInterval(() => {
      start += step
      if (start >= to) { setVal(to); clearInterval(timer) }
      else setVal(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, to])

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 5, suffix: '.0★', label: 'Google Rating' },
  { value: 100, suffix: '%', label: 'Quality Guaranteed' },
  { value: 205, suffix: '', label: 'Area Code — Call Us' },
  { value: 7, suffix: ' Days', label: 'Available Weekly' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '160px 48px',
        position: 'relative',
        clipPath: 'polygon(0 0, 100% 40px, 100% 100%, 0 calc(100% - 40px))',
        background: 'var(--navy)',
        marginTop: -40,
      }}
    >
      {/* Accent glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '-200px',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(192,120,64,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 120, alignItems: 'center', maxWidth: 1200, margin: '0 auto' }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginBottom: 24, color: 'var(--copper)', fontSize: 13,
            letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600,
          }}>
            <span style={{ width: 24, height: 1, background: 'var(--copper)', display: 'inline-block' }} />
            Our Story
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800,
            lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--white)', marginBottom: 32,
          }}>
            Family-owned,<br />
            <span style={{ color: 'var(--copper)' }}>Hoover proud.</span>
          </h2>
          <p style={{ color: 'var(--gray)', fontSize: 16, lineHeight: 1.75, marginBottom: 24 }}>
            T & R Heating and Air is a family-owned and operated business committed to providing
            reliable, quality HVAC work at affordable prices. Every one of our techs is devoted
            to top-notch customer service — no matter how severe or small the job might be.
          </p>
          <p style={{ color: 'var(--gray)', fontSize: 16, lineHeight: 1.75, marginBottom: 40 }}>
            We won't quit until it's done properly the first time. Our services are detail-oriented,
            customer-focused, reliable, and fast. No job is too big or small — our responsible,
            punctual, and knowledgeable team is ready to help with any HVAC need.
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              color: 'var(--copper)', fontSize: 15, fontWeight: 700,
              textDecoration: 'none', letterSpacing: '-0.01em',
              borderBottom: '1px solid rgba(192,120,64,0.3)',
              paddingBottom: 4, transition: 'gap 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.gap = '16px'; e.currentTarget.style.borderColor = 'var(--copper)' }}
            onMouseLeave={e => { e.currentTarget.style.gap = '10px'; e.currentTarget.style.borderColor = 'rgba(192,120,64,0.3)' }}
          >
            Meet the team →
          </a>
        </motion.div>

        {/* Right — stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}
        >
          {stats.map(({ value, suffix, label }) => (
            <div
              key={label}
              style={{
                padding: '48px 36px',
                background: 'var(--navy-mid)',
                borderLeft: '3px solid transparent',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--copper)'
                ;(e.currentTarget as HTMLElement).style.background = 'var(--navy-light)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'transparent'
                ;(e.currentTarget as HTMLElement).style.background = 'var(--navy-mid)'
              }}
            >
              <div style={{
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 800, letterSpacing: '-0.04em',
                color: 'var(--white)', lineHeight: 1,
              }}>
                <Counter to={value} suffix={suffix} />
              </div>
              <div style={{ fontSize: 13, color: 'var(--gray)', marginTop: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
