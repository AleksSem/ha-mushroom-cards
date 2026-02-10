import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/ha-cards.ts',
  output: {
    file: 'custom_components/ha_mushroom_cards/ha-mushroom-cards.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    typescript(),
    terser({ format: { comments: false } }),
  ],
};
