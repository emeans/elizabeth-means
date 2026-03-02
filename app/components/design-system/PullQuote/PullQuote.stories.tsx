import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import PullQuote from './PullQuote'

const meta = {
  title: 'Components/PullQuote',
  component: PullQuote,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Blockquote for pull quotes in long-form content, with optional attribution.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    quote: { control: 'text' },
    attribution: { control: 'text' },
  },
} satisfies Meta<typeof PullQuote>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    quote: 'We needed a design system that could scale across vendors and states without losing clarity.',
    attribution: '— State agency lead',
  },
}

export const NoAttribution: Story = {
  args: {
    quote: 'Research showed that consistency in enrollment flows reduced support tickets by 40%.',
  },
}
