import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Timeline from './Timeline'

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Vertical timeline with value (date/label), title, and optional description per item.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: { control: false },
  },
} satisfies Meta<typeof Timeline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      { value: 'Apr 2024', title: 'USDA announced WIC Final Food Rule', description: 'Chicago conference.' },
      { value: 'Q2 2024', title: 'Pilot with first state' },
      { value: 'Q4 2024', title: 'Design system v2 released', description: 'Inclusive of new food categories.' },
    ],
  },
}

export const Minimal: Story = {
  args: {
    items: [
      { value: 'Phase 1', title: 'Discovery' },
      { value: 'Phase 2', title: 'Design' },
      { value: 'Phase 3', title: 'Build' },
    ],
  },
}
