import { useNavigate } from 'react-router-dom'
import { feed, comercios } from '../data/mock'
import { useTheme } from '../context/ThemeContext'
import './Inicio.css'

const tipoLabel = { promocao: 'Promoção', aviso: 'Aviso', evento: 'Evento' }

export default function Inicio() {
  const navigate = useNavigate()
  const { dark, toggle } = useTheme()

  return (
    <div className="page page-enter">

      {/* TOP BAR */}
      <div className="inicio-top">
        <div className="inicio-avatar">
          <div className="avatar-ring">🏘️</div>
          <div>
            <p className="greeting-sub">Bom dia,</p>
            <h1 className="greeting-main">Vila Olímpia!</h1>
          </div>
        </div>
        <div className="top-actions">
          <button className="theme-btn" onClick={toggle} title="Alternar tema">
            {dark ? '☀️' : '🌙'}
          </button>
          <button className="bell-btn">🔔</button>
        </div>
      </div>

      {/* QUICK ACCESS */}
      <p className="section-label">O que você precisa hoje?</p>
      <div className="flashcards-container stagger">
        <div className="flashcards">
          <button className="flashcard" onClick={() => navigate('/mural')} style={{ '--fc': 'var(--orange)' }}>
            <span className="fc-icon">📣</span>
            <span className="fc-name">Mural</span>
          </button>
          <button className="flashcard" onClick={() => navigate('/servicos')} style={{ '--fc': '#4F46E5' }}>
            <span className="fc-icon">🔧</span>
            <span className="fc-name">Serviços</span>
          </button>
          <button className="flashcard" onClick={() => navigate('/comercios')} style={{ '--fc': '#10B981' }}>
            <span className="fc-icon">🏪</span>
            <span className="fc-name">Comércio</span>
          </button>
          <button className="flashcard" onClick={() => window.alert('Eventos em breve!')} style={{ '--fc': '#D97706' }}>
            <span className="fc-icon">🎫</span>
            <span className="fc-name">Eventos</span>
          </button>
          <button className="flashcard" onClick={() => window.alert('Doações em breve!')} style={{ '--fc': '#DB2777' }}>
            <span className="fc-icon">❤️</span>
            <span className="fc-name">Doações</span>
          </button>
        </div>
      </div>

      {/* HERO DESTAQUE */}
      <div className="hero-wrap pulse">
        <div className="hero-inner" style={{ background: 'linear-gradient(135deg, #7B3F00, #A0522D)' }}>
          <span className="hero-emoji">🍺</span>
          <div className="hero-text">
            <p className="hero-eyebrow">✨ Destaque do dia</p>
            <p className="hero-title">Happy Hour no Bar da Carmen</p>
            <p className="hero-sub">Hoje a partir das 17h · Chopp R$10</p>
          </div>
        </div>
      </div>

      {/* FEED */}
      <div className="section-header">
        <span className="section-title">Novidades do Bairro</span>
        <span className="ver-todos">Ver todos</span>
      </div>
      <div className="feed-list stagger">
        {feed.map(item => (
          <div key={item.id} className="feed-card card" style={{ borderLeftColor: item.cor }}>
            <div className="feed-top">
              <span className="feed-tag" style={{ background: item.tagBg, color: item.tagCor }}>
                {tipoLabel[item.tipo]}
              </span>
              <span className="feed-time">{item.tempo} atrás</span>
            </div>
            <p className="feed-titulo">{item.titulo}</p>
            <p className="feed-corpo">{item.conteudo}</p>
            {item.comercio && <p className="feed-local">📍 {item.comercio}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
