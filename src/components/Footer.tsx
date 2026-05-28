export default function Footer() {
  return (
    <footer style={{
      padding: '48px 48px',
      background: 'var(--navy)',
      borderTop: '1px solid rgba(136,153,187,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: 'linear-gradient(135deg, var(--blue) 0%, var(--copper) 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 10, fontWeight: 800, color: 'white', letterSpacing: '-0.5px',
        }}>T&R</div>
        <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--white)' }}>
          T&R <span style={{ color: 'var(--copper)' }}>Heating & Air</span>
        </span>
      </div>
      <p style={{ color: 'var(--gray)', fontSize: 13 }}>
        © {new Date().getFullYear()} T & R Heating and Air. Hoover, AL · (205) 859-5222
      </p>
      <div style={{ display: 'flex', gap: 32 }}>
        {['Privacy', 'Terms', 'Accessibility'].map(link => (
          <a key={link} href="#" style={{ color: 'var(--gray)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--gray)'}
          >{link}</a>
        ))}
      </div>
    </footer>
  )
}
