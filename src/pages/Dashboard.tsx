export default function Dashboard() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Dashboard</h1>
      <p style={{ color: 'var(--muted)' }}>
        Connect your revenue sources and manage attestations from here.
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
        <h2 style={{ marginTop: 0, fontSize: '1rem' }}>Quick actions</h2>
        <ul style={{ color: 'var(--muted)' }}>
          <li>Connect Stripe, Razorpay, or Shopify (coming soon)</li>
          <li>Trigger monthly revenue report</li>
          <li>View attestation history</li>
        </ul>
      </section>
    </div>
  )
}
