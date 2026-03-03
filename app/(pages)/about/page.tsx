import type { Metadata } from 'next'
import About from '@features/about/About'
import NoiseTexture from '@/components/primitives/NoiseTexture'

export const metadata: Metadata = {
  title: 'About | Elizabeth Means',
  description: 'About Elizabeth Means — product strategy, design, and engineering.',
}

export default function AboutPage() {
  return (
    <>
      <section className='section'>
        <NoiseTexture opacity={0.4} />
        <div className='container'>
          <About />
        </div>
      </section>
    </>
  )
}
