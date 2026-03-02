import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import DelegationFramework from './DelegationFramework'
import type { DelegationLevel, DelegationRole, LegendItem } from './DelegationFramework'

const meta = {
  title: 'Components/DelegationFramework',
  component: DelegationFramework,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Matrix showing delegation levels and role progression (start → growth → ownership → outside).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DelegationFramework>

export default meta

type Story = StoryObj<typeof meta>

const defaultLevels: DelegationLevel[] = [
  { label: 'LEVEL 1', name: 'Directed Execution' },
  { label: 'LEVEL 2', name: 'Approval' },
  { label: 'LEVEL 3', name: 'Consult' },
  { label: 'LEVEL 4', name: 'Inform' },
  { label: 'LEVEL 5', name: 'Delegate' },
]

const defaultRoles: DelegationRole[] = [
  { title: 'Product Designer', description: 'Design execution', indicators: ['start', 'growth', 'ownership', 'outside', 'outside'] },
  { title: 'Design Lead', description: 'Reviews and standards', indicators: ['outside', 'start', 'growth', 'ownership', 'outside'] },
]

const defaultLegend: LegendItem[] = [
  { variant: 'start', label: 'Starts here' },
  { variant: 'growth', label: 'Growing' },
  { variant: 'ownership', label: 'Owns' },
  { variant: 'outside', label: 'Outside scope' },
]

export const Default: Story = {
  args: {
    title: 'Delegation framework',
    intro: <p>How responsibility moves from manager to team member across levels.</p>,
    levels: defaultLevels,
    roles: defaultRoles,
    legend: defaultLegend,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 900 }}>
        <Story />
      </div>
    ),
  ],
}
