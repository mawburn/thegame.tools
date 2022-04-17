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
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      externals({
        peerDeps: true,
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      terser(),
      image({ dom: true }),
      postcss(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [
      dts(),
    ],
  },
]

export default config
