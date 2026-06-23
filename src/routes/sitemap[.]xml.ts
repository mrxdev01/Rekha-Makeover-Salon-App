import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { NAV, SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const base = SITE_URL.replace(/\/$/, "");
        const urls = NAV.map(([, path]) => {
          return [
            `  <url>`,
            `    <loc>${base}${path}</loc>`,
            `    <changefreq>weekly</changefreq>`,
            `    <priority>${path === "/" ? "1.0" : "0.7"}</priority>`,
            `  </url>`,
          ].join("\n");
        });
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
