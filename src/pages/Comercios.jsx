import { useState } from 'react'
import { comercios, catalogo } from '../data/mock'
import './Comercios.css'

const catLabel = { bar: 'Bar', mercadinho: 'Mercadinho', farmacia: 'Farmácia' }

// ── CATÁLOGO ────────────────────────────────────────────────
function Catalogo({ comercio, onBack }) {
  const itens = catalogo[comercio.id] || []
  const [carrinho, setCarrinho] = useState([])

  const add = (item) => setCarrinho(prev => {
    const ex = prev.find(x => x.id === item.id)
    return ex
      ? prev.map(x => x.id === item.id ? { ...x, qtd: x.qtd + 1 } : x)
      : [...prev, { ...item, qtd: 1 }]
  })

  const rm = (id) => setCarrinho(prev => {
    const ex = prev.find(x => x.id === id)
    if (!ex) return prev
    return ex.qtd <= 1 ? prev.filter(x => x.id !== id) : prev.map(x => x.id === id ? { ...x, qtd: x.qtd - 1 } : x)
  })

  const qtdOf = (id) => carrinho.find(x => x.id === id)?.qtd || 0
  const total = carrinho.reduce((s, x) => s + x.preco * x.qtd, 0)
  const totalItens = carrinho.reduce((s, x) => s + x.qtd, 0)

  const pedirWpp = () => {
    const linhas = carrinho.map(x => `• ${x.qtd}x ${x.nome} — R$${(x.preco * x.qtd).toFixed(2)}`).join('\n')
    const msg = encodeURIComponent(`Olá! Gostaria de fazer um pedido:\n\n${linhas}\n\n*Total: R$${total.toFixed(2)}*\n\nvia Hub Vila Olímpia 🏘️`)
    window.open(`https://wa.me/${comercio.whatsapp}?text=${msg}`, '_blank')
  }

  return (
    <div className="page page-enter">
      {/* Header */}
      <div className="pg-header" style={{ background: comercio.cor }}>
        <button className="back" style={{ color: 'rgba(255,255,255,0.85)' }} onClick={onBack}>← Voltar</button>
        <h1 style={{ color: '#fff' }}>Cardápio</h1>
        <p className="sub" style={{ color: 'rgba(255,255,255,0.75)' }}>{comercio.nome}</p>
      </div>

      {/* Hero */}
      <div className="cat-hero" style={{ background: comercio.cor }}>
        <div className="cat-emoji">{comercio.emoji}</div>
        <p className="cat-sub">{comercio.descricao}</p>
        {comercio.destaque && (
          <div className="cat-destaque">🎉 {comercio.destaque}</div>
        )}
      </div>

      {/* Título */}
      <p className="cat-section-title">Os Mais Pedidos</p>

      {/* Produtos */}
      <div className="prod-list stagger">
        {itens.map(item => {
          const q = qtdOf(item.id)
          return (
            <div key={item.id} className={`card prod-card ${item.destaque ? 'prod-destaque' : ''}`}>
              <span className="prod-emoji">{item.emoji}</span>
              <div className="prod-info">
                {item.destaque && <span className="mais-pedido">MAIS PEDIDO</span>}
                <p className="prod-nome">{item.nome}</p>
                <p className="prod-desc">{item.descricao}</p>
                <p className="prod-preco">R${item.preco.toFixed(2)}</p>
              </div>
              <div className="prod-ctrl">
                {q > 0 ? (
                  <>
                    <button className="ctrl-btn minus" onClick={() => rm(item.id)} style={{ background: '#ddd', color: '#666' }}>−</button>
                    <span className="ctrl-qtd">{q}</span>
                  </>
                ) : null}
                <button className="ctrl-btn plus" onClick={() => add(item)} style={{ background: comercio.cor }}>+</button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Cart bar */}
      {carrinho.length > 0 && (
        <div className="cart-bar">
          <div>
            <span className="cart-info">{totalItens} iten(s) selecionados</span>
            <span className="cart-total">R${total.toFixed(2)}</span>
          </div>
          <button className="cart-btn" onClick={pedirWpp}>
            Finalizar Pedido
          </button>
        </div>
      )}
    </div>
  )
}

// ── DETALHE ─────────────────────────────────────────────────
function Detalhe({ comercio, onBack }) {
  const [verCat, setVerCat] = useState(false)
  if (verCat) return <Catalogo comercio={comercio} onBack={() => setVerCat(false)} />

  return (
    <div className="page page-enter">
      <div className="pg-header" style={{ background: comercio.cor }}>
        <button className="back" style={{ color: 'rgba(255,255,255,0.85)' }} onClick={onBack}>← Voltar</button>
        <h1 style={{ color: '#fff' }}>{comercio.nome}</h1>
      </div>

      <div className="det-hero" style={{ background: comercio.cor }}>
        <div className="det-placeholder" style={{ background: comercio.bg }}>{comercio.emoji}</div>
        <p className="det-desc">{comercio.descricao}</p>
        {comercio.destaque && <div className="det-destaque">🎉 {comercio.destaque}</div>}
      </div>

      <div className="det-body">
        <div className="card det-info">
          {[
            ['📍', comercio.endereco],
            ['📞', comercio.telefone],
            [`⭐`, `${comercio.avaliacao} (${comercio.total_av} avaliações)`],
            ['🕐', `Seg–Sex: ${comercio.horario.seg_sex}`],
            ['',   `Sáb: ${comercio.horario.sab} · Dom: ${comercio.horario.dom}`],
          ].map(([ic, txt], i) => (
            <div key={i} className="info-row" style={i === 4 ? { border: 'none' } : {}}>
              <span className="info-ic">{ic}</span>
              <span className="info-txt">{txt}</span>
            </div>
          ))}
        </div>

        <div className="det-btns">
          <a href={`https://wa.me/${comercio.whatsapp}`} target="_blank" rel="noreferrer" className="btn-wpp">
            💬 WhatsApp
          </a>
          {comercio.parceiro_plus && (
            <button className="btn-laranja" onClick={() => setVerCat(true)}>
              🛍️ Ver cardápio
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ── LISTA ────────────────────────────────────────────────────
export default function Comercios() {
  const [selecionado, setSelecionado] = useState(null)
  const [filtro, setFiltro] = useState('todos')

  if (selecionado) return <Detalhe comercio={selecionado} onBack={() => setSelecionado(null)} />

  const cats = ['todos', ...new Set(comercios.map(c => c.categoria))]
  const lista = filtro === 'todos' ? comercios : comercios.filter(c => c.categoria === filtro)

  return (
    <div className="page page-enter">
      <div className="pg-header">
        <h1>Comércios</h1>
        <p className="sub">Vila Olímpia · Taubaté SP</p>
      </div>

      <div className="chips">
        {cats.map(c => (
          <button key={c} className={`chip ${filtro === c ? 'on' : ''}`} onClick={() => setFiltro(c)}>
            {c === 'todos' ? 'Todos' : catLabel[c] || c}
          </button>
        ))}
      </div>

      <div className="com-list stagger">
        {lista.map(c => (
          <button key={c.id} className="com-card card" onClick={() => setSelecionado(c)}>
            <div className="com-placeholder" style={{ background: c.bg }}>
              <span>{c.emoji}</span>
              <div className="com-overlay">
                {c.parceiro_plus && <span className="badge-plus">PARCEIRO PLUS</span>}
                <p className="com-nome">{c.nome}</p>
                <p className="com-sub-img">{catLabel[c.categoria]} · {c.horario.seg_sex}</p>
              </div>
            </div>
            <div className="com-body">
              <div className="com-info-row">
                <span className="badge-open">ABERTO</span>
                <span className="com-av">⭐ {c.avaliacao}</span>
                <span className="com-end">{c.endereco.split('–')[0].trim()}</span>
              </div>
              <button className="btn-wpp" onClick={e => { e.stopPropagation(); window.open(`https://wa.me/${c.whatsapp}`, '_blank') }}>
                💬 Pedir via WhatsApp
              </button>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
