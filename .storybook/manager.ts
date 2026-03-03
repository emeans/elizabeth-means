import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Elizabeth Means',
  brandUrl: '#home',
  brandImage: '/elizabeth-means-logo.png',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});
