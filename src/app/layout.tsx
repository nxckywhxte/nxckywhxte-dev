import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const font = Fira_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: '@nxckywhxte',
  description: 'Portfolio website'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ru'>
      <body className={font.className}>{children}</body>
    </html>
  )
}
