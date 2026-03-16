import { useState } from 'react'
import { comercios, catalogo } from '../data/mock'
import Header from '../components/Header'

const categoriaLabel = {
  mercadinho: 'Mercadinho',
  farmacia: 'Farmácia',
  bar: 'Bar',
  adega: 'Adega',
  oficina: 'Oficina',
}

function CatalogoView({ comercio, onBack }) {
  const itens = catalogo[comercio.id] || []
  const [pedido, setPedido] = useState([])

  const adicionar = (item) => {
    setPedido(p => {
      const exists = p.find(x => x.id === item.id)
      if (exists) return p.map(x => x.id === item.id ? { ...x, qtd: x.qtd + 1 } : x)
      return [...p, { ...item, qtd: 1 }]
    })
  }

  const total = pedido.reduce((s, x) => s + x.preco * x.qtd, 0)

  const enviarWpp = () => {
    const linhas = pedido.map(x => `• ${x.qtd}x ${x.nome} — R$${(x.preco * x.qtd).toFixed(2)}`).join('\n')
    const msg = encodeURIComponent(`Olá! Gostaria de fazer um pedido:\n\n${linhas}\n\n*Total: R$${total.toFixed(2)}*\n\nvia Hub Vila Olímpia 🏘️`)
    window.open(`https://wa.me/${comercio.whatsapp}?text=${msg}`, '_blank')
  }

  return (
    <div className="page">
      <Header title={`Cardápio — ${comercio.nome}`} back onBack={onBack} />
      <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {itens.map((item, i) => (
          <div key={item.id} className="card fade-up" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 32 }}>{item.emoji}</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600, fontSize: 15 }}>{item.nome}</p>
              <p style={{ fontSize: 12, color: 'var(--txt2)', marginTop: 2 }}>{item.descricao}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--verde)', marginTop: 4 }}>R${item.preco.toFixed(2)}</p>
            </div>
            <button onClick={() => adicionar(item)} style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'var(--verde)', color: '#fff',
              fontSize: 22, fontWeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>+</button>
          </div>
        ))}
      </div>

      {pedido.length > 0 && (
        <div style={{
          position: 'fixed', bottom: 'calc(var(--tab-h) + 12px)', left: '50%', transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)', maxWidth: 400,
          background: 'var(--verde)', color: '#fff',
          borderRadius: 'var(--radius)', padding: '14px 20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          boxShadow: '0 4px 20px rgba(45,106,79,0.35)',
          zIndex: 90,
        }}>
          <div>
            <p style={{ fontSize: 12, opacity: 0.8 }}>{pedido.reduce((s, x) => s + x.qtd, 0)} iten(s)</p>
            <p style={{ fontSize: 18, fontWeight: 700 }}>R${total.toFixed(2)}</p>
          </div>
          <button className="btn-wpp" onClick={enviarWpp} style={{ background: '#fff', color: '#25D366' }}>
            Pedir via WhatsApp
          </button>
        </div>
      )}
    </div>
  )
}

function ComercioDetalhe({ comercio, onBack }) {
  const [verCatalogo, setVerCatalogo] = useState(false)

  if (verCatalogo) return <CatalogoView comercio={comercio} onBack={() => setVerCatalogo(false)} />

  return (
    <div className="page">
      <Header title={comercio.nome} back onBack={onBack} subtitle={categoriaLabel[comercio.categoria]} />
      <div style={{ padding: '16px 16px 0' }}>
        {/* Hero */}
        <div className="card" style={{
          background: comercio.cor, color: '#fff',
          padding: '28px 24px', marginBottom: 12, textAlign: 'center',
        }}>
          <span style={{ fontSize: 52 }}>{comercio.emoji}</span>
          <p style={{ marginTop: 8, fontSize: 14, opacity: 0.9 }}>{comercio.descricao}</p>
        </div>

        {/* Info */}
        <div className="card" style={{ padding: '14px 16px', marginBottom: 12 }}>
          <InfoRow icon="📍" text={comercio.endereco} />
          <InfoRow icon="📞" text={comercio.telefone} />
          <InfoRow icon="🕐" text={`Seg–Sex: ${comercio.horario.seg_sex}`} />
          <InfoRow icon="" text={`Sáb: ${comercio.horario.sab} · Dom: ${comercio.horario.dom}`} />
        </div>

        {/* Ações */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          <a href={`https://wa.me/${comercio.whatsapp}`} target="_blank" rel="noreferrer"
            className="btn-wpp" style={{ flex: 1, justifyContent: 'center' }}>
            WhatsApp
          </a>
          {comercio.parceiro_plus && (
            <button onClick={() => setVerCatalogo(true)} style={{
              flex: 1, background: 'var(--amarelo)', color: '#fff',
              borderRadius: 99, fontWeight: 600, fontSize: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}>
              🛍 Ver cardápio
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function InfoRow({ icon, text }) {
  return (
    <div style={{ display: 'flex', gap: 10, padding: '6px 0', borderBottom: '1px solid var(--border)', alignItems: 'flex-start' }}>
      <span style={{ fontSize: 14, width: 20 }}>{icon}</span>
      <span style={{ fontSize: 13, color: 'var(--txt2)', flex: 1 }}>{text}</span>
    </div>
  )
}

export default function Comercios() {
  const [selecionado, setSelecionado] = useState(null)
  const [filtro, setFiltro] = useState('todos')

  if (selecionado) return <ComercioDetalhe comercio={selecionado} onBack={() => setSelecionado(null)} />

  const categorias = ['todos', ...new Set(comercios.map(c => c.categoria))]
  const lista = filtro === 'todos' ? comercios : comercios.filter(c => c.categoria === filtro)

  return (
    <div className="page">
      <Header title="Comércios" subtitle="Estabelecimentos da Vila Olímpia" />

      {/* Filtros */}
      <div style={{ padding: '12px 16px', display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none' }}>
        {categorias.map(cat => (
          <button key={cat} onClick={() => setFiltro(cat)} style={{
            padding: '6px 14px', borderRadius: 99, whiteSpace: 'nowrap',
            fontSize: 12, fontWeight: 600,
            background: filtro === cat ? 'var(--verde)' : 'var(--bg2)',
            color: filtro === cat ? '#fff' : 'var(--txt2)',
            transition: 'all 0.15s',
            border: 'none',
          }}>
            {cat === 'todos' ? 'Todos' : categoriaLabel[cat] || cat}
          </button>
        ))}
      </div>

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {lista.map((c, i) => (
          <button key={c.id} className="card fade-up" onClick={() => setSelecionado(c)}
            style={{ padding: '14px 16px', display: 'flex', gap: 14, alignItems: 'center', width: '100%', textAlign: 'left' }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14, flexShrink: 0,
              background: c.cor, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 26,
            }}>{c.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                <span style={{ fontWeight: 600, fontSize: 15 }}>{c.nome}</span>
                {c.parceiro_plus && <span className="badge-plus">PLUS</span>}
              </div>
              <span style={{ fontSize: 12, color: 'var(--txt3)', fontWeight: 500 }}>{categoriaLabel[c.categoria]}</span>
              <p style={{ fontSize: 12, color: 'var(--txt2)', marginTop: 3, lineHeight: 1.4 }}>{c.descricao}</p>
            </div>
            <span style={{ color: 'var(--txt3)', fontSize: 18 }}>›</span>
          </button>
        ))}
      </div>
      <div style={{ height: 16 }} />
    </div>
  )
}
