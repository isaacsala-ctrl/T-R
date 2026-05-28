import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '16px 20px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(136,153,187,0.2)',
    borderRadius: 8, color: 'var(--cream)',
    fontSize: 15, fontFamily: 'inherit',
    outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <section
      id="contact"
      style={{
        padding: '160px 48px',
        background: 'var(--navy-mid)',
        clipPath: 'polygon(0 40px, 100% 0, 100% 100%, 0 100%)',
        marginTop: -40,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100 }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24,
            color: 'var(--blue-light)', fontSize: 13, letterSpacing: '0.1em',
            textTransform: 'uppercase', fontWeight: 600,
          }}>
            <span style={{ width: 24, height: 1, background: 'var(--blue-light)', display: 'inline-block' }} />
            Contact Us
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800,
            lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--white)', marginBottom: 32,
          }}>
            Ready to help —<br />
            <span style={{ color: 'var(--blue-light)' }}>give us a call.</span>
          </h2>
          <p style={{ color: 'var(--gray)', fontSize: 16, lineHeight: 1.7, marginBottom: 56 }}>
            Whether you need a repair, a new install, or a maintenance visit —
            T & R is here. Family-owned, locally trusted, and committed to getting it right.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              { icon: '📞', label: 'Call Us', value: '(205) 859-5222' },
              { icon: '📍', label: 'Area Served', value: 'Hoover, AL and nearby areas' },
              { icon: '🕐', label: 'Hours', value: 'Open today · Closes 7 PM' },
              { icon: '⭐', label: 'Google Rating', value: '5.0 Stars — Family-Owned & Operated' },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: 'rgba(26,110,247,0.12)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
                  <div style={{ color: 'var(--cream)', fontSize: 15, fontWeight: 500 }}>{value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {sent ? (
            <div style={{
              height: '100%', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 16,
            }}>
              <div style={{ fontSize: 56 }}>✅</div>
              <h3 style={{ fontSize: 28, fontWeight: 700, color: 'var(--white)' }}>Message Sent!</h3>
              <p style={{ color: 'var(--gray)', maxWidth: 300 }}>We'll reach out within one business hour. Check your email for confirmation.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, color: 'var(--gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Name</label>
                  <input name="name" required value={form.name} onChange={handle} placeholder="John Smith" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--blue)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(136,153,187,0.2)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, color: 'var(--gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Phone</label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="(555) 000-0000" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--blue)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(136,153,187,0.2)'}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, color: 'var(--gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Email</label>
                <input name="email" type="email" required value={form.email} onChange={handle} placeholder="john@example.com" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--blue)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(136,153,187,0.2)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, color: 'var(--gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Service Needed</label>
                <select name="service" value={form.service} onChange={handle} style={{ ...inputStyle, appearance: 'none' }}
                  onFocus={e => e.target.style.borderColor = 'var(--blue)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(136,153,187,0.2)'}
                >
                  <option value="" style={{ background: 'var(--navy)' }}>Select a service…</option>
                  <option value="ac-install" style={{ background: 'var(--navy)' }}>AC Installation</option>
                  <option value="heating" style={{ background: 'var(--navy)' }}>Heating System</option>
                  <option value="air-quality" style={{ background: 'var(--navy)' }}>Air Quality</option>
                  <option value="maintenance" style={{ background: 'var(--navy)' }}>Maintenance Plan</option>
                  <option value="commercial" style={{ background: 'var(--navy)' }}>Commercial HVAC</option>
                  <option value="emergency" style={{ background: 'var(--navy)' }}>Emergency Repair</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, color: 'var(--gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Message</label>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Tell us about your project…" rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'var(--blue)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(136,153,187,0.2)'}
                />
              </div>
              <button type="submit" style={{
                padding: '18px 40px', background: 'var(--blue)', color: 'white',
                border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 700,
                fontFamily: 'inherit', letterSpacing: '-0.01em', marginTop: 8,
                transition: 'background 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue-light)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Send Message →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
