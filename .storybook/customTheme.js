import { create } from '@storybook/theming';
import logo from '../assets/logo_digdir.svg';
import tokens from '../node_modules/@digdir/ds-tokens/build/tokens.js';

export default create({
  brandTitle: 'Digdir websider',
  brandImage: logo,
  fontBase: '"Inter", sans-serif',
  // Colors
  base: 'light',
  colorSecondary: tokens.color.brand.third['800'],
  appBg: tokens.color.neutral.grey['100'],
  textColor: tokens.color.text.background.light,
});
