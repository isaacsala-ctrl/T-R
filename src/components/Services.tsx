import { motion } from 'framer-motion'

const services = [
  {
    icon: '❄️',
    title: 'AC Installation',
    desc: 'New central air conditioner installs sized and set up for your home or business. We make sure it\'s done right the first time.',
    tag: 'Cooling',
  },
  {
    icon: '🔥',
    title: 'Heating Installation',
    desc: 'Furnaces, heat pumps, and heating systems installed by our knowledgeable team — reliable warmth at an affordable price.',
    tag: 'Heating',
  },
  {
    icon: '💧',
    title: 'Water Heaters',
    desc: 'Water heater installation and repair for residential and light commercial properties. Fast, clean, and built to last.',
    tag: 'Plumbing',
  },
  {
    icon: '🔧',
    title: 'HVAC Repair',
    desc: 'Responsible and punctual technicians who diagnose and fix any HVAC issue — no job too big or small. We won\'t quit until it\'s right.',
    tag: 'Repair',
  },
  {
    icon: '📋',
    title: 'Maintenance',
    desc: 'Routine maintenance keeps your system running efficiently and prevents costly breakdowns. Detail-oriented service every visit.',
    tag: 'Maintenance',
  },
  {
    icon: '🌡️',
    title: 'Heat Pumps',
    desc: 'Heat pump installation and service for year-round comfort. Efficient heating and cooling from one system.',
    tag: 'Heat Pump',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '120px 48px',
        position: 'relative',
        clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)',
        background: 'var(--navy-mid)',
        marginTop: -40,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: 72 }}
      >
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          marginBottom: 20, color: 'var(--copper)', fontSize: 13,
          letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600,
        }}>
          <span style={{ width: 24, height: 1, background: 'var(--copper)', display: 'inline-block' }} />
          What We Do
        </div>
        <h2 style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 800, lineHeight: 1.05,
          letterSpacing: '-0.03em', color: 'var(--white)',
          maxWidth: 600,
        }}>
          Every system,<br />
          <span style={{ color: 'var(--blue-light)' }}>every season.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 2,
        }}
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            data-cursor-hover
            style={{
              padding: '48px 40px',
              background: 'var(--navy)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--navy-light)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--navy)'
            }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: 2, background: 'linear-gradient(to right, var(--blue), transparent)',
              opacity: 0, transition: 'opacity 0.3s',
            }}
              className="card-top-line"
            />
            <div style={{
              display: 'inline-flex', padding: '6px 12px',
              background: 'rgba(26,110,247,0.1)', borderRadius: 20,
              color: 'var(--blue-light)', fontSize: 12,
              fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              {s.tag}
            </div>
            <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
            <h3 style={{
              fontSize: 22, fontWeight: 700, color: 'var(--white)',
              letterSpacing: '-0.02em', marginBottom: 12,
            }}>
              {s.title}
            </h3>
            <p style={{ color: 'var(--gray)', fontSize: 15, lineHeight: 1.65 }}>
              {s.desc}
            </p>
            <div style={{
              marginTop: 32, display: 'flex', alignItems: 'center',
              gap: 8, color: 'var(--blue-light)', fontSize: 14, fontWeight: 600,
            }}>
              Learn more
              <span style={{ transition: 'transform 0.2s' }}>→</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
