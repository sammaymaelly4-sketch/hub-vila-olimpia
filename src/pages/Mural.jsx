import { useState } from 'react'
import { mural } from '../data/mock'
import './Mural.css'

const cats = ['todos', 'alerta', 'achado', 'perdido', 'informacao']
const catLabel = { todos: 'Todos', alerta: '⚠️ Alertas', achado: '✅ Achados', perdido: '🔍 Perdidos', informacao: '💡 Info' }
const emojiMap = { alerta: '🚧', achado: '🔑', perdido: '🐕', informacao: '💡' }

export default function Mural() {
  const [filtro, setFiltro] = useState('todos')
  const lista = filtro === 'todos' ? mural : mural.filter(m => m.categoria === filtro)

  return (
    <div className="page page-enter">
      <div className="pg-header mural-header">
        <div>
          <h1>📌 Mural da Vila</h1>
          <p className="sub">Vigilância solidária · Bairro unido</p>
        </div>
        <button className="bell-btn">🔔</button>
      </div>

      <div className="chips">
        {cats.map(c => (
          <button key={c} className={`chip ${filtro === c ? 'on' : ''}`} onClick={() => setFiltro(c)}>
            {catLabel[c]}
          </button>
        ))}
      </div>

      <div className="mural-list stagger">
        {lista.map(item => (
          <div key={item.id} className="card mural-card">
            <div className="mural-placeholder">
              {emojiMap[item.categoria]}
            </div>
            <div className="mural-body">
              <div className="mural-tag-row">
                <span className="mural-tag" style={{ background: item.tagBg }}>
                  {catLabel[item.categoria]}
                </span>
                <span className="mural-time">{item.tempo}</span>
              </div>
              <p className="mural-titulo">{item.titulo}</p>
              <p className="mural-desc">{item.descricao}</p>
              <button className={`btn-${item.btnTipo}`}>
                💬 {item.btnLabel}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAB publicar */}
      <button className="fab">+</button>
    </div>
  )
}
