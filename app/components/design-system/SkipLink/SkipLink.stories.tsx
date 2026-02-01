import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SkipLink from './SkipLink';

/**
 * SkipLink is an accessibility feature for keyboard navigation.
 *
 * - **Purpose:** Lets keyboard users skip repetitive navigation and jump to main content (WCAG).
 * - **Usage:** Place as the first interactive element on every page, before the nav.
 * - **Test:** Press **Tab** to focus and see the link; **Enter** to jump to the target.
 */
const meta = {
  title: 'Components/SkipLink',
  component: SkipLink,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Accessibility feature for keyboard users. Hidden until focused (Tab). Place first on the page.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'Target fragment (e.g. #main-content)',
    },
    children: {
      control: 'text',
      description: 'Link label',
    },
  },
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Basic skip link. Press Tab to see it appear at the top. */
export const Default: Story = {
  args: {
    href: '#main-content',
    children: 'Skip to main content',
  },
};

/** Skip link in a realistic page layout. Uses the content prop so the nav slides down when the skip link is focused (same as the app). */
export const InContext: Story = {
  render: () => (
    <>
      <style>{`[data-skip-link-focused="true"] .skipLinkStoryNav { margin-top: 48px; transition: margin-top 0.3s ease; }`}</style>
      <SkipLink
        href="#main"
        content={
          <>
            <nav
              className="skipLinkStoryNav"
              style={{
                background: 'rgba(255,255,255,0.9)',
                padding: '1rem',
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <a href="#home" style={{ color: 'inherit' }}>
                  Home
                </a>
                <a href="#about" style={{ color: 'inherit' }}>
                  About
                </a>
                <a href="#contact" style={{ color: 'inherit' }}>
                  Contact
                </a>
              </div>
            </nav>

            <main
              id="main"
              style={{
                padding: '2rem',
                minHeight: '200px',
              }}
            >
              <h1>Main content</h1>
              <p>
                Press <kbd>Tab</kbd> from the top to focus the skip link—the nav will slide down.
                Press <kbd>Enter</kbd> to jump here.
              </p>
            </main>
          </>
        }
      />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Uses the content prop so layout reacts to focus: when the skip link is focused, the nav gets margin-top and slides down (same behavior as the live site).',
      },
    },
  },
};
