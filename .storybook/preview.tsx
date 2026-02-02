import React, { useEffect } from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import '../app/globals.css';

const withTheme = (Story: React.ComponentType, context: { globals: { theme?: string } }) => {
  const theme = context.globals.theme || 'light';

  useEffect(() => {
    // Apply theme to document root (same as your production site)
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <Story />;
};

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Disable since we're using our own theme system
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
