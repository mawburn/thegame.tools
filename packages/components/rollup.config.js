import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import externals from 'rollup-plugin-node-externals'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import image from '@rollup/plugin-image'

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        sourcemap: true,
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      externals({
        include: [/^lodash/, /^next/],
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      image({ dom: true }),
      postcss({ extract: true, autoModules: true }),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
]

export default config
