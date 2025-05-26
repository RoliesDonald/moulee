import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import WhatsAppButton from './components/WhatsAppBtn'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  description: 'Moulee Garage',
  title: 'Moulee',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/mol_logo_kecil.png" type="image/svg+xml" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableColorScheme
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton
            phoneNumber="6281283700662"
            accountName="Rolies Donald"
            chatMessage="Selamat Datang di Moulee"
            avatar="/mol_logo_kecil.png"
            darkMode={true}
            allowClickAway={false}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
