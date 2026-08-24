import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import fs from "node:fs";
import path from "node:path";

function publicDirectoryIntegration() {
  return {
    name: "public-directory-integration",
    hooks: {
      "astro:server:setup": ({ server }) => {
        server.middlewares.stack.unshift({
          route: "",
          handle: (req, res, next) => {
            if (!req.url || (req.method !== "GET" && req.method !== "HEAD"))
              return next();
            const [pathname] = req.url.split("?");
            if (pathname === "/" || pathname.includes(".")) return next();

            const cleanPath = pathname.replace(/^\/+|\/+$/g, "");
            const potentialHtml = path.join(
              process.cwd(),
              "public",
              cleanPath,
              "index.html",
            );

            if (
              cleanPath &&
              fs.existsSync(potentialHtml) &&
              fs.statSync(potentialHtml).isFile()
            ) {
              res.setHeader("Content-Type", "text/html; charset=utf-8");
              if (req.method === "HEAD") {
                return res.end();
              }
              return res.end(fs.readFileSync(potentialHtml));
            }
            next();
          },
        });
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES_URL || "https://www.idsw.dev",
  integrations: [react(), publicDirectoryIntegration()],
  vite: {
    plugins: [tailwindcss()],
  },
});
