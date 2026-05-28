import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Fredricka B.',
    date: 'Jul 24, 2023',
    rating: 5,
    text: 'I am not a review writer but this company truly came through for me. My AC went out during a week of record high heat and Mr. Yowe delivered for us. His assistant was very thorough and communicated well with us — she was professional and pleasant. Mr. Yowe did an excellent job setting up and getting us a new unit. Our house is cool, his prices were excellent, and we are very pleased with the service we got. If you need your AC fixed give Mr. Yowe a call, he is compassionate and goes above and beyond for his customers.',
    source: 'Google',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#fbbc04', fontSize: 16 }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      style={{
        padding: '120px 48px',
        background: 'var(--navy-mid)',
        clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)',
        marginTop: -40,
        position: 'relative',
      }}
    >
      {/* Subtle glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 600, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(26,110,247,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', marginBottom: 64 }}
      >
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20,
          color: 'var(--copper)', fontSize: 13, letterSpacing: '0.1em',
          textTransform: 'uppercase', fontWeight: 600,
        }}>
          <span style={{ width: 24, height: 1, background: 'var(--copper)', display: 'inline-block' }} />
          Customer Reviews
          <span style={{ width: 24, height: 1, background: 'var(--copper)', display: 'inline-block' }} />
        </div>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800,
          lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--white)',
        }}>
          What our customers say
        </h2>
        {/* Google badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 20,
          padding: '8px 20px', borderRadius: 40,
          border: '1px solid rgba(251,188,4,0.25)', background: 'rgba(251,188,4,0.05)',
        }}>
          <Stars count={5} />
          <span style={{ color: 'var(--gray)', fontSize: 14 }}>5.0 on Google</span>
        </div>
      </motion.div>

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'var(--navy)',
              borderRadius: 16,
              padding: '48px 52px',
              position: 'relative',
              border: '1px solid rgba(136,153,187,0.1)',
            }}
          >
            {/* Quote mark */}
            <div style={{
              position: 'absolute', top: 32, right: 48,
              fontSize: 96, lineHeight: 1, color: 'rgba(26,110,247,0.08)',
              fontFamily: 'Georgia, serif', fontWeight: 700, userSelect: 'none',
            }}>
              "
            </div>

            <Stars count={r.rating} />

            <p style={{
              color: 'var(--cream)', fontSize: 18, lineHeight: 1.8,
              marginTop: 24, marginBottom: 36, fontStyle: 'italic',
              position: 'relative', zIndex: 1,
            }}>
              "{r.text}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--blue) 0%, var(--copper) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, fontWeight: 700, color: 'white', flexShrink: 0,
                }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: 15 }}>{r.name}</div>
                  <div style={{ color: 'var(--gray)', fontSize: 13, marginTop: 2 }}>{r.date}</div>
                </div>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 14px', borderRadius: 20,
                border: '1px solid rgba(136,153,187,0.2)',
                color: 'var(--gray)', fontSize: 13,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google Review
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA below review */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ textAlign: 'center', marginTop: 56 }}
      >
        <p style={{ color: 'var(--gray)', fontSize: 15, marginBottom: 20 }}>
          Experience the same quality service for your home or business.
        </p>
        <a
          href="#contact"
          style={{
            display: 'inline-block', padding: '14px 36px',
            background: 'transparent', color: 'var(--cream)',
            border: '1.5px solid rgba(242,234,216,0.25)', borderRadius: 40,
            fontSize: 15, fontWeight: 600, textDecoration: 'none',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(242,234,216,0.7)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(242,234,216,0.25)'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Get Your Free Quote →
        </a>
      </motion.div>
    </section>
  )
}
