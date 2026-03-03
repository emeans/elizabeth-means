import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import RangeChart from './RangeChart'
import type { DelegationLevel, DelegationRole, LegendItem } from './RangeChart'

const meta = {
  title: 'Patterns/RangeChart',
  component: RangeChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Matrix showing delegation levels and role progression (start → growth → ownership → outside).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RangeChart>

export default meta

type Story = StoryObj<typeof meta>

const defaultLevels: DelegationLevel[] = [
  { label: 'LEVEL 1', name: 'Supervised Zoomies' },
  { label: 'LEVEL 2', name: 'Requires Approval' },
  { label: 'LEVEL 3', name: 'Consult the Senior Cat' },
  { label: 'LEVEL 4', name: 'Inform (I\'ll Judge Silently)' },
  { label: 'LEVEL 5', name: 'Full Autonomy (I\'m Napping)' },
]

const defaultRoles: DelegationRole[] = [
  { title: 'Junior Human', description: 'Food & logistics', indicators: ['start', 'growth', 'ownership', 'outside', 'outside'] },
  { title: 'Senior Human', description: 'Strategic lap provision', indicators: ['outside', 'start', 'growth', 'ownership', 'outside'] },
  { title: 'The Cat', description: 'Executive oversight & ambient judgment', indicators: ['outside', 'outside', 'outside', 'outside', 'ownership'] },
]

const defaultLegend: LegendItem[] = [
  { variant: 'start', label: 'Starts here' },
  { variant: 'growth', label: 'Growing' },
  { variant: 'ownership', label: 'Owns' },
  { variant: 'outside', label: 'Outside scope' },
]

export const Default: Story = {
  args: {
    title: 'The Houselhold Delegation framework',
    intro: <p>How responsibility is (non-negotiably) assigned across the household hierarchy. The cat has final say.</p>,
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
