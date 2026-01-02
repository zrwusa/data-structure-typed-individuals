import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: { "max-heap-typed": "src/index.ts" },
    target: 'es2018',
    format: ["iife"],
    clean: true,
    sourcemap: true,
    minify: true,
    outDir: "dist/umd",
    globalName: "maxHeapTyped",
    platform: "browser",
    outExtension: () => ({ js: '.min.js' }),
  },
  {
    entry: { "max-heap-typed": "src/index.ts" },
    target: 'es2018',
    format: ["iife"],
    clean: false,
    sourcemap: true,
    minify: false,
    outDir: "dist/umd",
    globalName: "maxHeapTyped",
    platform: "browser",
    outExtension: () => ({ js: '.js' }),
  }
]);
