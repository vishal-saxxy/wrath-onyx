import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";

// robots.txt is generated at build time from the same host value the canonicals
// and the sitemap use, so the Sitemap line can never drift from the host.
const body = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;

export const Route = createFileRoute("/robots.txt")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: () =>
        new Response(body, {
          headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        }),
    },
  },
});
