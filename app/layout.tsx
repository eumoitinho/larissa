import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400']
})

export const metadata: Metadata = {
  title: 'Happy Birthday!!! :)',
  description: 'An animated birthday wish page',
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
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  )
}