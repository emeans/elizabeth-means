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
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button component for actions. Use Link component for navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
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
    children: 'Primary Button',
    variant: 'primary',
  },
};

/**
 * Secondary button - use for alternative actions
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

/**
 * Outline button - use for subtle emphasis
 */
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

/**
 * Ghost button - use for minimal styling
 */
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

/**
 * Danger button - use for destructive actions
 */
export const Danger: Story = {
  args: {
    children: 'Delete Account',
    variant: 'danger',
  },
};

/**
 * All sizes for comparison (Controls can change size on any story)
 */
export const Sizes: RenderOnlyStory = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'All button sizes.' } },
  },
};

/**
 * Loading state - shows spinner and disables interaction
 */
export const Loading: Story = {
  args: {
    children: 'Send Message',
    loading: true,
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

/**
 * Full width button
 */
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * Submit button for forms
 */
export const SubmitButton: Story = {
  args: {
    children: 'Submit Form',
    type: 'submit',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use type="submit" for form submission buttons',
      },
    },
  },
};

/**
 * All variants side by side
 */
export const AllVariants: RenderOnlyStory = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
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
      <Button type="submit">Send Message</Button>
      <Button variant="secondary">Cancel</Button>
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
