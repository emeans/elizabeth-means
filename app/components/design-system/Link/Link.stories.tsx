import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Link from './Link';

/**
 * Link component for navigation, downloads, and external resources.
 *
 * ## When to use Link
 * - Navigation to pages or sections
 * - Downloads (PDFs, files)
 * - External resources (GitHub, LinkedIn)
 * - Any href that takes users somewhere
 *
 * ## When NOT to use Link
 * - Form submissions → Use Button with type="submit"
 * - Actions (save, delete, etc.) → Use Button with onClick
 * - Opening modals → Use Button
 *
 * ## Variants
 * - **nav**: Navigation menu links (animated underline)
 * - **inline**: Content links (standard underline, visited state)
 * - **standalone**: Footer/isolated links (underline on hover)
 * - **cta**: Call-to-action styled as button (for important navigation)
 */
const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Link component for navigation. Use Button component for actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['nav', 'inline', 'standalone', 'cta'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inline' },
      },
    },
    href: {
      control: 'text',
      description: 'URL to navigate to',
      table: {
        type: { summary: 'string' },
      },
    },
    external: {
      control: 'boolean',
      description: 'Opens in new tab (adds target and rel attributes)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    download: {
      control: 'boolean',
      description: 'Triggers download',
      table: {
        type: { summary: 'boolean | string' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;
/** Stories that use custom render and don't pass args through the Controls panel */
type RenderOnlyStory = Partial<Story> & {
  render: () => React.ReactElement;
  parameters?: Story['parameters'];
};

/**
 * Navigation link - for menu/nav items with animated underline
 */
export const Nav: Story = {
  args: {
    children: 'About',
    href: '#about',
    variant: 'nav',
  },
};

/**
 * Inline link - for links within content with standard underline
 */
export const Inline: Story = {
  args: {
    children: 'GitHub',
    href: 'https://github.com',
    variant: 'inline',
    external: true,
  },
};

/**
 * Standalone link - for footer/isolated links with hover underline
 */
export const Standalone: Story = {
  args: {
    children: 'Privacy Policy',
    href: '/privacy',
    variant: 'standalone',
  },
};

/**
 * CTA link - important navigation styled as button
 */
export const CTA: Story = {
  args: {
    children: 'Download Resume',
    href: '/resume.pdf',
    variant: 'cta',
    download: true,
  },
};

/**
 * External link - opens in new tab with icon
 */
export const External: Story = {
  args: {
    children: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/example',
    variant: 'inline',
    external: true,
  },
};

/**
 * Download link
 */
export const Download: Story = {
  args: {
    children: 'Download PDF',
    href: '/document.pdf',
    variant: 'cta',
    download: true,
  },
};

/**
 * Anchor link (jumps to section)
 */
export const AnchorLink: Story = {
  args: {
    children: 'Jump to Contact',
    href: '#contact',
    variant: 'nav',
  },
};

/**
 * All variants side by side
 */
export const AllVariants: RenderOnlyStory = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <strong>Nav variant:</strong>
        <br />
        <Link variant="nav" href="#example">
          Navigation Link
        </Link>
      </div>
      <div>
        <strong>Inline variant:</strong>
        <br />
        <Link variant="inline" href="https://example.com" external>
          External Link
        </Link>
      </div>
      <div>
        <strong>Standalone variant:</strong>
        <br />
        <Link variant="standalone" href="#privacy">
          Privacy Policy
        </Link>
      </div>
      <div>
        <strong>CTA variant:</strong>
        <br />
        <Link variant="cta" href="/resume.pdf" download>
          Download Resume
        </Link>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All link variants for comparison',
      },
    },
  },
};

/**
 * Real-world example: Navigation menu
 */
export const NavigationExample: RenderOnlyStory = {
  render: () => (
    <nav style={{ display: 'flex', gap: '2rem' }}>
      <Link variant="nav" href="#about">About</Link>
      <Link variant="nav" href="#resume">Resume</Link>
      <Link variant="nav" href="#contact">Contact</Link>
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Navigation menu with nav variant links',
      },
    },
  },
};

/**
 * Real-world example: Paragraph with inline links
 */
export const InlineLinksExample: RenderOnlyStory = {
  render: () => (
    <p style={{ maxWidth: '600px', lineHeight: '1.6' }}>
      I'm a product designer with 10 years of engineering experience.
      You can find my work on{' '}
      <Link variant="inline" href="https://github.com/emeans" external>
        GitHub
      </Link>
      {' '}and connect with me on{' '}
      <Link variant="inline" href="https://linkedin.com/in/elizabeth-a-means" external>
        LinkedIn
      </Link>
      .
    </p>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inline links within paragraph content',
      },
    },
  },
};

/**
 * Real-world example: Footer links
 */
export const FooterExample: RenderOnlyStory = {
  render: () => (
    <footer style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
      <Link variant="standalone" href="https://github.com/emeans" external>
        GitHub
      </Link>
      <Link variant="standalone" href="https://linkedin.com/in/elizabeth-a-means" external>
        LinkedIn
      </Link>
      <Link variant="standalone" href="/privacy">
        Privacy Policy
      </Link>
    </footer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Footer with standalone variant links',
      },
    },
  },
};

/**
 * Real-world example: Resume section with CTA
 */
export const ResumeCTAExample: RenderOnlyStory = {
  render: () => (
    <div style={{ textAlign: 'center', maxWidth: '600px' }}>
      <h2>Resume</h2>
      <p>
        Want to know more about my experience? Download my resume, view my{' '}
        <Link variant="inline" href="https://linkedin.com/in/elizabeth-a-means" external>
          LinkedIn
        </Link>
        {' '}or{' '}
        <Link variant="inline" href="https://github.com/emeans" external>
          GitHub
        </Link>
        .
      </p>
      <Link variant="cta" href="/Elizabeth-Means-Resume.pdf" download>
        Download Resume (PDF)
      </Link>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Resume section combining inline links and CTA link',
      },
    },
  },
};

/**
 * Real-world example: Mixed link types
 */
export const MixedLinksExample: RenderOnlyStory = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <Link variant="nav" href="#about">About</Link>
        <Link variant="nav" href="#projects">Projects</Link>
        <Link variant="nav" href="#contact">Contact</Link>
      </nav>

      <p>
        I'm passionate about creating accessible, user-centered designs.
        Check out my{' '}
        <Link variant="inline" href="https://github.com/emeans" external>
          open source work
        </Link>
        {' '}or{' '}
        <Link variant="inline" href="https://linkedin.com/in/elizabeth-a-means" external>
          professional background
        </Link>
        .
      </p>

      <div>
        <Link variant="cta" href="/resume.pdf" download>
          Download My Resume
        </Link>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Realistic page section with multiple link types working together',
      },
    },
  },
};
