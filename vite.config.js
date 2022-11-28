import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      images: fileURLToPath(new URL("./public/images", import.meta.url)),
      fonts: fileURLToPath(new URL("./src/assets/fonts", import.meta.url))
    }
  },
  build: {
    assetsDir: "zeze",
    rollupOptions: {
      input: {
        // main: dirname(fileURLToPath(import.meta.url + "index.html")),
        main: new URL("index.html", import.meta.url).pathname,
        home: new URL("home.html", import.meta.url).pathname,
        folder: new URL("folder.html", import.meta.url).pathname,
        carto: new URL("carto.html", import.meta.url).pathname,
        bottin: new URL("bottin.html", import.meta.url).pathname,
        article: new URL("article.html", import.meta.url).pathname,
        agenda: new URL("agenda.html", import.meta.url).pathname,
        actu: new URL("actu.html", import.meta.url).pathname
      }
    }
  }
});
