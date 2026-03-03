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
    quote: 'The food bowl was empty for four whole minutes. I want this on record.',
    attribution: '— Senior Cat, Household Operations',
  },
}

export const NoAttribution: Story = {
  args: {
    quote: 'Research indicates that sitting on the laptop significantly increases the likelihood of receiving attention.',
  },
}
