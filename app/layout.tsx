import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elizabeth Means - UX Designer & Portfolio',
  description: 'Personal portfolio and resume of Elizabeth Means, UX Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://use.typekit.net/men8puj.css" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body>{children}</body>
    </html>
  )
}

