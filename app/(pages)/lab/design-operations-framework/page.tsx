import NoiseTexture from '@components/primitives/NoiseTexture'
import DesignOperationsFramework from '@features/lab/DesignOperationsFramework/DesignOperationsFramework'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design Operations Framework | Lab | Elizabeth Means',
  description: 'Design operations framework by Elizabeth Means.',
}

export default function DesignOperationsFrameworkPage() {
  return (
    <section className="section">
      <NoiseTexture opacity={0.4} />
      <div className="container">
        <DesignOperationsFramework />
      </div>
    </section>
  )
}
