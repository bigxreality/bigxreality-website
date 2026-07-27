/**
 * Copy source of truth for /tw/home.
 * Every string here is either carried over verbatim from the finalized
 * BXR-2.0 homepage mockup (Design_system_decisions_finalized), or is an
 * explicit placeholder marked "[待確認原官網文案]" where no source text
 * was available. See /docs/homepage-copy-changes.md for the full log.
 */

export const nav = {
  primary: [
    { label: "首頁", href: "/tw/home" },
    { label: "解決方案", href: "/tw/solutions" },
    { label: "產品系統", href: "/tw/products" },
    { label: "案例", href: "/tw/cases" },
    { label: "最新消息", href: "/tw/news" },
    { label: "技術觀點", href: "/tw/insights" },
    { label: "關於我們", href: "/tw/about" },
    { label: "聯絡我們", href: "/tw/contact" },
  ],
  cta: { label: "預約展示", href: "/tw/contact" },
  languages: [
    { label: "繁中", code: "tw", href: "/tw/home", current: true },
    { label: "EN", code: "en", href: "/tw/home" },
    { label: "日", code: "ja", href: "/tw/home" },
  ],
};

export const hero = {
  eyebrow: "XR TRAINING · SYSTEM READY",
  title: "重新定義高風險訓練的可能性",
  subtitle:
    "全球動力科技 Big x Reality — 虛實整合 XR 模擬訓練解決方案，為軍警、消防與智慧城市單位打造高擬真訓練環境。",
  ctaPrimary: { label: "預約展示", href: "/tw/contact" },
  ctaSecondary: { label: "了解解決方案", href: "/tw/solutions" },
  overlayLabels: ["TRK-04 // LOCKED", "NODE 02 · 24.791, 121.02", "UNIT 06 · SYNCED"],
};

export const about = {
  eyebrow: "ABOUT // EST. 2003",
  title: "全球動力科技旗下的沉浸式訓練品牌",
  body: "全球動力科技股份有限公司創立於 2003 年，是一站式大型系統整合服務商，業務涵蓋大數據分析、新媒體行銷、嚴肅遊戲模擬訓練，以及產業 XR 主題館設計開發，長期為軍警國防與政府單位提供高擬真訓練系統整合服務。",
  stats: [
    { value: "20+", label: "年系統整合經驗" },
    { value: "10+", label: "跨產業服務經驗" },
    { value: "50+", label: "單位導入使用我們的產品" },
  ],
};

export const whyXr = {
  eyebrow: "PROBLEM ANALYSIS",
  title: "為什麼需要 XR 模擬訓練",
  subtitle: "傳統訓練在場地、成本、風險與數據化之間存在結構性限制，XR 模擬訓練正是為此而生。",
  points: [
    {
      index: "01",
      title: "場地與環境限制",
      body: "真實勤務情境涉及街區、載具、建物與天候，實體場地幾乎無法完整還原。",
    },
    {
      index: "02",
      title: "高風險情境難以反覆演練",
      body: "槍械、火場、爆裂物等高風險科目，實兵演練一次的風險與成本都極高。",
    },
    {
      index: "03",
      title: "訓練成果無法數據化",
      body: "決策路徑、反應時間、命中率缺乏客觀記錄，成效難以評估與改善。",
    },
    {
      index: "04",
      title: "傳統實體訓練成本過高",
      body: "場地租借、教官人力、耗材與後勤，長期累積是龐大支出。",
    },
    {
      index: "05",
      title: "團隊協同與決策難以量化",
      body: "多人任務中的溝通、指揮與協同表現，缺乏可比較的客觀依據。",
    },
  ],
};

export const solutions = {
  eyebrow: "SOLUTIONS",
  title: "四大領域解決方案",
  systemLabel: "BXR-SIM v2.0 // FIELD 01 ACTIVE",
  allLink: { label: "所有解決方案", href: "/tw/solutions" },
  items: [
    {
      code: "SOL-01 // LAW ENFORCEMENT",
      title: "警勤模擬訓練",
      body: "臨檢盤查、突發衝突、用槍時機——在安全環境中反覆演練高壓勤務決策。",
      href: "/tw/solutions/law-enforcement",
      mediaId: "solution-law-enforcement",
    },
    {
      code: "SOL-02 // DEFENSE",
      title: "軍事模擬訓練",
      body: "複雜戰術情境與多兵種協同兵推，將實戰演訓風險降到最低。",
      href: "/tw/solutions/defense",
      mediaId: "solution-defense",
    },
    {
      code: "SOL-03 // SMART CITY",
      title: "智慧城市應用",
      body: "城市數位孿生與應變指揮模擬，讓治理決策在虛擬城市中先行驗證。",
      href: "/tw/solutions/smart-city",
      mediaId: "solution-smart-city",
    },
    {
      code: "SOL-04 // FIRE & RESCUE",
      title: "消防防救災訓練",
      body: "火場搶救與大規模災害應變，不受場地與安全限制的擬真演練。",
      href: "/tw/solutions/fire-rescue",
      mediaId: "solution-fire-rescue",
    },
  ],
};

