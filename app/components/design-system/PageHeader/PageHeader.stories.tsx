import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import PageHeader from './PageHeader'

const meta = {
  title: 'Components/PageHeader',
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
    description: 'Design leadership and product strategy.',
  },
}

export const Entry: Story = {
  args: {
    variant: 'entry',
    overline: 'Work',
    title: 'WIC Product Case Study',
    subtitle: 'USDA WIC Modernization',
    metadata: [
      { label: 'Role', value: 'Lead designer' },
      { label: 'Timeline', value: '2023–2024' },
    ],
    executiveSummary: (
      <p>
        Supporting state agencies and vendors through the WIC transition with research, design system updates, and implementation guidance.
      </p>
    ),
  },
}

export const EntryWithImage: Story = {
  args: {
    variant: 'entry',
    overline: 'Lab',
    title: 'Design Operations Framework',
    subtitle: 'Scaling design quality',
    image: {
      src: 'https://placehold.co/1200x400/f5f5f5/6c6e6e?text=Header+image',
      alt: 'Header placeholder',
    },
    metadata: [
      { label: 'Type', value: 'Framework' },
      { label: 'Last updated', value: 'Jan 2025' },
    ],
    executiveSummary: (
      <p>
        A practical framework for design operations: quality, consistency, and collaboration at scale.
      </p>
    ),
  },
}
