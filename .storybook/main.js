module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/theming',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
  ],
  staticDirs: ['../assets'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // Remove Storybooks default resolution of SVG files
    const fileLoaderRule = config.module.rules.find(
      rule => rule.test && rule.test.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;

    // Resolve SCSS files
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' }, // Inject result into DOM as style block
        { loader: 'css-loader' }, // Resolve import of CSS in Javascript
        { loader: 'sass-loader' }, // Convert SCSS to CSS
      ],
    });
    // Resolve SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
          },
        },
      ],
    });

    return config;
  },
};
