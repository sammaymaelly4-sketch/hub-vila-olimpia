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
      <div className="q-cards stagger">
        <button className="q-card card" onClick={() => navigate('/mural')}>
          <div className="q-icon" style={{ background: 'var(--orange-l)' }}>📣</div>
          <div className="q-info">
            <span className="q-name">Mural da Vila</span>
            <span className="q-sub">Notícias e avisos locais</span>
          </div>
          <span className="q-arr">›</span>
        </button>
        <button className="q-card card" onClick={() => navigate('/servicos')}>
          <div className="q-icon" style={{ background: '#EEF2FF' }}>🔧</div>
          <div className="q-info">
            <span className="q-name">Serviços Locais</span>
            <span className="q-sub">Pedreiros, eletricistas e mais</span>
          </div>
          <span className="q-arr">›</span>
        </button>
        <button className="q-card card" onClick={() => navigate('/comercios')}>
          <div className="q-icon" style={{ background: '#ECFDF5' }}>🏪</div>
          <div className="q-info">
            <span className="q-name">Comércio</span>
            <span className="q-sub">Lojas e mercados próximos</span>
          </div>
          <span className="q-arr">›</span>
        </button>
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
