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
      { value: 'Year 1', title: 'Adopted from shelter', description: 'Immediately claimed the couch. Has not moved.' },
      { value: 'Year 2', title: 'First zoomies incident', description: 'Cause unknown. Investigation ongoing.' },
      { value: 'Year 3', title: 'Knocked over first full glass of water', description: 'Made direct eye contact throughout.' },
    ],
  },
}

export const Minimal: Story = {
  args: {
    items: [
      { value: '6am', title: 'Demand breakfast' },
      { value: '6:02am', title: 'Reject breakfast' },
      { value: '6:03am', title: 'Demand second breakfast' },
    ],
  },
}
