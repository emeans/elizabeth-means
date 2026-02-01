import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville } from 'next/font/google'
import Script from 'next/script'
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

export const metadata: Metadata = {
  title: 'Elizabeth Means',
  description: 'Product designer with 10 years of engineering experience. I bridge design and development to create user-centered solutions that actually work.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
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
    <html lang='en' className={libreBaskerville.variable}>
      <body>
        {children}
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
          data-collect-dnt="true"
        />
        <script src="https://kit.fontawesome.com/c0e71dcb85.js" crossOrigin="anonymous"></script>
        <noscript>
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  )
}
