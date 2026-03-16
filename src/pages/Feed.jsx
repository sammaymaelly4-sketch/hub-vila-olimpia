import { feed } from '../data/mock'
import Header from '../components/Header'

const tipoStyle = {
  promocao: { bg: '#D8F3DC', color: '#2D6A4F', label: 'Promoção' },
  aviso:    { bg: '#FFF0D6', color: '#C85C00', label: 'Aviso' },
  evento:   { bg: '#EDE7F6', color: '#6A3AAC', label: 'Evento' },
}

export default function Feed() {
  return (
    <div className="page">
      <Header
        title="Vila Olímpia"
        subtitle="Seu bairro em um lugar só"
      />

      {/* Hero strip */}
      <div style={{
        margin: '16px 16px 8px',
        background: 'var(--verde)',
        borderRadius: 'var(--radius)',
        padding: '18px 20px',
        color: '#fff',
        display: 'flex', flexDirection: 'column', gap: 4,
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', opacity: 0.75, textTransform: 'uppercase' }}>Acontecendo agora</span>
        <h2 style={{ fontSize: 22, color: '#fff' }}>Novidades do bairro</h2>
        <p style={{ fontSize: 13, opacity: 0.85 }}>Promoções, eventos e avisos da sua comunidade.</p>
      </div>

      {/* Feed cards */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {feed.map((item, i) => {
          const s = tipoStyle[item.tipo] || tipoStyle.aviso
          return (
            <div key={item.id} className="card fade-up" style={{
              padding: '14px 16px',
              borderLeft: `4px solid ${item.cor}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <span className="tag" style={{ background: s.bg, color: s.color }}>{s.label}</span>
                <span style={{ fontSize: 11, color: 'var(--txt3)' }}>{item.tempo}</span>
              </div>
              <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{item.titulo}</p>
              <p style={{ fontSize: 13, color: 'var(--txt2)', lineHeight: 1.5 }}>{item.conteudo}</p>
              {item.comercio && (
                <p style={{ fontSize: 11, color: 'var(--txt3)', marginTop: 8, fontWeight: 500 }}>📍 {item.comercio}</p>
              )}
            </div>
          )
        })}
      </div>

      <div style={{ height: 16 }} />
    </div>
  )
}
