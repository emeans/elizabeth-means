import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Card from './Card'
import Button from '@components/primitives/Button'
import Link from '@components/navigation/Link'

/**
 * Card component for case studies, project previews, and content blocks.
 * Image is full bleed to the card edges; subtitle sits below; heading and action are optional.
 */
const meta = {
  title: 'Content & Media/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Card with full-bleed image, subtitle, and optional heading and button in the bottom right.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    subtitle: { control: 'text', description: 'Text under the image' },
    heading: { control: 'text', description: 'Optional heading' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 600 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Minimal: Story = {
  args: {
    image: { src: '/images/placeholder/yael-playing-at-night.jpg', alt: 'Yael - The Consultant' },
    subtitle: '2026 · The Consultant',
  },
}

export const WithHeading: Story = {
  args: {
    image: { src: '/images/placeholder/cedar-the-performance-reviewer.jpg', alt: 'Cedar The Stakeholder - Senior Cat, Product Strategy · Awaiting deliverables' },
    heading: 'The Stakeholder',
    subtitle: 'Senior Cat, Product Strategy · Awaiting deliverables',
  },
}

export const WithAction: Story = {
  args: {
    image: { src: '/images/placeholder/yael-upside-down.jpg', alt: 'The Discovery Phase - User research gone rogue · Report available' },
    heading: 'The Discovery Phase',
    subtitle: '2026 · User research gone rogue',
    action: (
      <Link href='/lab/design-system' variant='cta'>
        View the report
      </Link>
    ),
  },
}

export const WithButton: Story = {
  args: {
    image: { src: '/images/placeholder/cedar-the-loaf.jpg', alt: 'Cedar Available for Loaf - Currently accepting pets · Do not disturb' },
    heading: 'Available for Loaf',
    subtitle: 'Currently accepting pets · Do not disturb',
    action: <Button label='Learn more' variant='outline' onClick={() => {}} />,
  },
}

export const ClickableCard: Story = {
  args: {
    image: { src: '/images/placeholder/yael-belly.jpg', alt: 'Fully Deployed - Cat bed utilization: 147% · Open to feedback' },
    heading: 'Fully Deployed',
    subtitle: 'Cat bed utilization: 147% · Open to feedback',
    href: '/lab/design-system',
  },
}

export const TextOnly: Story = {
  args: {
    heading: 'Paw Tokens',
    href: '/lab/design-system',
  },
}
