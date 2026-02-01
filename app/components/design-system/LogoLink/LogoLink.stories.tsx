import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Link from '../Link/Link';
import LogoLink from './LogoLink';

/**
 * LogoLink is the site branding element in navigation.
 *
 * - Displays site identity (text and optionally logo)
 * - Navigates to homepage (or custom href)
 * - Use with onClick to close mobile menu on click
 */
const meta = {
  title: 'Components/LogoLink',
  component: LogoLink,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Site branding link for navigation. Text-only by default; supports optional logo image.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Brand text' },
    href: { control: 'text', description: 'Link target' },
    logo: { control: 'text', description: 'Logo image URL' },
    hideText: { control: 'boolean', description: 'Show logo only' },
  },
} satisfies Meta<typeof LogoLink>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default text-only branding (current app usage). */
export const Default: Story = {
  args: {
    children: 'Elizabeth Means',
    href: '#home',
  },
};

/** Custom brand text. */
export const CustomText: Story = {
  args: {
    children: 'My Portfolio',
    href: '#home',
  },
};

/** With logo image alongside text. */
export const WithLogo: Story = {
  args: {
    logo: 'https://via.placeholder.com/40x40?text=Logo',
    logoAlt: 'Site logo',
    children: 'Elizabeth Means',
    href: '#home',
  },
};

/** Logo only, no text (compact). */
export const LogoOnly: Story = {
  args: {
    logo: 'https://via.placeholder.com/40x40?text=EM',
    logoAlt: 'Elizabeth Means',
    hideText: true,
    href: '#home',
  },
};

/** In a nav bar with design-system Link. */
export const InContext: Story = {
  render: () => (
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
      <LogoLink href="#home">Elizabeth Means</LogoLink>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link variant="nav" href="#about">
          About
        </Link>
        <Link variant="nav" href="#resume">
          Resume
        </Link>
        <Link variant="nav" href="#contact">
          Contact
        </Link>
      </div>
    </nav>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: { description: { story: 'LogoLink in a nav bar with nav links.' } },
  },
};
