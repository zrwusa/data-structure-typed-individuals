import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: { "undirected-graph-typed": "src/index.ts" },
    target: 'es2018',
    format: ["iife"],
    clean: true,
    sourcemap: true,
    minify: true,
    outDir: "dist/umd",
    globalName: "undirectedGraphTyped",
    platform: "browser",
    outExtension: () => ({ js: '.min.js' }),
  },
  {
    entry: { "undirected-graph-typed": "src/index.ts" },
    target: 'es2018',
    format: ["iife"],
    clean: false,
    sourcemap: true,
    minify: false,
    outDir: "dist/umd",
    globalName: "undirectedGraphTyped",
    platform: "browser",
    outExtension: () => ({ js: '.js' }),
  }
]);
