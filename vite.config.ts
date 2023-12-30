import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;
export default defineConfig({
  start: {
    extensions: ["mdx", "md"],
    server: {
      preset: "netlify_edge",
      // preset: "vercel",
    },
  },
  plugins: [
    mdx.withImports({})({
      jsx: true,
      jsxImportSource: "solid-js",
      providerImportSource: "solid-mdx",
    }),
  ],
});
