import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Overline from './Overline'

const meta = {
  title: 'Components/Overline',
  component: Overline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Small uppercase label above headings.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Label text' },
  },
} satisfies Meta<typeof Overline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Work',
  },
}
