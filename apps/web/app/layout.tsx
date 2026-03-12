import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ServiceConnect AI — Services à domicile',
  description: 'La première plateforme de services à domicile orchestrée par IA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>{children}</body>
    </html>
  )
}
