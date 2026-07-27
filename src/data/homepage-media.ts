/**
 * Centralized image registry for /zh-tw/ (the繁中 homepage).
 * Every homepage image reference resolves through this file — components
 * never hardcode a path. To replace an image, either:
 *   1. Overwrite the file at the same path in public/images/home/, or
 *   2. Point `src` at a new path here.
 * No component changes are required either way.
 *
 * `status` — see docs/homepage-image-status.md for the full explanation:
 *   - "missing"      no real photo available yet; placeholder graphic only
 *   - "temporary"    a real photo is in use but expected to be swapped
 *   - "approved"     confirmed final for production
 *   - "replace-later" usable short-term, lower priority to replace
 */

export type MediaStatus = "missing" | "temporary" | "approved" | "replace-later";

export type MediaEntry = {
  src: string;
  alt: string;
  status: MediaStatus;
  note?: string;
};

export const homepageMedia = {
  hero: {
    desktop: {
      src: "/images/home/hero/home-hero-desktop.jpg",
      alt: "Big x Reality XR 模擬訓練情境",
      status: "missing" as MediaStatus,
      note: "無法連線官網下載原圖（環境網路政策阻擋），待人工提供官網代表性 Hero 照片",
    },
    mobile: {
      src: "/images/home/hero/home-hero-mobile.jpg",
      alt: "Big x Reality XR 模擬訓練情境（手機版直式構圖）",
      status: "missing" as MediaStatus,
      note: "目前暫用同一張桌機圖裁切邏輯的佔位圖，正式素材需另外提供直式構圖",
    },
  },

  about: {
    company: {
      src: "/images/home/about/home-about-company.jpg",
      alt: "全球動力科技 XR 訓練系統整合能力示意",
      status: "missing" as MediaStatus,
    },
    training: {
      src: "/images/home/about/home-about-training.jpg",
      alt: "全球動力科技實際訓練場域畫面",
      status: "missing" as MediaStatus,
      note: "備用圖，目前首頁尚未使用",
    },
  },

  xrTraining: {
    reality: {
      src: "/images/home/xr-training/home-xr-reality.jpg",
      alt: "真實訓練場景",
      status: "missing" as MediaStatus,
    },
    virtual: {
      src: "/images/home/xr-training/home-xr-virtual.jpg",
      alt: "XR 虛擬訓練畫面",
      status: "missing" as MediaStatus,
    },
    data: {
      src: "/images/home/xr-training/home-xr-data.jpg",
      alt: "教官與訓練數據畫面",
      status: "missing" as MediaStatus,
    },
  },

  solutions: {
    police: {
      src: "/images/home/solutions/home-solution-police.jpg",
      alt: "警勤模擬訓練實景",
      status: "missing" as MediaStatus,
    },
    military: {
      src: "/images/home/solutions/home-solution-military.jpg",
      alt: "軍事模擬訓練實景",
      status: "missing" as MediaStatus,
    },
    smartCity: {
      src: "/images/home/solutions/home-solution-smart-city.jpg",
      alt: "智慧城市指揮中心示意",
      status: "missing" as MediaStatus,
    },
    fire: {
      src: "/images/home/solutions/home-solution-fire.jpg",
      alt: "消防防救災訓練實景",
      status: "missing" as MediaStatus,
    },
  },

  /**
   * Prepared per this round's folder spec. Not currently rendered on the
   * homepage — the prior spec explicitly excludes product cards / full
   * product listings from the homepage. Kept here so the section can be
   * wired in later without re-doing the media plumbing.
   */
  packages: {
    sut: {
      src: "/images/home/packages/home-package-sut.jpg",
      alt: "SUT 小部隊戰術訓練系統",
      status: "missing" as MediaStatus,
    },
    policeBox: {
      src: "/images/home/packages/home-package-police-box.jpg",
      alt: "POLICE BOX 攜帶式警勤訓練器",
      status: "missing" as MediaStatus,
    },
    aiMilitary: {
      src: "/images/home/packages/home-package-ai-military.jpg",
      alt: "軍事訓練套裝方案",
      status: "missing" as MediaStatus,
    },
    uav: {
      src: "/images/home/packages/home-package-uav.jpg",
      alt: "無人機戰術訓練模組",
      status: "missing" as MediaStatus,
    },
  },

  cases: {
    case01: {
      src: "/images/home/cases/home-case-01.jpg",
      alt: "機場空側駕駛模擬訓練導入案例",
      status: "missing" as MediaStatus,
    },
    case02: {
      src: "/images/home/cases/home-case-02.jpg",
      alt: "警察局勤務情境訓練中心案例",
      status: "missing" as MediaStatus,
    },
    case03: {
      src: "/images/home/cases/home-case-03.jpg",
      alt: "火災搶救指揮模擬系統案例",
      status: "missing" as MediaStatus,
    },
  },

  news: {
    default: {
      src: "/images/home/news/home-news-default.jpg",
      alt: "最新消息預設圖",
      status: "missing" as MediaStatus,
      note: "目前首頁最新消息區塊為純文字卡片（沿用官網設計），此圖預留給未來新聞縮圖改版使用",
    },
  },

  cta: {
    contact: {
      src: "/images/home/cta/home-contact-cta.jpg",
      alt: "訓練照片背景搭配深色遮罩與 XR Grid",
      status: "missing" as MediaStatus,
    },
  },
} as const;
