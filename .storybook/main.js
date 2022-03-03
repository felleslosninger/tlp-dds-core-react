module.exports = {
  stories: [
    '../src/**/stories/*.stories.mdx',
    '../src/**/stories/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  // Add rules to webpack config
  webpackFinal: async (config, { configType }) => {
    // Resolve raw import of SVG files as source code
    config.module.rules.push({
      test: /\.svg/,
      type: 'asset/source',
    })
    // Resolve SCSS as CSS modules
    config.module.rules.push({
      test: /\.(scss)$/,
      use: [
        { loader: 'style-loader' }, // Inject result into DOM as style block
        { loader: 'css-loader', options: { modules: true } }, // Convert CSS to Javascript to be bundled and rename to CSS modules
        { loader: 'sass-loader' }, // Convert SCSS to CSS
      ],
    })
    return config
  },
}
