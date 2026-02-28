import type { Metadata } from 'next'
import About from '@features/about/About'
import NoiseTexture from '@/components/design-system/NoiseTexture/NoiseTexture'

export const metadata: Metadata = {
  title: 'About | Elizabeth Means',
  description: 'About Elizabeth Means — product strategy, design, and engineering.',
}

export default function AboutPage() {
  return (
    <>
      <NoiseTexture opacity={0.4} />
      <About />
    </>
  )
}
