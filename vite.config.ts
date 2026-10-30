import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  base: process.env.VITE_PUBLIC_URL || "/",
  build: {
    outDir: process.env.VITE_BUILD_PATH || "dist",
  },
  server: {
    host: process.env.DEV_SERVER_HOST || "localhost",
    port: Number(process.env.VITE_DEV_SERVER_PORT) || 3000,
  },
});
