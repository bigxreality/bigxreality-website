/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#0A0A0A", soft: "#111111" },
        navy: { 800: "#0B1220", 700: "#121C33", 600: "#1B2A4D" },
        brand: { DEFAULT: "#D02753", hover: "#E8375F", active: "#A81F42" },
        text: {
          primary: "#FFFFFF",
          body: "#B8BEC7",
          body2: "#C8CCD2",
          muted: "#8B93A1",
          faint: "#565D68",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.15)",
          input: "rgba(255,255,255,0.15)",
        },
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans TC", "sans-serif"],
        // System/eyebrow/data labels only (VR/XR technical tags, product
        // codes) — never large blocks of Chinese body copy. See
        // docs/design/vr-xr-visual-language.md.
        mono: ["PT Mono", "monospace"],
      },
      fontSize: {
        h1: ["4rem", { lineHeight: "1.12", fontWeight: "800" }],
        "h1-md": ["2.875rem", { lineHeight: "1.15", fontWeight: "800" }],
        "h1-sm": ["2rem", { lineHeight: "1.15", fontWeight: "800" }],
        "h1-page": ["3rem", { lineHeight: "1.15", fontWeight: "800" }],
        "h1-page-md": ["2.375rem", { lineHeight: "1.15", fontWeight: "800" }],
        "h1-page-sm": ["1.875rem", { lineHeight: "1.15", fontWeight: "800" }],
        h2: ["2.5rem", { lineHeight: "1.25", fontWeight: "700" }],
        "h2-md": ["2rem", { lineHeight: "1.25", fontWeight: "700" }],
        "h2-sm": ["1.625rem", { lineHeight: "1.25", fontWeight: "700" }],
        h3: ["1.0625rem", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.75", fontWeight: "400" }],
        "body-sm": ["0.844rem", { lineHeight: "1.6", fontWeight: "400" }],
        label: ["0.75rem", { lineHeight: "1.4", fontWeight: "700", letterSpacing: "0.1em" }],
        caption: ["0.78rem", { lineHeight: "1.4", fontWeight: "400" }],
        stat: ["2.5rem", { lineHeight: "1.1", fontWeight: "800" }],
      },
      spacing: { 15: "3.75rem", 30: "7.5rem" },
      // Virtual Layer tokens (see docs/design/vr-xr-visual-language.md) —
      // low-contrast grid/node treatment, never neon or HUD-style.
      backgroundImage: {
        "xr-grid":
          "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
      },
      backgroundSize: { "xr-grid": "40px 40px" },
      borderRadius: { DEFAULT: "4px" },
      screens: { sm: "390px", md: "768px", lg: "1024px", xl: "1440px" },
    },
  },
  plugins: [],
};
