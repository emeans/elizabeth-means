import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville, Public_Sans } from 'next/font/google'
import './globals.css'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
}

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-baskerville',
})

const publicSans = Public_Sans({
  weight: ['100','400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-public-sans',
})

export const metadata: Metadata = {
  title: 'Elizabeth Means',
  description: 'I work at the intersection of product strategy, design, and engineering—bridging what users need with what\'s technically possible.',
  icons: {
    // Favicon is set by Favicon component so it can switch with theme (light/dark)
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#6366F1',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${libreBaskerville.variable} ${publicSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
