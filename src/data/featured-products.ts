/**
 * Featured training systems shown on the zh-tw homepage (Section 7).
 * Not a Content Collection: this is a fixed editorial pick of 9 systems
 * (not the full product catalog), and none of the linked product detail
 * pages exist yet (see docs/design/ or the homepage rebuild report) — the
 * hrefs are the correct future URLs, kept here as the single source of
 * truth so the eventual product pages just need to match these slugs.
 */

import type { MediaEntry } from "@/data/homepage-media";

export type FeaturedProduct = {
  name: string;
  englishName: string;
  tagline: string;
  href: string;
  media: MediaEntry;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    name: "SUT 小部隊戰術訓練系統",
    englishName: "Small Unit Tactical Training System",
    tagline: "支援多人在實體空間中移動、溝通與協同，進行 CQB、城鎮作戰及小部隊戰術訓練。",
    href: "/zh-tw/products/sut/",
    media: {
      src: "/images/home/products/home-product-sut.webp",
      alt: "SUT 小部隊戰術訓練系統，實拍訓練畫面",
      status: "approved" as const,
    },
  },
  {
    name: "POLICE BOX 可攜式警勤訓練系統",
    englishName: "Portable Police Simulation Training System",
    tagline: "將警勤模擬訓練設備整合於可攜式箱體中，快速建立執法與危機處置訓練環境。",
    href: "/zh-tw/products/police-box/",
    media: {
      src: "/images/home/products/home-product-police-box.webp",
      alt: "POLICE BOX 可攜式警勤訓練系統，實拍訓練畫面",
      status: "approved" as const,
    },
  },
  {
    name: "全配式警勤訓練系統",
    englishName: "Full-Scale Police Simulation Training System",
    tagline: "整合多人訓練空間、教官控制與多種執法情境，支援完整警勤訓練課程。",
    href: "/zh-tw/products/full-scale-police-training/",
    media: {
      src: "/images/home/products/home-product-full-scale-police.webp",
      alt: "全配式警勤訓練系統",
      status: "missing" as const,
    },
  },
  {
    name: "兵棋圖台系統",
    englishName: "Interactive Wargaming Table",
    tagline: "透過互動式圖台呈現地形、單位與任務資訊，支援兵棋推演、指揮決策與任務討論。",
    href: "/zh-tw/products/wargaming-table/",
    media: {
      src: "/images/home/products/home-product-wargaming-table.webp",
      alt: "兵棋圖台系統，實拍訓練畫面",
      status: "approved" as const,
    },
  },
  {
    name: "迫擊砲觀測模擬系統",
    englishName: "Mortar Observation Simulation System",
    tagline: "模擬觀測、修正與射擊協調流程，協助受訓者熟悉迫擊砲任務程序與判斷。",
    href: "/zh-tw/products/mortar-observation/",
    media: {
      src: "/images/home/products/home-product-mortar-observation.webp",
      alt: "迫擊砲觀測模擬系統",
      status: "missing" as const,
    },
  },
  {
    name: "狙擊模擬系統",
    englishName: "Sniper Simulation Training System",
    tagline: "模擬觀察、瞄準、射擊及任務情境，支援狙擊技能與戰術判斷訓練。",
    href: "/zh-tw/products/sniper-simulator/",
    media: {
      src: "/images/home/products/home-product-sniper.webp",
      alt: "狙擊模擬系統",
      status: "missing" as const,
    },
  },
  {
    name: "機槍模擬系統",
    englishName: "Machine Gun Simulation Training System",
    tagline: "重現機槍操作、射擊回饋與戰術運用，降低實彈訓練前的學習成本與風險。",
    href: "/zh-tw/products/machine-gun-simulator/",
    media: {
      src: "/images/home/products/home-product-machine-gun.webp",
      alt: "機槍模擬系統",
      status: "missing" as const,
    },
  },
  {
    name: "悍馬車載具訓練系統",
    englishName: "HMMWV Simulation Training System",
    tagline: "結合實體載具平台與虛擬任務環境，支援駕駛、乘員及車載武器協同訓練。",
    href: "/zh-tw/products/hmmwv-simulator/",
    media: {
      src: "/images/home/products/home-product-hmmwv.webp",
      alt: "悍馬車載具訓練系統，實拍動感平台畫面",
      status: "approved" as const,
    },
  },
  {
    name: "快艇載具訓練系統",
    englishName: "Tactical Boat Simulation Training System",
    tagline: "模擬水上載具操作、乘員協同及任務情境，強化船艇操作與戰術應變能力。",
    href: "/zh-tw/products/tactical-boat-simulator/",
    media: {
      src: "/images/home/products/home-product-tactical-boat.webp",
      alt: "快艇載具訓練系統，實拍動感平台畫面",
      status: "approved" as const,
    },
  },
];
