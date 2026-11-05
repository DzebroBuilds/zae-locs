import { build } from 'esbuild';
await build({
  entryPoints: ['src/hero-rays.jsx'],
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['es2020'],
  outfile: 'dist/light-rays.js',
  jsx: 'automatic',
  legalComments: 'eof',
  define: { 'process.env.NODE_ENV': '"production"' }
});
