export type MediaAsset = {
  id: string;
  desktop: string;
  mobile: string;
  alt: string;
  width: number;
  height: number;
  mobileWidth: number;
  mobileHeight: number;
  placeholder: true;
};

function asset(
  id: string,
  alt: string,
  size: { w: number; h: number; mw: number; mh: number }
): MediaAsset {
  return {
    id,
    desktop: `/images/home/${id}-desktop.webp`,
    mobile: `/images/home/${id}-mobile.webp`,
    alt,
    width: size.w,
    height: size.h,
    mobileWidth: size.mw,
    mobileHeight: size.mh,
    placeholder: true,
  };
}

/**
 * Homepage media registry — every image on /tw/home is resolved through
 * this table so assets can be swapped without touching component code.
 * All entries are currently placeholders; see /docs/homepage-image-requirements.md
 * for production shot specs.
 */
export const homepageMedia: Record<string, MediaAsset> = {
  "hero-main": asset("home-hero-main", "Big x Reality XR 模擬訓練情境", {
    w: 2560,
    h: 1440,
    mw: 1440,
    mh: 1800,
  }),
  "about-main": asset("home-about-main", "全球動力科技 XR 訓練系統整合能力示意", {
    w: 1600,
    h: 1200,
    mw: 1200,
    mh: 1200,
  }),
  "solution-law-enforcement": asset(
    "solution-law-enforcement",
    "警勤模擬訓練實景",
    { w: 1600, h: 1200, mw: 1200, mh: 1200 }
  ),
  "solution-defense": asset("solution-defense", "軍事模擬訓練實景", {
    w: 1600,
    h: 1200,
    mw: 1200,
    mh: 1200,
  }),
  "solution-smart-city": asset(
    "solution-smart-city",
    "智慧城市指揮中心示意",
    { w: 1600, h: 1200, mw: 1200, mh: 1200 }
  ),
  "solution-fire-rescue": asset("solution-fire-rescue", "消防防救災訓練實景", {
    w: 1600,
    h: 1200,
    mw: 1200,
    mh: 1200,
  }),
  "package-01": asset("package-01", "[待確認原官網文案] 產品系統主視覺", {
    w: 1600,
    h: 1200,
    mw: 1200,
    mh: 1200,
  }),
  "package-02": asset("package-02", "[待確認原官網文案] 產品系統主視覺", {
    w: 1600,
    h: 1200,
    mw: 1200,
    mh: 1200,
  }),
  "package-03": asset("package-03", "[待確認原官網文案] 產品系統主視覺", {
    w: 1600,
    h: 1200,
    mw: 1200,
    mh: 1200,
  }),
  "case-airport": asset("case-airport", "機場空側駕駛模擬訓練導入案例", {
    w: 1600,
    h: 1200,
    mw: 1200,
    mh: 1200,
  }),
  "case-police": asset("case-police", "警察局勤務情境訓練中心案例", {
    w: 1600,
    h: 1200,
    mw: 1200,
    mh: 1200,
  }),
  "case-fire": asset("case-fire", "火災搶救指揮模擬系統案例", {
    w: 1600,
    h: 1200,
    mw: 1200,
    mh: 1200,
  }),
};
