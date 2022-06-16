module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-flow',
    ],
    plugins: [
        'babel-plugin-styled-components',
        '@babel/plugin-proposal-class-properties',
    ]
}

module.exports = function (api) {
    api.cache(true);
    return {
        plugins: ['macros'],
    }
}