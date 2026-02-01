import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import HamburgerButton from './HamburgerButton';
import Link from '../Link/Link';

/**
 * HamburgerButton is a mobile menu toggle with animated state transitions.
 * 
 * ## When to use HamburgerButton
 * - Mobile navigation menus
 * - Collapsible sidebars
 * - Any menu toggle that needs visual feedback
 * 
 * ## Design Pattern
 * This is a specialized button for UI controls, separate from the main Button component
 * which handles CTAs and form submissions.
 */
const meta = {
  title: 'Components/HamburgerButton',
  component: HamburgerButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Animated hamburger menu button for mobile navigation. Three lines animate to X when open.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the menu is currently open',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler to toggle menu',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Toggle menu' },
      },
    },
  },
} satisfies Meta<typeof HamburgerButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/** Stories that use custom render and don't pass args through the Controls panel */
type RenderOnlyStory = Partial<Story> & {
  render: () => React.ReactElement;
  parameters?: Story['parameters'];
};

/**
 * Closed state - three horizontal lines
 */
export const Closed: Story = {
  args: {
    isOpen: false,
  },
};

/**
 * Open state - X shape
 */
export const Open: Story = {
  args: {
    isOpen: true,
  },
};

/**
 * Interactive example with state management
 */
export const Interactive: RenderOnlyStory = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div>
        <HamburgerButton
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#666' }}>
          Click to toggle: {isOpen ? 'Open' : 'Closed'}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the button to see the animation between states',
      },
    },
  },
};

/**
 * Real-world example: Mobile navigation header
 */
export const InNavigationContext: RenderOnlyStory = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            background: '#fff',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <div style={{ fontWeight: 600, fontSize: '1.125rem' }}>
            Logo
          </div>
          <HamburgerButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </nav>
        {isOpen && (
          <div
            style={{
              padding: '1rem',
              background: 'var(--surface-primary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <Link variant="nav" href="#about" blockLayout>
              About
            </Link>
            <Link variant="nav" href="#resume" blockLayout>
              Resume
            </Link>
            <Link variant="nav" href="#contact" blockLayout>
              Contact
            </Link>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of hamburger button in a mobile navigation context',
      },
    },
  },
};

