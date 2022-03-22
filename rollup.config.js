import typescript from '@rollup/plugin-typescript'
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import externalPeerDeps from 'rollup-plugin-peer-deps-external'

export default [
  {
    // ESM production build
    input: './src/index.ts',
    output: {
      file: './build/index.js',
      format: 'es',
      sourcemap: true,
    },
    treeshake: 'recommended', // Remove unused imports
    plugins: [
      scss({
        outputStyle: 'compressed', // Minify CSS output
      }), // Outputs to output-filename.css
      externalPeerDeps(), // Avoid including peer dependencies
      nodeResolve(), // Locate imported node modules
      commonjs(), // Enable rollup to handle cjs modules
      typescript({ tsconfig: './tsconfig.json' }), // Typescript integration
      terser({
        output: {
          comments: false,
        },
      }), // Minify output
    ],
  },
  // Configuration for CJS module and ES5 syntax support (using Babel)
  // Requires babel plugin: import { babel } from '@rollup/plugin-babel'
  // {
  //   // CJS (CommonJS) production build
  //   // ES5 compatible where backwards compatibility is needed (e.g. IE11)
  //   input: './src/index.ts',
  //   output: {
  //     file: './build/index.cjs.js',
  //     format: 'cjs',
  //     sourcemap: true,
  //   },
  //   treeshake: 'recommended', // Remove unused imports
  //   plugins: [
  //     external(),
  //     nodeResolve(), // Locate imported node modules
  //     commonjs(), // Enable rollup to handle cjs modules
  //     typescript({ tsconfig: './tsconfig.json' }),
  //     babel({ exclude: 'node_modules/**', presets: ['@babel/preset-env'] }), // Transpile to ES5
  //     terser({
  //       output: {
  //         comments: false,
  //       },
  //     }), // Minify output
  //   ],
  // },
]
