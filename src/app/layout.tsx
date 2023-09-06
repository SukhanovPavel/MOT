import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'МосОблТелеком. Интернет в Ваш дом',
  description: 'Интернет, коммуникации, быстрый качественный интернет',
  icon: "/motFavicon.png"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
    <head>
      <link rel="icon" href="/motFavicon.png" type="image/png"/>
    </head>
      <body
          className={inter.className}
      >{children}</body>
    </html>
  )
}
