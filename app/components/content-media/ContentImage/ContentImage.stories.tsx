import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ContentImage from './ContentImage'

const meta = {
  title: 'Content & Media/ContentImage',
  component: ContentImage,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Image block for long-form content. Optional caption and click-to-expand modal.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    caption: { control: 'text' },
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


export const Default: Story = {
  args: {
    src: '/images/placeholder/yael-belly.jpg',
    alt: 'Fully Deployed - Cat bed utilization: 147% · Open to feedback',
    caption: 'Cat bed utilization: 147% · Open to feedback',
  },
}

export const Expandable: Story = {
  args: {
    src: '/images/placeholder/cedar-the-performance-reviewer.jpg',
    alt: 'Cedar The Stakeholder - Senior Cat, Product Strategy · Awaiting deliverables',
    caption: 'Senior Cat, Product Strategy · Awaiting deliverables',
    expandable: true,
  },
}

export const NoCaption: Story = {
  args: {
    src: '/images/placeholder/yael-upside-down.jpg',
    alt: 'The Discovery Phase - User research gone rogue · Report available',
  },
}
