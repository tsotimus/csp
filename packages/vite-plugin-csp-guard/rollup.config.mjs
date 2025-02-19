import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  input: "src/index.ts", // Your plugin's entry point
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm", // Output as ES Module
      sourcemap: false,
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs", // Output as CommonJS
      sourcemap: false,
    },
  ],
  external: ["lightningcss", "fsevents", "vite", "cheerio", "csp-toolkit"],
  plugins: [
    typescript({
      tsconfig: "tsconfig.json",
      declaration: true,
      declarationDir: "dist",
      include: ["src/**/*.ts"],
      sourceMap: false,
    }), // Transpile TypeScript
    resolve(), // Resolves node modules
    commonjs(), // Converts commonjs to ES modules
    terser(), // Minify
  ],
});