import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/learningenglishapp-1e3bd.appspot.com/o/307574884_1455542958269820_1690643069123081125_n.jpg?alt=media&token=a35ebf80-feb2-4259-8649-43e014fe6190" type="image/x-icon" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
