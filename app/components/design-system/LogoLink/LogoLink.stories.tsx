import type { Meta, StoryObj } from '@storybook/react';
import LogoLink from './LogoLink';

/**
 * LogoLink is the site branding element that appears in navigation.
 * 
 * ## Purpose
 * - Displays site identity (logo and/or text)
 * - Always navigates to homepage
 * - Can be updated with logo when available
 * 
 * ## Design Pattern
 * This is a specialized link for branding, separate from general navigation links.
 */
const meta = {
  title: 'Components/LogoLink',
  component: LogoLink,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Site branding link for navigation. Currently text-only, designed to support logo images.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    logo: {
      control: 'text',
      description: 'Logo image source (for future use)',
      table: {
        type: { summary: 'string' },
      },
    },
    logoAlt: {
      control: 'text',
      description: 'Logo alt text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Site logo' },
      },
    },
    children: {
      control: 'text',
      description: 'Site name / brand text',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Elizabeth Means' },
      },
    },
    hideText: {
      control: 'boolean',
      description: 'Hide text and show logo only',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    href: {
      control: 'text',
      description: 'Where to navigate',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#home' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when clicked',
    },
  },
} satisfies Meta<typeof LogoLink>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Current implementation - text only
 */
export const TextOnly: Story = {
  args: {
    children: 'Elizabeth Means',
  },
};

/**
 * Custom text
 */
export const CustomText: Story = {
  args: {
    children: 'My Portfolio',
  },
};

/**
 * With logo image (future implementation)
 */
export const WithLogo: Story = {
  args: {
    logo: 'https://via.placeholder.com/40x40?text=Logo',
    logoAlt: 'Site logo',
    children: 'Elizabeth Means',
  },
  parameters: {
    docs: {
      description: {
        story: 'Future implementation with logo image alongside text',
      },
    },
  },
};

/**
 * Logo only, no text (future implementation)
 */
export const LogoOnly: Story = {
  args: {
    logo: 'https://via.placeholder.com/40x40?text=EM',
    logoAlt: 'Elizabeth Means',
    hideText: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Logo-only variant for compact layouts',
      },
    },
  },
};

/**
 * In navigation context
 */
export const InNavigationContext: Story = {
  render: () => (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        background: '#f5f5f5',
        borderBottom: '1px solid #e5e7eb',
        width: '100%',
        maxWidth: '1200px',
      }}
    >
      <LogoLink>Elizabeth Means</LogoLink>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#about" style={{ color: '#374151' }}>About</a>
        <a href="#resume" style={{ color: '#374151' }}>Resume</a>
        <a href="#contact" style={{ color: '#374151' }}>Contact</a>
      </div>
    </nav>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'LogoLink in a realistic navigation bar context',
      },
    },
  },
};

/**
 * With mobile menu close callback
 */
export const WithClickHandler: Story = {
  args: {
    children: 'Elizabeth Means',
    onClick: () => console.log('Logo clicked - closing mobile menu'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Can accept onClick handler (e.g., to close mobile menu on navigation)',
      },
    },
  },
};

/**
 * Future logo variations
 */
export const FutureLogoVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Text Only (Current)</h4>
        <LogoLink>Elizabeth Means</LogoLink>
      </div>
      
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Logo + Text (Future)</h4>
        <LogoLink 
          logo="https://via.placeholder.com/40x40?text=Logo"
          logoAlt="Site logo"
        >
          Elizabeth Means
        </LogoLink>
      </div>
      
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Logo Only (Future)</h4>
        <LogoLink 
          logo="https://via.placeholder.com/40x40?text=EM"
          logoAlt="Elizabeth Means"
          hideText
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of current and future implementations',
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
      <LogoLink>Elizabeth Means</LogoLink>
      
      <div style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>Accessibility Features:</h4>
        <ul style={{ lineHeight: 1.6, color: '#666' }}>
          <li>✅ aria-label: "Go to homepage"</li>
          <li>✅ Semantic link element (&lt;a&gt;)</li>
          <li>✅ Keyboard accessible (Tab to focus, Enter to activate)</li>
          <li>✅ Focus visible outline</li>
          <li>✅ Hover state for visual feedback</li>
          <li>✅ High contrast mode support</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All accessibility features built into the component',
      },
    },
  },
};
