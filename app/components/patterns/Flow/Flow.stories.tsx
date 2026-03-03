import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Flow from './Flow'

/**
 * Flow: vertical sequence of steps with an arrow from each entry
 * pointing to the next. Same card and content shape as Timeline, but no time ticks.
 */
const meta = {
  title: 'Patterns/Flow',
  component: Flow,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Vertical flow with value, title, and optional description per step; arrows point to the next step.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 480 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Flow>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'The Cat Morning Routine',
    items: [
      {
        value: 'Step 1',
        title: 'Wake human',
        description: 'Sit directly on face. Maintain until acknowledgment.',
        arrowLabel: 'Human is conscious',
      },
      {
        value: 'Step 2',
        title: 'Demand breakfast',
        description: 'Vocalize grievances. Knock one item off the counter for emphasis.',
        arrowLabel: 'Food bowl filled',
      },
      {
        value: 'Step 3',
        title: 'Reject breakfast',
        description: 'Sniff bowl. Walk away. The point has been made.',
        arrowLabel: 'Superiority established',
      },
      {
        value: 'Step 4',
        title: 'Nap',
        description: 'Select the most inconvenient location. Sleep for 14 hours.',
      },
    ],
  },
}

export const TwoSteps: Story = {
  args: {
    items: [
      {
        value: 'Input',
        title: 'Empty lap detected',
        description: 'Human sits down with laptop, coffee, or full plate.',
        arrowLabel: 'Lap assessed as optimal',
      },
      {
        value: 'Output',
        title: 'Lap claimed',
        description: 'Cat deployed. Human cannot leave. This is fine.',
      },
    ],
  },
}
