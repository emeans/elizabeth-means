import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import MetricsCard from './MetricsCard'

const meta = {
  title: 'Components/MetricsCard',
  component: MetricsCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Card for one or more metrics (value + description). Single metric or multiple in a row.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof MetricsCard>

export default meta

type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    value: '14',
    description: 'hours slept today (personal best)',
  },
}

export const SingleWithNode: Story = {
  args: {
    value: '0',
    description: 'regrets about knocking that off the counter',
  },
}

export const Multiple: Story = {
  args: {
    metrics: [
      { value: '3', description: 'cats in household' },
      { value: '0', description: 'boundaries respected' },
      { value: '∞', description: 'perceived injustices' },
    ],
  },
}