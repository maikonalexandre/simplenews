import './globals.css'

import type { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { inter } from '@/config/fonts'

export const metadata: Metadata = {
  title: 'Online diary',
  description: 'The best online news portal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, 'min-h-screen')}
        suppressHydrationWarning
      >
        <Header />
        <div className="max-w-[1140px] m-auto py-8 px-1 sm:px-2">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}
