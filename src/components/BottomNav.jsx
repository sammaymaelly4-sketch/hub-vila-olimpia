import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/',          label: 'Feed',       icon: '📰' },
  { to: '/comercios', label: 'Comércios',  icon: '🏪' },
  { to: '/servicos',  label: 'Serviços',   icon: '🔨' },
  { to: '/mural',     label: 'Mural',      icon: '📌' },
]

export default function BottomNav() {
  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
      width: '100%', maxWidth: 430,
      height: 'var(--tab-h)',
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid var(--border)',
      display: 'flex', alignItems: 'stretch',
      zIndex: 100,
    }}>
      {tabs.map(t => (
        <NavLink key={t.to} to={t.to} end={t.to === '/'}
          style={({ isActive }) => ({
            flex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 3,
            fontSize: 10, fontWeight: 600, letterSpacing: '0.03em',
            color: isActive ? 'var(--verde)' : 'var(--txt3)',
            transition: 'color 0.15s',
            textTransform: 'uppercase',
          })}>
          <span style={{ fontSize: 22 }}>{t.icon}</span>
          {t.label}
        </NavLink>
      ))}
    </nav>
  )
}
