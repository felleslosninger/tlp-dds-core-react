import customTheme from './customTheme.js';
import '../src/web/scss/index.scss';
import './storybook.scss';

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on.*' },
  docs: {
    theme: customTheme,
  },
  options: {
    storySort: {
      order: ['Core', 'Web', 'Admin'],
    },
  },
};
