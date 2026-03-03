import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Tag from './Tag'

/**
 * Pill-shaped tag for metadata: categories, status, dates, tech stack, etc.
 */
const meta = {
  title: 'Primitives/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Tag displays metadata as a pill. Use variant to match context (primary, secondary, success, warning, error, muted).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Tag label' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'muted'],
      description: 'Color variant',
    },
  },
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Good cat',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Tortoiseshell',
    variant: 'secondary',
  },
}

export const Success: Story = {
  args: {
    children: 'Napping',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    children: 'Zoomies imminent',
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    children: 'Knocked off counter',
    variant: 'error',
  },
}

export const Muted: Story = {
  args: {
    children: 'Judging silently',
    variant: 'muted',
  },
}

export const AllVariants: Story = {
  args: { children: 'Tag' },
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <Tag variant="primary">Good cat</Tag>
      <Tag variant="secondary">Tortoiseshell</Tag>
      <Tag variant="success">Napping</Tag>
      <Tag variant="warning">Zoomies imminent</Tag>
      <Tag variant="error">Knocked off counter</Tag>
      <Tag variant="muted">Judging silently</Tag>
    </div>
  ),
}