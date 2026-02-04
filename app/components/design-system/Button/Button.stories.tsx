import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from './Button';

/**
 * Button component for user actions and form submissions.
 * 
 * ## When to use Button
 * - Form submissions (type="submit")
 * - Actions that change state (save, delete, cancel)
 * - Opening modals or triggering interactions
 * - Any onClick handler that doesn't navigate
 * 
 * ## When NOT to use Button
 * - Navigation to pages → Use Link component
 * - Downloads → Use Link with variant="cta"
 * - Jumping to page sections → Use Link with variant="nav"
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100%',
          minHeight: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Button component for actions. Use Link component for navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label (visible text)',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Loading state (shows spinner)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width of container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/** Stories that use custom render and don't pass args through the Controls panel */
type RenderOnlyStory = Partial<Story> & {
  render: () => React.ReactElement;
  parameters?: Story['parameters'];
};

/**
 * Default primary button - use for main call-to-action
 */
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

/**
 * Secondary button - use for alternative actions
 */
export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

/**
 * Outline button - use for subtle emphasis
 */
export const Outline: Story = {
  args: {
    label: 'Outline Button',
    variant: 'outline',
  },
};

/**
 * Ghost button - use for minimal styling
 */
export const Ghost: Story = {
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
  },
};

/**
 * Danger button - use for destructive actions
 */
export const Danger: Story = {
  args: {
    label: 'Delete Account',
    variant: 'danger',
  },
};

/**
 * All sizes for comparison. Controls (e.g. variant) apply to all three;
 * each button keeps its size for side-by-side comparison.
 */
export const Sizes: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
  },
  render: (args) => {
    const { size: _size, ...rest } = args;
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button {...rest} size="small" label="Small" />
        <Button {...rest} size="medium" label="Medium" />
        <Button {...rest} size="large" label="Large" />
      </div>
    );
  },
  parameters: {
    docs: { description: { story: 'All button sizes. Use Controls to change variant (and other props) for all three.' } },
  },
};

/**
 * Loading state - shows spinner and disables interaction
 */
export const Loading: Story = {
  args: {
    label: 'Send Message',
    loading: true,
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

/**
 * Full width button
 */
export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    fullWidth: true,
  },
};

/**
 * All variants side by side
 */
export const AllVariants: RenderOnlyStory = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary" label="Primary" />
      <Button variant="secondary" label="Secondary" />
      <Button variant="outline" label="Outline" />
      <Button variant="ghost" label="Ghost" />
      <Button variant="danger" label="Danger" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants for comparison',
      },
    },
  },
};

/**
 * Real-world example: Contact form
 */
export const ContactFormExample: RenderOnlyStory = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button type="submit" label="Send Message" />
      <Button variant="secondary" label="Cancel" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typical contact form button group',
      },
    },
  },
};
