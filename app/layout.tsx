import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Feliz Aniversário Larissa! 🎉',
  description: 'Uma animação especial de aniversário feita com carinho',
  icons: {
    icon: '/img/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}