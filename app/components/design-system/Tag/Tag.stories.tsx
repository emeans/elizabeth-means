import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Tag from './Tag'

/**
 * Pill-shaped tag for metadata: categories, status, dates, tech stack, etc.
 */
const meta = {
  title: 'Components/Tag',
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
    children: 'Case study',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: '2024',
    variant: 'secondary',
  },
}

export const Success: Story = {
  args: {
    children: 'Published',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    children: 'Draft',
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    children: 'Archived',
    variant: 'error',
  },
}

export const Muted: Story = {
  args: {
    children: 'Metadata',
    variant: 'muted',
  },
}

export const AllVariants: Story = {
  args: { children: 'Tag' },
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="muted">Muted</Tag>
    </div>
  ),
}
