/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const packageJson = require('./package.json');

export default [
  {
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
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      json(),
    ],
    onwarn: (warning, warn) => {
      // Suppress source map warnings from node_modules
      if (
        warning.code === 'SOURCEMAP_ERROR' &&
        /node_modules/.test(warning.message)
      )
        return;
      warn(warning);
    },
  },
];
