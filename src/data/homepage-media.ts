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
  // Optional so Content Collection `media` objects ({src, alt}, e.g. a
  // news article's coverImage) can be passed directly to HomeImage/etc.
  // without a status field.
  status?: MediaStatus;
  note?: string;
};

export const homepageMedia = {
  hero: {
    desktop: {
      src: "/images/home/hero/home-hero-xr-simulation-training.webp",
      alt: "多人配戴 VR／XR 頭戴裝置，手持模擬武器進行訓練",
      status: "missing" as MediaStatus,
      note: "首頁重製任務指定素材：多人配戴VR/XR頭戴裝置、手持模擬武器訓練的橫式照片，2560x1440以上",
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
      note: "備用圖，首頁重製後不再使用（改用 xrTrainingOverview）",
    },
    training: {
      src: "/images/home/about/home-about-training.jpg",
      alt: "全球動力科技實際訓練場域畫面",
      status: "missing" as MediaStatus,
      note: "備用圖，目前首頁尚未使用",
    },
    xrTrainingOverview: {
      src: "/images/home/about/home-xr-training-overview.webp",
      alt: "單人配戴 XR 頭戴裝置操作訓練設備",
      status: "missing" as MediaStatus,
      note: "首頁重製任務指定素材：單人配戴XR頭戴裝置／戰術背心操作訓練設備的形象照，1600x1200",
    },
  },

  xrTraining: {
    reality: {
      src: "/images/home/xr-training/home-xr-reality.jpg",
      alt: "真實訓練場景",
      status: "missing" as MediaStatus,
      note: "備用圖，目前首頁尚未使用",
    },
    virtual: {
      src: "/images/home/xr-training/home-xr-virtual.jpg",
      alt: "XR 虛擬訓練畫面",
      status: "missing" as MediaStatus,
      note: "備用圖，目前首頁尚未使用",
    },
    data: {
      src: "/images/home/xr-training/home-xr-data.jpg",
      alt: "教官與訓練數據畫面",
      status: "missing" as MediaStatus,
      note: "備用圖，目前首頁尚未使用",
    },
    challengesBackground: {
      src: "/images/home/xr-training/home-training-challenges-background.webp",
      alt: "深色訓練場景背景紋理",
      status: "missing" as MediaStatus,
      note: "首頁重製任務指定素材：深色訓練場景／射擊場或模擬場域局部／低彩度照片，1920x1080",
    },
    multiUserTraining: {
      src: "/images/home/xr-training/home-multi-user-xr-training.webp",
      alt: "三至四人共同進行 XR 訓練，教官在旁監看",
      status: "missing" as MediaStatus,
      note: "首頁重製任務指定素材：多人共同進行XR訓練或教官監看訓練狀況的照片，1920x1080",
    },
  },

  capabilities: {
    instructorSystem: {
      src: "/images/home/capabilities/home-instructor-system-capabilities.webp",
      alt: "教官監看螢幕與 POLICE BOX 可攜式訓練箱體",
      status: "approved" as MediaStatus,
      note: "實拍照片，使用者提供（原檔：攜帶式警勤訓練器.jpeg）",
    },
  },

  proof: {
    realWorldDeployment: {
      src: "/images/home/proof/home-real-world-deployment.webp",
      alt: "SUT 小部隊戰術訓練系統展會實景，4人配戴 XR 頭戴裝置持模擬武器",
      status: "approved" as MediaStatus,
      note: "實拍展會照片，使用者提供（原檔：SUT 4人.jpg，原始 24MB 已壓縮為 webp）",
    },
  },

  solutions: {
    police: {
      src: "/images/home/solutions/home-solution-police.webp",
      alt: "警勤模擬訓練實景，4人配戴 XR 頭戴裝置持手槍訓練",
      status: "approved" as MediaStatus,
      note: "實拍照片，使用者提供（原檔：警察hero.jpeg）",
    },
    military: {
      src: "/images/home/solutions/home-solution-military.webp",
      alt: "軍事模擬訓練實景，4人配戴 XR 頭戴裝置持模擬步槍",
      status: "approved" as MediaStatus,
      note: "實拍照片，使用者提供（原檔：SUT軍事.jpeg）",
    },
    smartCity: {
      src: "/images/home/solutions/home-solution-smart-city.webp",
      alt: "智慧城市概念示意",
      status: "approved" as MediaStatus,
      note: "使用者提供並確認採用的概念示意圖（原檔：城市1920.jpg）。註記：此圖經影像特徵判斷為 AI 生成／合成內容（不合常理的建築結構與發光招牌），非實景照片；已明確告知使用者並取得其同意採用，僅限智慧城市這一項使用。",
    },
    fire: {
      src: "/images/home/solutions/home-solution-fire.webp",
      alt: "消防防救災訓練實景",
      status: "missing" as MediaStatus,
    },
  },

  /**
   * Legacy 4-item "套裝方案" set from an earlier round. Superseded by the
   * 9-item featured-products section (see src/data/featured-products.ts,
   * images under public/images/home/products/) — kept here unused in case
   * any of these four are still wanted elsewhere later.
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
      note: "備用圖，各篇新聞改用自己的 coverImage（news-{article-slug}.webp）",
    },
  },

  cta: {
    contact: {
      src: "/images/home/cta/home-contact-cta.jpg",
      alt: "訓練照片背景搭配深色遮罩與 XR Grid",
      status: "missing" as MediaStatus,
      note: "備用圖，首頁重製後不再使用（改用 finalTraining）",
    },
    finalTraining: {
      src: "/images/home/cta/home-final-cta-training.webp",
      alt: "多人訓練剪影搭配深藍黑背景與紅色品牌光線",
      status: "missing" as MediaStatus,
      note: "首頁重製任務指定素材：多人訓練剪影／XR訓練空間／深藍黑背景搭配紅色品牌光線，21:9 或 16:9",
    },
  },
} as const;
