/// <reference types="vitest" />
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.lib.json", // Point to the library's tsconfig
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "vector-ui",
      formats: ["es"],
      fileName: "main",
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled into the library.
      external: ["react", "react-dom", "class-variance-authority"],
      output: {
        globals: { react: "React", "react-dom": "ReactDOM" },
      },
    },
  },
});
