import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@monas/preset": new URL("../../packages/preset/src/index.ts", import.meta.url).pathname,
      "@monas/react": new URL("../../packages/react/src/index.ts", import.meta.url).pathname
    }
  }
});

