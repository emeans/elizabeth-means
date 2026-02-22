import type { Metadata } from 'next'
import Resume from '@features/about/Resume'

export const metadata: Metadata = {
  title: 'Work | Elizabeth Means',
  description: 'Experience, resume, and professional background.',
}

export default function WorkPage() {
  return <Resume />
}
