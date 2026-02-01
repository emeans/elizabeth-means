import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import Link from '../Link/Link';
import ThemeToggle from './ThemeToggle';

/**
 * ThemeToggle switches between light and dark themes.
 *
 * - Icon and label reflect current theme
 * - Use in nav or mobile menu; parent controls theme state
 */
const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Theme toggle button. Parent provides theme and onToggle.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Current theme',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show text label',
    },
  },
  args: {
    onToggle: fn(),
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Light mode (shows moon / “Dark”). */
export const LightMode: Story = {
  args: {
    theme: 'light',
  },
};

/** Dark mode (shows sun / “Light”). */
export const DarkMode: Story = {
  args: {
    theme: 'dark',
  },
};

/** Click to toggle; state lives in story. Canvas theme updates with the button. */
export const Interactive: Story = {
  args: { theme: 'light' },
  render: function InteractiveRender() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    return (
      <div
        data-theme={theme}
        style={{
          padding: '2rem',
          background: 'var(--surface-primary)',
          borderRadius: '8px',
          minWidth: '280px',
        }}
      >
        <ThemeToggle
          theme={theme}
          onToggle={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
        />
        <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          Current: {theme}
        </p>
      </div>
    );
  },
  parameters: {
    docs: { description: { story: 'Click to toggle; the button and background both switch theme.' } },
  },
};

/** Icon only (no label). */
export const IconOnly: Story = {
  args: {
    theme: 'light',
    showLabel: false,
  },
};

/** In a nav bar; click the toggle to switch this story’s theme. */
export const InContext: Story = {
  args: { theme: 'light' },
  render: function InContextRender() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    return (
      <div data-theme={theme}>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            background: 'var(--surface-primary)',
            borderBottom: '1px solid var(--border-default)',
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Logo</div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link variant="nav" href="#about">
              About
            </Link>
            <Link variant="nav" href="#resume">
              Resume
            </Link>
            <ThemeToggle
              theme={theme}
              onToggle={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
            />
          </div>
        </nav>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { story: 'ThemeToggle in a nav bar. Click to toggle light/dark for this story.' } },
  },
};
