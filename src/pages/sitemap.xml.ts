import type { APIRoute } from "astro";
import { locales } from "@/i18n/utils";

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const origin = site?.origin ?? "";

  const urls = locales
    .map((locale) => `${origin}${base}${locale}/`)
    .map(
      (url) => `  <url>
    <loc>${url}</loc>
  </url>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
