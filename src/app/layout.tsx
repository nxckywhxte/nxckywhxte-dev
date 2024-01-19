import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'

const fontSans = FontSans({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: '@nxckywhxte',
  description: 'Portfolio website'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='ru'
      suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
