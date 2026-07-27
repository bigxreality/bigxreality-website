import { defineConfig } from "astro/config";

// GitHub Pages (project page) during the dev/preview phase.
// Switch `site`/`base` when the project moves to a custom domain on Netlify.
//
// Locale routing (zh-tw / en / ja) is handled manually via a single
// src/pages/[locale]/index.astro + getStaticPaths, not Astro's built-in
// i18n folder routing — this keeps one shared template per page instead of
// duplicating a file per locale. See src/i18n/utils.ts for locale helpers.
export default defineConfig({
  site: "https://bigxreality.github.io",
  base: "/bigxreality-website",
  output: "static",
  trailingSlash: "always",
});
