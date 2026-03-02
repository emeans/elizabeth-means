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
    value: '5',
    description: 'national conferences',
  },
}

export const SingleWithNode: Story = {
  args: {
    value: '$14.9M',
    description: 'federal grant funding over two years',
  },
}

export const Multiple: Story = {
  args: {
    metrics: [
      { value: '$14.9', description: 'million federal grant' },
      { value: '0', description: 'team attrition over two years' },
      { value: '12', description: 'states in pilot' },
    ],
  },
}
