import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: { "directed-graph-typed": "src/index.ts" },
    target: 'es2018',
    format: ["iife"],
    clean: true,
    sourcemap: true,
    minify: true,
    outDir: "dist/umd",
    globalName: "directedGraphTyped",
    platform: "browser",
    outExtension: () => ({ js: '.min.js' }),
  },
  {
    entry: { "directed-graph-typed": "src/index.ts" },
    target: 'es2018',
    format: ["iife"],
    clean: false,
    sourcemap: true,
    minify: false,
    outDir: "dist/umd",
    globalName: "directedGraphTyped",
    platform: "browser",
    outExtension: () => ({ js: '.js' }),
  }
]);
