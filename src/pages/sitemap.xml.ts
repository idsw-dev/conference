import type { APIRoute } from "astro";
import { withBasePath } from "../lib/paths";

export const GET: APIRoute = ({ site }) => {
  const editionPaths = [
    "/",
    "/code-of-conduct/",
    "/privacy-policy/",
    "/terms-of-service/",
    "/stream/",
  ];
  // Previous editions are siblings of this edition, including in archival builds.
  const paths = [...editionPaths.map(withBasePath), "/2025/", "/2024/"];
  const urls = paths.map(
    (path) => `  <url><loc>${new URL(path, site).href}</loc></url>`,
  );

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      urls.join("\n") +
      `\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
