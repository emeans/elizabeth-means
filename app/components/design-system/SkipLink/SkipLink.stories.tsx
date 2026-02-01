import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SkipLink from './SkipLink';

/**
 * SkipLink is an accessibility feature for keyboard navigation.
 * 
 * ## Purpose
 * Allows keyboard users to skip repetitive navigation and jump directly to main content.
 * This is a WCAG requirement for accessible websites.
 * 
 * ## When to Use
 * - First interactive element on every page
 * - Before navigation menus
 * - Links to main content area
 * 
 * ## How to Test
 * - Press Tab key to see the skip link appear
 * - Press Enter to jump to main content
 * - Should be invisible until focused
 */
const meta = {
  title: 'Components/SkipLink',
  component: SkipLink,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Accessibility feature that allows keyboard users to skip navigation. Hidden until focused with Tab key.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'Anchor target (usually #main-content)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#main-content' },
      },
    },
    children: {
      control: 'text',
      description: 'Link text',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Skip to main content' },
      },
    },
  },
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default skip link - Press Tab to see it appear at the top
 */
export const Default: Story = {
  args: {
    href: '#main-content',
    children: 'Skip to main content',
  },
  parameters: {
    docs: {
      description: {
        story: '**Press Tab** to focus and see the skip link slide down from the top of the screen.',
      },
    },
  },
};

/**
 * Custom destination - can skip to different sections
 */
export const CustomDestination: Story = {
  args: {
    href: '#search',
    children: 'Skip to search',
  },
  parameters: {
    docs: {
      description: {
        story: 'Skip links can target any section of the page, not just main content.',
      },
    },
  },
};

/**
 * Multiple skip links - for complex pages
 */
export const MultipleSkipLinks: Story = {
  render: () => (
    <>
      <SkipLink href="#main-content">
        Skip to main content
      </SkipLink>
      <SkipLink href="#navigation" style={{ top: '-55px' }}>
        Skip to navigation
      </SkipLink>
      <SkipLink href="#search" style={{ top: '-50px' }}>
        Skip to search
      </SkipLink>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complex pages can have multiple skip links. Press Tab repeatedly to cycle through them.',
      },
    },
  },
};

/**
 * In context - with page structure
 */
export const InPageContext: Story = {
  render: () => (
    <div>
      <SkipLink href="#main" />
      
      <nav
        style={{
          background: '#f5f5f5',
          padding: '1rem',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="#home" style={{ color: '#374151' }}>Home</a>
          <a href="#about" style={{ color: '#374151' }}>About</a>
          <a href="#services" style={{ color: '#374151' }}>Services</a>
          <a href="#contact" style={{ color: '#374151' }}>Contact</a>
        </div>
      </nav>
      
      <main
        id="main"
        style={{
          padding: '2rem',
          minHeight: '300px',
        }}
      >
        <h1>Main Content</h1>
        <p>
          Press Tab from the top of this story to see the skip link appear.
          Press Enter to jump directly here, skipping the navigation.
        </p>
      </main>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates skip link in a realistic page structure. Tab from the top to see it in action.',
      },
    },
  },
};

/**
 * Accessibility demonstration
 */
export const AccessibilityDemo: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <SkipLink />
      
      <div style={{ marginTop: '2rem' }}>
        <h3>How to Test:</h3>
        <ol style={{ lineHeight: 1.8, color: '#666' }}>
          <li>Click outside this story to reset focus</li>
          <li>Press <kbd>Tab</kbd> key</li>
          <li>Skip link appears at top of page</li>
          <li>Press <kbd>Enter</kbd> to jump to main content</li>
          <li>Press <kbd>Shift+Tab</kbd> to go back</li>
        </ol>
        
        <h3 style={{ marginTop: '2rem' }}>Accessibility Features:</h3>
        <ul style={{ lineHeight: 1.8, color: '#666' }}>
          <li>✅ Hidden until keyboard focus</li>
          <li>✅ First focusable element</li>
          <li>✅ Clear visual indicator</li>
          <li>✅ Smooth animation (respects prefers-reduced-motion)</li>
          <li>✅ High contrast mode support</li>
          <li>✅ Works in light and dark themes</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete accessibility feature demonstration with testing instructions.',
      },
    },
  },
};

/**
 * Visual states - forced visibility for design review
 */
export const VisualStates: Story = {
  render: () => (
    <div style={{ padding: '4rem 2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h4>Focused State (force visible):</h4>
        <a
          href="#main"
          style={{
            position: 'relative',
            display: 'inline-flex',
            background: 'var(--action-primary-hover)',
            color: 'var(--text-inverse)',
            padding: '12px 24px',
            borderRadius: '0 0 8px 8px',
            fontWeight: 600,
            fontSize: '0.875rem',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            outline: '3px solid var(--action-primary-default)',
            outlineOffset: '-3px',
          }}
        >
          Skip to main content
        </a>
      </div>
      
      <div>
        <h4>Default State (hidden):</h4>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>
          SkipLink is hidden off-screen by default. Press Tab to see it.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Visual design of the skip link in its focused state (forced visible for design review).',
      },
    },
  },
};

/**
 * Custom styling example
 */
export const CustomStyling: Story = {
  args: {
    href: '#main-content',
    children: 'Skip to main content',
    className: 'custom-skip-link',
  },
  parameters: {
    docs: {
      description: {
        story: 'SkipLink accepts a className prop for custom styling if needed.',
      },
    },
  },
};
