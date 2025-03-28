import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), wasm(), topLevelAwait()],
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
          "@public": path.resolve(__dirname, "public"),
        },
      },
});
