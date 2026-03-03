/**
 * Work entries for the work index page. Card list uses title, subtitle, image, and metaItems.
 */
export interface WorkEntry {
  href: string
  image?: string
  alt?: string
  title: string
  subtitle: string
  /** Metadata shown on the preview card (e.g. Role, Timeline) */
  metaItems: { label: string; value: string }[]
}

export const wicCaseStudyEntry: WorkEntry = {
  href: '/work/wic-product-case-study',
  image: '/images/wic-case-study/nwa-conferences.png',
  alt: 'Attended 5 National WIC Association Conferences',
  title: 'Building the Playbook While Running the Play',
  subtitle: 'A 0-to-1 product built for a regulated industry: two years of discovery, design, and delivery on a WIC management information system, from research to national conference demonstrations.',
  metaItems: [
    { label: 'Role', value: 'WIC Product Manager' },
    { label: 'Timeline', value: '2023–2025' },
  ],
}

export const workEntries: WorkEntry[] = [wicCaseStudyEntry]
