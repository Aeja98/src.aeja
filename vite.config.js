import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        bild: resolve(__dirname, "bild.html"),
        process: resolve(__dirname, "process.html"),
      },
    },
  },
});