import { useState } from 'react'
import { mural } from '../data/mock'
import Header from '../components/Header'

const catStyle = {
  alerta:     { bg: '#FFF0F0', color: '#C0392B', icon: '🚨', label: 'Alerta' },
  perdido:    { bg: '#FFF3CD', color: '#856404', icon: '🔍', label: 'Perdido' },
  achado:     { bg: '#D4EDDA', color: '#155724', icon: '✅', label: 'Achado' },
  informacao: { bg: '#D1ECF1', color: '#0C5460', icon: '💡', label: 'Info' },
}

export default function Mural() {
  const [filtro, setFiltro] = useState('todos')
  const lista = filtro === 'todos' ? mural : mural.filter(m => m.categoria === filtro)

  return (
    <div className="page">
      <Header title="Mural" subtitle="Vigilância solidária · Bairro unido" />

      {/* Filtros */}
      <div style={{ padding: '12px 16px', display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none' }}>
        {['todos', 'alerta', 'perdido', 'achado', 'informacao'].map(cat => {
          const s = catStyle[cat]
          return (
            <button key={cat} onClick={() => setFiltro(cat)} style={{
              padding: '6px 14px', borderRadius: 99, whiteSpace: 'nowrap',
              fontSize: 12, fontWeight: 600, border: 'none',
              background: filtro === cat ? (s?.color || 'var(--verde)') : 'var(--bg2)',
              color: filtro === cat ? '#fff' : 'var(--txt2)',
              transition: 'all 0.15s',
            }}>
              {cat === 'todos' ? 'Todos' : `${s.icon} ${s.label}`}
            </button>
          )
        })}
      </div>

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {lista.map((item, i) => {
          const s = catStyle[item.categoria] || catStyle.informacao
          return (
            <div key={item.id} className="card fade-up" style={{ padding: '14px 16px', background: s.bg, border: `1px solid ${s.color}22` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <span className="tag" style={{ background: '#fff', color: s.color, border: `1px solid ${s.color}44` }}>
                  {s.icon} {s.label}
                </span>
                <span style={{ fontSize: 11, color: 'var(--txt3)' }}>{item.tempo}</span>
              </div>
              <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{item.titulo}</p>
              <p style={{ fontSize: 13, color: 'var(--txt2)', lineHeight: 1.5 }}>{item.descricao}</p>
            </div>
          )
        })}
      </div>

      {/* CTA publicar */}
      <div style={{ margin: '12px 16px 0', padding: '18px 20px', borderRadius: 'var(--radius)', background: 'var(--bg2)' }}>
        <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Tem algo pra avisar?</p>
        <p style={{ fontSize: 13, color: 'var(--txt2)', marginBottom: 12 }}>Mande via WhatsApp e publicamos após aprovação.</p>
        <a href="https://wa.me/5512999999999?text=Olá! Quero publicar algo no Mural da Vila Olímpia." target="_blank" rel="noreferrer"
          className="btn-wpp">
          Enviar aviso
        </a>
      </div>
      <div style={{ height: 16 }} />
    </div>
  )
}
