import { useState } from 'react'
import { prestadores } from '../data/mock'
import './Servicos.css'

const cats = ['todos', 'Eletricista Residencial', 'Encanador Hidráulico', 'Costureira', 'Pintura e Acabamento']
const catShort = {
  'todos': 'Todos',
  'Eletricista Residencial': '⚡ Eletricista',
  'Encanador Hidráulico': '💧 Encanador',
  'Costureira': '🧵 Costura',
  'Pintura e Acabamento': '🎨 Pintura',
}

export default function Servicos() {
  const [filtro, setFiltro] = useState('todos')
  const lista = filtro === 'todos' ? prestadores : prestadores.filter(p => p.especialidade === filtro)

  return (
    <div className="page page-enter">
      <div className="pg-header">
        <h1>🔧 Serviços</h1>
        <p className="sub">Profissionais da Vila Olímpia</p>
      </div>

      {/* Search bar */}
      <div className="search-bar">
        🔍 O que você precisa hoje?
      </div>

      <div className="chips">
        {cats.map(c => (
          <button key={c} className={`chip ${filtro === c ? 'on' : ''}`} onClick={() => setFiltro(c)}>
            {catShort[c]}
          </button>
        ))}
      </div>

      <p className="servicos-section-title">Profissionais Próximos</p>

      <div className="servicos-list stagger">
        {lista.map(p => (
          <div key={p.id} className="card serv-card">
            <div className="serv-placeholder">
              <span>{p.emoji}</span>
              <span className="serv-rating">⭐ {p.avaliacao.toFixed(1)}</span>
            </div>
            <div className="serv-body">
              <div className="serv-name-row">
                <span className="serv-name">{p.nome}</span>
                <span className="serv-dist">{p.dist}</span>
              </div>
              <p className="serv-esp">{p.especialidade}</p>
              <p className="serv-desc">{p.descricao}</p>
              <a
                href={`https://wa.me/${p.whatsapp}?text=Olá ${p.nome}! Vi seu perfil no Hub Vila Olímpia e gostaria de um orçamento.`}
                target="_blank"
                rel="noreferrer"
                className="btn-wpp"
              >
                💬 Chamar no WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA cadastro */}
      <div className="cta-cadastro">
        <p className="cta-title">Você é autônomo?</p>
        <p className="cta-sub">Apareça aqui para toda a Vila Olímpia. Cadastro gratuito no MVP.</p>
        <a
          href="https://wa.me/5512999999999?text=Olá! Quero me cadastrar como prestador no Hub Vila Olímpia."
          target="_blank"
          rel="noreferrer"
          className="btn-wpp"
        >
          💬 Quero me cadastrar
        </a>
      </div>
    </div>
  )
}
