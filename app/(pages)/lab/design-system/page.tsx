import NoiseTexture from '@/components/design-system/NoiseTexture/NoiseTexture'
import DesignSystem from '@features/lab/DesignSystem/DesignSystem'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Design System | Lab | Elizabeth Means',
  description: 'Portfolio design system by Elizabeth Means.',
}

export default function DesignSystemPage() {
  return (
    <section className="section">
      <NoiseTexture opacity={0.4} />
      <div className="container">
        <DesignSystem />
      </div>
    </section>
  )
}
