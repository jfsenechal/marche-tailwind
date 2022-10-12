import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "images": fileURLToPath(new URL("./public/images", import.meta.url))
    }
  },
  build: {
    assetsDir: "zeze",
    rollupOptions: {
      input: {
        // main: dirname(fileURLToPath(import.meta.url + "index.html")),
        main: new URL("index.html", import.meta.url).pathname,
        home: new URL("home.html", import.meta.url).pathname
      }
    }
  }
});
