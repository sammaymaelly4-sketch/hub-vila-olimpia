import { useState } from 'react'
import { mural } from '../data/mock'
import './Mural.css'

const cats = ['todos', 'alerta', 'achado', 'perdido', 'informacao']
const catLabel = { todos: 'Todos', alerta: '⚠️ Alertas', achado: '✅ Achados', perdido: '🔍 Perdidos', informacao: '💡 Info' }
const emojiMap = { alerta: '🚧', achado: '🔑', perdido: '🐕', informacao: '💡' }
const tagStyle = {
  alerta:     { bg: '#FEE2E2', color: '#991B1B', label: 'ALERTA URGENTE' },
  achado:     { bg: '#D1FAE5', color: '#065F46', label: 'ACHADOS' },
  perdido:    { bg: '#FEF3C7', color: '#92400E', label: 'PERDIDOS' },
  informacao: { bg: '#DBEAFE', color: '#1E40AF', label: 'INFORMATIVO' },
}
const darkTagStyle = {
  alerta:     { bg: 'rgba(220,38,38,0.2)',  color: '#FCA5A5' },
  achado:     { bg: 'rgba(16,185,129,0.2)', color: '#6EE7B7' },
  perdido:    { bg: 'rgba(245,158,11,0.2)', color: '#FCD34D' },
  informacao: { bg: 'rgba(59,130,246,0.2)', color: '#93C5FD' },
}

export default function Mural() {
  const [filtro, setFiltro] = useState('todos')
  const lista = filtro === 'todos' ? mural : mural.filter(m => m.categoria === filtro)
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark'

  return (
    <div className="page page-enter">
      <div className="pg-header mural-hdr">
        <div>
          <h1>📌 Mural da Vila</h1>
          <p className="sub">Vigilância solidária · Bairro unido</p>
        </div>
        <button className="bell-btn" style={{ width:38,height:38,borderRadius:'50%',background:'var(--surface2)',fontSize:17,display:'flex',alignItems:'center',justifyContent:'center',border:'1.5px solid var(--border)' }}>🔔</button>
      </div>

      <div className="chips">
        {cats.map(c => (
          <button key={c} className={`chip${filtro === c ? ' on' : ''}`} onClick={() => setFiltro(c)}>
            {catLabel[c]}
          </button>
        ))}
      </div>

      <div className="mural-list stagger">
        {lista.map(item => {
          const ts = isDark ? darkTagStyle[item.categoria] : tagStyle[item.categoria]
          const borderColor = item.tagBg
          return (
            <div key={item.id} className="card mural-card" style={{ borderLeft: `3px solid ${borderColor}` }}>
              <div className="mural-img">
                <span className="mural-big-emoji">{emojiMap[item.categoria]}</span>
              </div>
              <div className="mural-body">
                <div className="mural-tag-row">
                  <span className="mural-tag" style={{ background: ts.bg, color: ts.color }}>
                    {ts.label}
                  </span>
                  <span className="mural-time">{item.tempo} atrás</span>
                </div>
                <p className="mural-titulo">{item.titulo}</p>
                <p className="mural-desc">{item.descricao}</p>
                <div className="mural-btns">
                  {item.btnTipo === 'red'    && <button className="btn-red">🚨 {item.btnLabel}</button>}
                  {item.btnTipo === 'wpp'    && <button className="btn-wpp">💬 {item.btnLabel}</button>}
                  {item.btnTipo === 'orange' && (
                    <div style={{ display:'flex', gap:8 }}>
                      <button className="btn-orange" style={{ flex:1 }}>📅 {item.btnLabel}</button>
                      <button className="btn-ghost" style={{ width:42, padding:0, flexShrink:0 }}>↗</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <button className="fab">+</button>
    </div>
  )
}
