import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0f172a',
      color: 'white',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</div>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Page non trouvée</h1>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Cette page n&apos;existe pas.</p>
      <Link href="/" style={{
        background: '#2563eb',
        color: 'white',
        padding: '0.75rem 2rem',
        borderRadius: '0.75rem',
        textDecoration: 'none',
        fontWeight: 600
      }}>
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}
