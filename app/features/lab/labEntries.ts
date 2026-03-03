import type { MetadataItem } from '@/components/layout-structure/PageHeader/PageHeader'

/**
 * Single source of truth for lab entries. Used for:
 * - Lab index cards (title, subtitle, type, lastUpdated)
 * - Entry page headers (type, lastUpdated + extraMetadata)
 */
export interface LabEntry {
  href: string
  image?: string
  alt?: string
  title: string
  subtitle: string
  type: string
  lastUpdated: string
  /** Additional metadata shown only on the entry page (e.g. Tools, Status) */
  extraMetadata?: MetadataItem[]
}

export const designSystemEntry: LabEntry = {
  href: '/lab/design-system',
  image: '/images/design-system/design-system.png',
  alt: 'Design System',
  title: 'Design System',
  subtitle:
    'Built to practice what I preach. Figma tokens, CSS pipelines, and component architecture, actively evolving as I try new tools and techniques.',
  type: 'Design System',
  lastUpdated: 'March 2026',
  extraMetadata: [
    { label: 'Tools', value: 'Figma, Custom Token Pipeline, Storybook, ZeroHeight' },
    { label: 'Status', value: 'Active' },
  ],
}

export const designOperationsFrameworkEntry: LabEntry = {
  href: '/lab/design-operations-framework',
  image: '/images/design-operations-framework/design-operations-framework.png',
  alt: 'Design Operations Framework',
  title: 'Design Operations Framework',
  subtitle:
    'The process infrastructure I built to take a design practice from solo to collaborative: templates, standards, and a delegation framework.',
  type: 'Design Operations',
  lastUpdated: 'November 2025',
  extraMetadata: [
    { label: 'Intended for', value: 'Design teams scaling from solo to collaborative' },
  ],
}

export const labEntries: LabEntry[] = [designSystemEntry, designOperationsFrameworkEntry]

/** Build PageHeader metadata array from a lab entry (Type, Last Updated, then extraMetadata). */
export function getEntryMetadata(entry: LabEntry): MetadataItem[] {
  const base: MetadataItem[] = [
    { label: 'Type', value: entry.type },
    { label: 'Last Updated', value: entry.lastUpdated },
  ]
  return entry.extraMetadata ? [...base, ...entry.extraMetadata] : base
}
