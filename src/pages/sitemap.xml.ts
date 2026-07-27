import type { APIRoute } from "astro";
import { locales } from "@/i18n/utils";
import { solutionOrder } from "@/data/solutions";

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const origin = site?.origin ?? "";

  const paths = [
    ...locales.map((locale) => `${locale}/`),
    "zh-tw/solutions/",
    ...solutionOrder.map((slug) => `zh-tw/solutions/${slug}/`),
  ];

  const urls = paths
    .map((path) => `${origin}${base}${path}`)
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
