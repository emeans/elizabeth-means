import type { Metadata } from 'next'
import About from '@features/about/About'
import NoiseTexture from '@/components/design-system/NoiseTexture/NoiseTexture'
import Polaroid from '@/components/design-system/Polaroid/Polaroid'

export const metadata: Metadata = {
  title: 'About | Elizabeth Means',
  description: 'About Elizabeth Means—product strategy, design, and engineering.',
}

export default function AboutPage() {
  return (
    <>
     <div className='polaroid-wrapper'>
          <Polaroid
            image={{ src: '/images/2025-nwa-minneapolis.png', alt: 'Me' }}
            angle={-5}
            width={300}
            caption="Summer 2024"
            overlay
            style={{ bottom: 0, left: 75 }}
          />
          <Polaroid
            image={{ src: '/images/Elizabeth_Means.png', alt: 'Me' }}
            angle={3}
            width={300}
            caption="Summer 2024"
            overlay
            style={{ bottom: 200, right: 100 }}
          />
        </div>
      <NoiseTexture opacity={0.4} />
      <About />
    </>
  )
}
