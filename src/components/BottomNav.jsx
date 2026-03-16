import { NavLink } from 'react-router-dom'
import './BottomNav.css'

const tabs = [
  { to: '/',          end: true,  icon: '🏠', label: 'Início'    },
  { to: '/comercios', end: false, icon: '🏪', label: 'Comércios' },
  { to: '/mural',     end: false, icon: '📌', label: 'Mural'     },
  { to: '/servicos',  end: false, icon: '🔧', label: 'Serviços'  },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {tabs.map(t => (
        <NavLink
          key={t.to}
          to={t.to}
          end={t.end}
          className={({ isActive }) => 'nav-btn' + (isActive ? ' on' : '')}
        >
          <span className="nav-icon">{t.icon}</span>
          <span>{t.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
