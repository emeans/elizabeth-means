import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

/**
 * ThemeToggle is a specialized button for switching between light and dark themes.
 * 
 * ## Purpose
 * - Toggle between light/dark themes
 * - Display appropriate icon and label
 * - Provide accessible theme switching
 * 
 * ## Design Pattern
 * This is a specialized UI control, similar to HamburgerButton.
 * Not a general-purpose button - it has one specific job.
 */
const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Theme toggle button that switches between light and dark modes with icon feedback.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Current theme',
      table: {
        type: { summary: "'light' | 'dark'" },
      },
    },
    onToggle: {
      action: 'toggled',
      description: 'Callback when theme is toggled',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show text label alongside icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    lightIcon: {
      description: 'Icon to show in light mode',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '🌙' },
      },
    },
    darkIcon: {
      description: 'Icon to show in dark mode',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '☀️' },
      },
    },
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Light mode - shows moon icon
 */
export const LightMode: Story = {
  args: {
    theme: 'light',
  },
};

/**
 * Dark mode - shows sun icon
 */
export const DarkMode: Story = {
  args: {
    theme: 'dark',
  },
};

/**
 * Interactive example - click to toggle
 */
export const Interactive: Story = {
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    return (
      <div>
        <ThemeToggle
          theme={theme}
          onToggle={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
        />
        <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
          Current theme: {theme}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Click to toggle between light and dark modes',
      },
    },
  },
};

/**
 * With custom icons (Lucide React example)
 */
export const WithCustomIcons: Story = {
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    // Simulating Lucide icons with inline SVG
    const MoonIcon = (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    );
    
    const SunIcon = (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    );
    
    return (
      <ThemeToggle
        theme={theme}
        onToggle={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
        lightIcon={MoonIcon}
        darkIcon={SunIcon}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Using custom SVG icons (like Lucide React) instead of emoji',
      },
    },
  },
};

/**
 * Icon only (no label)
 */
export const IconOnly: Story = {
  args: {
    theme: 'light',
    showLabel: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact icon-only variant for toolbars or limited space',
      },
    },
  },
};

/**
 * With custom labels
 */
export const CustomLabels: Story = {
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    return (
      <ThemeToggle
        theme={theme}
        onToggle={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
        lightLabel="Dark Mode"
        darkLabel="Light Mode"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom text labels for internationalization or branding',
      },
    },
  },
};

/**
 * In navigation context
 */
export const InNavigationContext: Story = {
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    return (
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          background: theme === 'light' ? '#f5f5f5' : '#2C2A42',
          borderBottom: '1px solid #e5e7eb',
          width: '100%',
          maxWidth: '1200px',
          transition: 'background 0.3s ease',
        }}
      >
        <div style={{ 
          fontSize: '1.5rem', 
          fontWeight: 700,
          color: theme === 'light' ? '#2C2A42' : '#f5f5f5'
        }}>
          Logo
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#about" style={{ color: theme === 'light' ? '#374151' : '#f5f5f5' }}>About</a>
          <a href="#resume" style={{ color: theme === 'light' ? '#374151' : '#f5f5f5' }}>Resume</a>
          <ThemeToggle theme={theme} onToggle={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')} />
        </div>
      </nav>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'ThemeToggle in a realistic navigation bar with theme-aware styling',
      },
    },
  },
};

/**
 * All states comparison
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Light Mode (shows moon)</h4>
        <ThemeToggle theme="light" onToggle={() => {}} />
      </div>
      
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Dark Mode (shows sun)</h4>
        <ThemeToggle theme="dark" onToggle={() => {}} />
      </div>
      
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Icon Only</h4>
        <ThemeToggle theme="light" onToggle={() => {}} showLabel={false} />
      </div>
      
      <div>
        <h4 style={{ marginBottom: '1rem' }}>With Custom Icons</h4>
        <ThemeToggle 
          theme="light" 
          onToggle={() => {}}
          lightIcon="🌜"
          darkIcon="🌞"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all theme toggle variants',
      },
    },
  },
};

/**
 * Accessibility demonstration
 */
export const AccessibilityDemo: Story = {
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    return (
      <div style={{ padding: '2rem' }}>
        <ThemeToggle
          theme={theme}
          onToggle={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
        />
        
        <div style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
          <h4 style={{ marginBottom: '0.5rem' }}>Accessibility Features:</h4>
          <ul style={{ lineHeight: 1.6, color: '#666' }}>
            <li>✅ aria-label: "Switch to {theme === 'light' ? 'dark' : 'light'} mode"</li>
            <li>✅ title attribute for tooltip</li>
            <li>✅ type="button" (prevents form submission)</li>
            <li>✅ Keyboard accessible (Space/Enter)</li>
            <li>✅ Focus visible outline</li>
            <li>✅ Icon marked aria-hidden="true"</li>
            <li>✅ High contrast mode support</li>
            <li>✅ Reduced motion support</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All accessibility features built into the component',
      },
    },
  },
};

/**
 * Mobile menu context
 */
export const MobileMenuContext: Story = {
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    return (
      <div
        style={{
          width: '280px',
          background: theme === 'light' ? '#fff' : '#2C2A42',
          borderLeft: '1px solid #e5e7eb',
          padding: '1rem',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="#about" style={{ 
            padding: '0.5rem',
            color: theme === 'light' ? '#374151' : '#f5f5f5' 
          }}>
            About
          </a>
          <a href="#resume" style={{ 
            padding: '0.5rem',
            color: theme === 'light' ? '#374151' : '#f5f5f5'
          }}>
            Resume
          </a>
          <a href="#contact" style={{ 
            padding: '0.5rem',
            color: theme === 'light' ? '#374151' : '#f5f5f5'
          }}>
            Contact
          </a>
          <ThemeToggle
            theme={theme}
            onToggle={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
          />
        </nav>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'ThemeToggle in a mobile menu (full width layout)',
      },
    },
  },
};
