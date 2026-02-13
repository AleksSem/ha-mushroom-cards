import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' with { type: 'json' };

export default {
  input: 'src/ha-cards.ts',
  output: {
    file: 'custom_components/ha_mushroom_cards/ha-mushroom-cards.js',
    format: 'es',
    inlineDynamicImports: true,
  },
  plugins: [
    replace({
      preventAssignment: true,
      __VERSION__: JSON.stringify(pkg.version),
    }),
    resolve(),
    typescript(),
    terser({ format: { comments: false } }),
  ],
};
