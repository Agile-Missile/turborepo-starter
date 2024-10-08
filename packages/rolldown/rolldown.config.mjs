import { defineConfig } from 'rolldown';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    footer: '// @agile/rolldown footer',
    banner: '// @agile/rolldown banner',
    intro: '// @agile/rolldown intro',
    outro: '// @agile/rolldown outro',
    format: 'esm',
    dir: 'dist',
    sourcemap: true,
  },
});
