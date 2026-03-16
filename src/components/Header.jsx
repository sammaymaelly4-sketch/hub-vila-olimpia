export default function Header({ title, subtitle, back, onBack }) {
  return (
    <header style={{
      padding: '16px 20px 12px',
      background: 'var(--bg)',
      position: 'sticky', top: 0, zIndex: 50,
      borderBottom: '1px solid var(--border)',
    }}>
      {back && (
        <button onClick={onBack} style={{
          color: 'var(--verde)', fontSize: 14, fontWeight: 600,
          marginBottom: 6, display: 'flex', alignItems: 'center', gap: 4,
        }}>
          ← Voltar
        </button>
      )}
      <h1 style={{ fontSize: 26, color: 'var(--txt)' }}>{title}</h1>
      {subtitle && <p style={{ fontSize: 13, color: 'var(--txt2)', marginTop: 2 }}>{subtitle}</p>}
    </header>
  )
}
