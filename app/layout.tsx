import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400']
})

export const metadata: Metadata = {
  title: 'Feliz Aniversário!!! :)',
  description: 'Uma página animada de parabéns',
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
      <body className={workSans.className}>{children}</body>
    </html>
  )
}