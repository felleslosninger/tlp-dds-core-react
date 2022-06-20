import customTheme from './customTheme.js'
import '../assets/global.scss'
import './storybook.scss'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  docs: {
    theme: customTheme,
  },
};
