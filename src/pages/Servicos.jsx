import { prestadores } from '../data/mock'
import Header from '../components/Header'

export default function Servicos() {
  return (
    <div className="page">
      <Header title="Serviços" subtitle="Autônomos e prestadores da Vila Olímpia" />

      <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {prestadores.map((p, i) => (
          <div key={p.id} className="card fade-up" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26,
              }}>{p.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 15 }}>{p.nome}</p>
                    <span className="tag" style={{ background: 'var(--verde-light)', color: 'var(--verde)', marginTop: 4 }}>
                      {p.especialidade}
                    </span>
                  </div>
                  <span className="stars">{'★'.repeat(Math.floor(p.avaliacao))} <span style={{ fontSize: 12, color: 'var(--txt3)', fontFamily: 'DM Sans' }}>{p.avaliacao.toFixed(1)}</span></span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--txt2)', marginTop: 8, lineHeight: 1.5 }}>{p.descricao}</p>
                <a href={`https://wa.me/${p.whatsapp}`} target="_blank" rel="noreferrer"
                  className="btn-wpp" style={{ marginTop: 12, alignSelf: 'flex-start' }}>
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Anuncie */}
      <div style={{ margin: '8px 16px 0', padding: '18px 20px', borderRadius: 'var(--radius)', background: 'var(--amarelo-light)', border: '1px dashed var(--amarelo)' }}>
        <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Você é autônomo?</p>
        <p style={{ fontSize: 13, color: 'var(--txt2)', marginBottom: 12 }}>Apareça aqui para toda a Vila Olímpia. Cadastro gratuito no MVP.</p>
        <a href="https://wa.me/5512999999999?text=Olá! Quero me cadastrar como prestador no Hub Vila Olímpia." target="_blank" rel="noreferrer"
          className="btn-wpp">
          Quero me cadastrar
        </a>
      </div>
      <div style={{ height: 16 }} />
    </div>
  )
}
