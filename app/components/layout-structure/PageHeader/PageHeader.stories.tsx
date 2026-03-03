import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import PageHeader from './PageHeader'

const meta = {
  title: 'Layout & Structure/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Page header with optional overline, title, subtitle, metadata tags, image, and executive summary.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof PageHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    variant: 'standard',
    title: 'About',
    description: 'Product strategy and design leadership.',
  },
}

export const Entry: Story = {
  args: {
    variant: 'entry',
    overline: 'Lab',
    title: 'Design Operations Framework',
    subtitle: 'Building the infrastructure for a scalable, handoff-ready design practice',
    metadata: [
      { label: 'Type', value: 'Design Operations' },
      { label: 'Last updated', value: 'November 2025' },
    ],
    executiveSummary: (
      <p>
        A practical framework for design operations: quality, consistency, and collaboration at scale.
      </p>
    ),
  },
}
export const EntryWithImage: Story = {
  args: {
    variant: 'entry',
    overline: 'Work',
    title: 'Building the Playbook While Running the Play',
    subtitle: '0-to-1 Product Management',
    image: {
      src: '/images/wic-case-study/nwa-conferences.png',
      alt: 'Attended 5 National WIC Association Conferences',
    },
    metadata: [
      { label: 'Role', value: 'Product Manager' },
      { label: 'Timeline', value: '2023–2025' },
    ],
    executiveSummary: (
      <p>
        A 0-to-1 product built for a regulated industry: two years of discovery, design, and delivery on a WIC management information system, from research to national conference demonstrations.
      </p>
    ),
  },
}


