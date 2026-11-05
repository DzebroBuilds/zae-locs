import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
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

// Content-addressed URLs prevent a previous effect bundle surviving a Pages update.
let html = await readFile('dist/index.html', 'utf8');
for (const [name, extension] of [['light-rays', 'js'], ['light-rays', 'css'], ['style', 'css'], ['polish', 'css']]) {
  const content = await readFile(`dist/${name}.${extension}`);
  const hash = createHash('sha256').update(content).digest('hex').slice(0, 12);
  const filename = `${name}.${hash}.${extension}`;
  await writeFile(`dist/${filename}`, content);
  const pattern = new RegExp(`${name}(?:\\.[a-f0-9]{12})?\\.${extension}(?:\\?[^"']*)?`, 'g');
  html = html.replace(pattern, filename);
}
await writeFile('dist/index.html', html);
