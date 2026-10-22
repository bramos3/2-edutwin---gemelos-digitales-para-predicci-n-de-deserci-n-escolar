import { build } from 'esbuild';
await build({
  entryPoints: ['src/components/3d/StreamlitTwin.tsx'],
  outfile: 'backend/assets/twin.bundle.js',
  bundle: true, minify: true, format: 'iife', platform: 'browser',
  define: {'process.env.NODE_ENV': '"production"'},
});
