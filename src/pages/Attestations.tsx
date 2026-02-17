export default function Attestations() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Attestations</h1>
      <p style={{ color: 'var(--muted)' }}>
        Revenue attestations published on Stellar. Merkle roots and metadata are stored on-chain.
      </p>
      <section
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'var(--surface)',
          borderRadius: 8,
          border: '1px solid var(--border)',
        }}
      >
        <p style={{ color: 'var(--muted)', margin: 0 }}>
          No attestations yet. Run a revenue report from the dashboard to create one.
        </p>
      </section>
    </div>
  )
}
