import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import NoiseTexture from './NoiseTexture'

const meta = {
  title: 'Components/NoiseTexture',
  component: NoiseTexture,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'SVG noise texture with optional dot grid. Use as overlay (e.g. behind hero).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    opacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    overlay: { control: 'boolean' },
    dots: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: 400, height: 200, background: 'var(--surface-default)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NoiseTexture>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    overlay: true,
    dots: true,
    opacity: 1,
  },
}

export const NoDots: Story = {
  args: {
    overlay: true,
    dots: false,
    opacity: 0.6,
  },
}
