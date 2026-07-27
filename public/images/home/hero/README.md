# Homepage Hero Images

**Purpose**: Full-bleed hero background behind the H1/CTA on `/zh-tw/`.

**Recommended ratio**: Desktop 16:9 · Mobile 4:5
**Recommended size**: Desktop 2560×1440 (or 1920×1080 minimum) · Mobile 1440×1800

**Files**:
- `home-hero-desktop.jpg` — shown ≥768px
- `home-hero-mobile.jpg` — shown <768px (separate `<picture><source>`, not a CSS crop of the desktop image)

**Replace using the same filename** to avoid any code changes — `src/data/homepage-media.ts` and
`src/components/HeroSlider.astro` both reference these paths directly.

Keep the left/center text-safe area clear of the subject's face or the product in frame; the H1 and
CTA buttons sit on top of the left ~60% of the image.