/**
 * [待確認原官網文案]
 * 提供的官網首頁定案設計稿（Design_system_decisions_finalized）中並未包含
 * 獨立的「套裝方案」區塊內容，僅在導覽列出現「產品系統」入口。
 * 以下方案名稱／簡介／適用情境為結構性佔位，等待官方提供正式文案後替換，
 * 不得視為正式上線文案。
 */
export const packages = {
  eyebrow: "PRODUCT SYSTEMS",
  title: "套裝方案",
  note: "[待確認原官網文案：首頁定案設計稿未包含套裝方案文字內容，以下為結構佔位]",
  allLink: { label: "所有產品系統", href: "/tw/products" },
  items: [
    {
      code: "PKG-01",
      name: "[待確認原官網文案]",
      body: "[待確認原官網文案]",
      useCase: "[待確認原官網文案]",
      href: "/tw/products",
      mediaId: "package-01",
    },
    {
      code: "PKG-02",
      name: "[待確認原官網文案]",
      body: "[待確認原官網文案]",
      useCase: "[待確認原官網文案]",
      href: "/tw/products",
      mediaId: "package-02",
    },
    {
      code: "PKG-03",
      name: "[待確認原官網文案]",
      body: "[待確認原官網文案]",
      useCase: "[待確認原官網文案]",
      href: "/tw/products",
      mediaId: "package-03",
    },
  ],
};

export const caseStudies = {
  eyebrow: "CASE STUDIES",
  title: "精選案例",
  items: [
    {
      code: "CASE 01",
      category: "AIRPORT // 機場單位",
      title: "空側駕駛模擬訓練導入",
      body: "導入 XR 模擬系統，獲 XR EXPRESS TW 最佳 XR 訓練應用獎肯定。",
      mediaId: "case-airport",
    },
    {
      code: "CASE 02",
      category: "POLICE // 警政單位",
      title: "警察局勤務情境訓練中心",
      body: "建置常態化情境訓練場域，提升員警臨場應對能力。",
      mediaId: "case-police",
    },
    {
      code: "CASE 03",
      category: "FIRE // 消防單位",
      title: "火災搶救指揮模擬系統",
      body: "結合實體道具與 VR，強化指揮官決策訓練。",
      mediaId: "case-fire",
    },
  ],
};

/**
 * News items are dated content intended to be CMS-driven.
 * Dates/titles below come from the finalized homepage mockup as launch-time
 * examples; wire this section to the real news/CMS feed before go-live.
 */
export const news = {
  eyebrow: "NEWS",
  title: "最新消息",
  moreLink: { label: "更多消息", href: "/tw/news" },
  items: [
    {
      date: "2026.05.12",
      category: "COMPANY",
      title: "Big x Reality 榮獲國家品牌玉山獎",
      href: "/tw/news",
    },
    {
      date: "2026.04.02",
      category: "INSIGHT",
      title: "XR 模擬訓練如何提升決策成效",
      href: "/tw/news",
    },
    {
      date: "2026.03.18",
      category: "INDUSTRY",
      title: "智慧城市應變指揮系統趨勢觀察",
      href: "/tw/news",
    },
  ],
};

export const trustedBy = {
  eyebrow: "TRUSTED BY // 合作與服務單位",
  items: ["內政部警政署", "國防部", "國家發展委員會", "各縣市消防局", "智慧城市推動辦公室"],
};

export const missionCta = {
  eyebrow: "MISSION READY",
  title: "準備好體驗下一代訓練方式了嗎？",
  ctaPrimary: { label: "預約產品展示", href: "/tw/contact" },
  ctaSecondary: { label: "聯絡業務團隊", href: "/tw/contact" },
};

export const footer = {
  companyName: "全球動力科技股份有限公司",
  address: "台北市大安區復興南路一段 368 號 5 樓",
  email: "service@gptt.com.tw",
  menu: [
    { label: "首頁", href: "/tw/home" },
    { label: "解決方案", href: "/tw/solutions" },
    { label: "產品系統", href: "/tw/products" },
    { label: "案例", href: "/tw/cases" },
    { label: "最新消息", href: "/tw/news" },
  ],
  about: [
    { label: "技術觀點", href: "/tw/insights" },
    { label: "常見問題", href: "/tw/faq" },
    { label: "關於我們", href: "/tw/about" },
    { label: "聯絡我們", href: "/tw/contact" },
    { label: "隱私權政策", href: "/tw/privacy" },
    { label: "使用條款", href: "/tw/terms" },
  ],
  newsletter: {
    label: "NEWSLETTER",
    placeholder: "Email 地址訂閱",
  },
  copyright: "© 2026 GLOBAL POWER TECHNOLOGY // BIG X REALITY",
  social: [
    { label: "Facebook", href: "#", note: "[待確認原官網文案：正式連結待提供]" },
    { label: "YouTube", href: "#", note: "[待確認原官網文案：正式連結待提供]" },
    { label: "Instagram", href: "#", note: "[待確認原官網文案：正式連結待提供]" },
  ],
};
