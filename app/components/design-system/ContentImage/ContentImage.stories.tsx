import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ContentImage from './ContentImage'

const meta = {
  title: 'Components/ContentImage',
  component: ContentImage,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Image block for long-form content. Optional caption, full-width breakout, and click-to-expand modal.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    caption: { control: 'text' },
    fullWidth: { control: 'boolean' },
    expandable: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 720 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ContentImage>

export default meta

type Story = StoryObj<typeof meta>

const placeholderSrc = 'https://placehold.co/800x500/f5f5f5/6c6e6e?text=Content+image'

export const Default: Story = {
  args: {
    src: placeholderSrc,
    alt: 'Example content image',
    caption: 'Optional caption below the image.',
  },
}

export const FullWidth: Story = {
  args: {
    src: placeholderSrc,
    alt: 'Full width image',
    caption: 'Spans container width.',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 900 }}>
        <Story />
      </div>
    ),
  ],
}

export const Expandable: Story = {
  args: {
    src: placeholderSrc,
    alt: 'Click to expand',
    caption: 'Click the image to open full size.',
    expandable: true,
  },
}

export const NoCaption: Story = {
  args: {
    src: placeholderSrc,
    alt: 'Image without caption',
  },
}
