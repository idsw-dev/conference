import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES_URL || "https://www.idsw.dev",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
