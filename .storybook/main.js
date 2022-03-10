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
    // Remove Storybooks default resolution of SVG files
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    )
    fileLoaderRule.exclude = /\.svg$/

    // Resolve SCSS files
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' }, // Inject result into DOM as style block
        { loader: 'css-loader' }, // Resolve import of CSS in Javascript
        { loader: 'sass-loader' }, // Convert SCSS to CSS
      ],
    })
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
    })

    return config
  },
}
