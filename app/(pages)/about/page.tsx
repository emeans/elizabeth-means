import type { Metadata } from 'next'
import About from '@features/about/About'
import Contact from '@features/shared/Contact'

export const metadata: Metadata = {
  title: 'About | Elizabeth Means',
  description: 'About Elizabeth Means—product strategy, design, and engineering.',
}

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  )
}
