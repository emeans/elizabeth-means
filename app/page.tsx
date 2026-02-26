import Hero from '@/features/home/Hero'
import NoiseTexture from '@/components/design-system/NoiseTexture/NoiseTexture'

export default function Home() {
  return (
    <>
      <Hero />
      <NoiseTexture opacity={0.4} />
    </>
  )
}
