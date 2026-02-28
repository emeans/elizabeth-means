import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import FlowDiagram from './FlowDiagram'

/**
 * Flow diagram: vertical sequence of steps with an arrow from each entry
 * pointing to the next. Same card and content shape as Timeline, but no time ticks.
 */
const meta = {
  title: 'Components/FlowDiagram',
  component: FlowDiagram,
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
} satisfies Meta<typeof FlowDiagram>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Design process',
    items: [
      {
        value: 'Step 1',
        title: 'Discovery',
        description: 'Research and requirements gathering.',
        arrowLabel: 'Requirements approved',
      },
      {
        value: 'Step 2',
        title: 'Design',
        description: 'Wireframes, prototypes, and validation.',
        arrowLabel: 'Design sign-off',
      },
      {
        value: 'Step 3',
        title: 'Develop',
        description: 'Build and iterate with engineering.',
        arrowLabel: 'Ready for release',
      },
      { value: 'Step 4', title: 'Ship', description: 'Release and monitor outcomes.' },
    ],
  },
}

export const TwoSteps: Story = {
  args: {
    items: [
      {
        value: 'Input',
        title: 'User request',
        description: 'Stakeholder submits a request.',
        arrowLabel: 'Review and approval',
      },
      { value: 'Output', title: 'Approved workflow', description: 'Configurable workflow is live.' },
    ],
  },
}
