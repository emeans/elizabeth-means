import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Card from './Card'
import Button from '@components/Button'
import Link from '@components/Link'

/**
 * Card component for case studies, project previews, and content blocks.
 * Image is full bleed to the card edges; subtitle sits below; heading and action are optional.
 */
const meta = {
  title: 'Components/Card',
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
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta

const placeholderImage = {
  src: 'https://placehold.co/800x500/f5f5f5/6c6e6e?text=Card+image',
  alt: 'Placeholder card image',
}

type Story = StoryObj<typeof meta>

export const Minimal: Story = {
  args: {
    image: placeholderImage,
    subtitle: '2024 · Product design',
  },
}

export const WithHeading: Story = {
  args: {
    image: placeholderImage,
    heading: 'WIC Product Case Study',
    subtitle: '2024 · Product design & strategy',
  },
}

export const WithAction: Story = {
  args: {
    image: placeholderImage,
    heading: 'WIC Product Case Study',
    subtitle: '2024 · Product design & strategy',
    action: (
      <Link href="/work/wic-product-case-study" variant="cta">
        View case study
      </Link>
    ),
  },
}

export const WithButton: Story = {
  args: {
    image: placeholderImage,
    heading: 'Project Alpha',
    subtitle: 'Research & prototyping',
    action: <Button label="Learn more" variant="outline" onClick={() => {}} />,
  },
}

export const ClickableCard: Story = {
  args: {
    image: placeholderImage,
    heading: 'Entire card is a link',
    subtitle: '2024 · Example',
    href: '/work/wic-product-case-study',
  },
}

export const TextOnly: Story = {
  args: {
    heading: 'Design System',
    href: '/lab/design-system',
  },
}
