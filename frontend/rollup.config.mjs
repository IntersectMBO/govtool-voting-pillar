const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const json = require('@rollup/plugin-json');
const postcss = require('rollup-plugin-postcss');
const babel = require('@rollup/plugin-babel');
const packageJson = require('./package.json');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = {
  input: 'src/VotingPillar.tsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ extensions, browser: true }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json', sourceMap: true }),
    postcss({
      extract: true,
      modules: true,
      use: ['sass'],
    }),
    babel({
      extensions,
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
    }),
    json(),
  ],
  external: [
    'react',
    'react-dom',
    'react-router-dom',
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
  ],
};
