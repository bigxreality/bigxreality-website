/**
 * Solutions content — zh-tw only this round (see docs/solutions-copy-source.md
 * for what is carried over from the old site vs. new/provisional copy).
 * Route mapping: /zh-tw/solutions/<slug>/
 */

export const solutionOrder = ["military", "police", "fire-rescue", "smart-city"] as const;
export type SolutionSlug = (typeof solutionOrder)[number];

export type SolutionProduct = {
  name: string;
  href: string;
};

export type SolutionDetail = {
  slug: SolutionSlug;
  order: number;
  code: string; // e.g. "01"
  englishLabel: string; // e.g. "MILITARY SIMULATION"
  navTitle: string; // 中文名稱 used in nav/cards
  title: string; // Hero H1
  heroSubtitle: string;
  seoTitle: string;
  seoDescription: string;
  overviewExcerpt: string; // short blurb for the overview page narrative block
  representativeApplication: string; // one-line "代表性應用" for the overview nav
  intro: string; // 領域簡介
  painPoints: string[]; // 現況需求／訓練痛點
  approach: string; // Big x Reality 解決方式，一段文字
  applications: string[]; // 應用情境
  capabilities: string[]; // 核心能力
  ladder?: string[]; // 軍事專屬：訓練層級階梯
  products: SolutionProduct[];
  copyStatus: "reused" | "adjusted" | "new-provisional";
  copyNote: string;
};

export const solutions: Record<SolutionSlug, SolutionDetail> = {
  military: {
    slug: "military",
    order: 1,
    code: "01",
    englishLabel: "MILITARY SIMULATION",
    navTitle: "軍事",
    title: "軍事模擬訓練解決方案",
    heroSubtitle:
      "複雜戰術情境與多兵種協同兵推，將實戰演訓風險降到最低，支援從個人操作到指揮決策的完整訓練層級。",
    seoTitle: "軍事模擬訓練解決方案｜Big x Reality",
    seoDescription:
      "Big x Reality 軍事模擬訓練解決方案，透過 XR 與虛實整合系統支援個人武器操作、小部隊戰術、指揮決策與多系統協同訓練。",
    overviewExcerpt: "複雜戰術情境與多兵種協同兵推，將實戰演訓風險降到最低。",
    representativeApplication: "小部隊戰術與指揮決策訓練",
    intro:
      "Big x Reality 透過 XR、AI 與虛實整合模擬系統，支援軍事人員從個人操作、武器操作、小部隊戰術，到指揮決策與多系統協同訓練，在安全可控的環境中反覆演練高風險科目。",
    painPoints: [
      "實兵、實裝及實彈訓練成本高",
      "場地與氣候造成限制",
      "高風險課目難以反覆演練",
      "複雜情境難以快速重建",
      "訓練過程與成果不易量化",
      "多人協同與指揮訓練需要完整環境",
    ],
    approach:
      "透過虛實整合（LVC）模擬系統，將個人操作、班組協同、小部隊戰術到指揮決策整合為可重複執行的訓練流程，降低場地與耗材限制，並讓訓練過程與成果得以記錄與檢討。",
    applications: [
      "個人武器操作模擬",
      "小部隊戰術訓練",
      "CQB 近身作戰訓練",
      "無人機操作與反制無人機訓練",
      "迫砲及火力操作訓練",
      "狙擊與機槍模擬訓練",
      "軍用載具駕駛模擬",
      "兵棋推演與指揮決策",
      "LVC 虛實整合訓練",
    ],
    capabilities: [
      "個人武器操作模擬",
      "小部隊戰術訓練",
      "CQB 近身作戰訓練",
      "無人機操作與反制無人機訓練",
      "迫砲及火力操作訓練",
      "狙擊與機槍模擬訓練",
      "軍用載具駕駛模擬",
      "兵棋推演與指揮決策",
      "LVC 虛實整合訓練",
    ],
    ladder: ["個人操作", "班組協同", "小部隊戰術", "指揮決策", "跨系統整合"],
    products: [
      { name: "BXR SUT BOX", href: "/zh-tw/products/sut/" },
      { name: "無人機戰術訓練系統", href: "/zh-tw/products/uav/" },
      { name: "兵棋圖台", href: "/zh-tw/products/wargame-table/" },
      { name: "迫砲模擬器", href: "/zh-tw/products/mortar-simulator/" },
      { name: "狙擊槍模擬器", href: "/zh-tw/products/sniper-simulator/" },
      { name: "機槍模擬器", href: "/zh-tw/products/machine-gun-simulator/" },
      { name: "悍馬車駕駛系統", href: "/zh-tw/products/humvee-driving/" },
      { name: "快艇駕駛系統", href: "/zh-tw/products/boat-driving/" },
    ],
    copyStatus: "adjusted",
    copyNote:
      "Hero 副標沿用首頁既有「軍事模擬訓練」摘要文字（原始來源見 docs/homepage-copy-changes.md）。" +
      "訓練需求、應用情境、核心能力與對應產品清單，取自本輪任務指示提供之內容（非逐字舊官網頁面文案，" +
      "因無法連線存取 bigxreality.com 取得即時 HTML／JSON），依指示原樣採用、僅做標點與分段整理。",
  },

  police: {
    slug: "police",
    order: 2,
    code: "02",
    englishLabel: "POLICE SIMULATION",
    navTitle: "警勤",
    title: "警勤模擬訓練解決方案",
    heroSubtitle:
      "臨檢盤查、突發衝突、用槍時機——在安全環境中反覆演練高壓勤務決策，支援單警與多人協同訓練。",
    seoTitle: "警勤模擬訓練解決方案｜Big x Reality",
    seoDescription:
      "Big x Reality 警勤模擬訓練解決方案，透過可控制、可回放的 XR 情境訓練，支援執法判斷、武力使用與現場應變訓練。",
    overviewExcerpt: "臨檢盤查、突發衝突、用槍時機——在安全環境中反覆演練高壓勤務決策。",
    representativeApplication: "情境判斷與武力使用訓練",
    intro:
      "Big x Reality 警勤模擬訓練解決方案，讓警勤人員透過安全、可重複且具情境變化的 XR 訓練，練習執法判斷、武力使用、現場應變及團隊協同。",
    painPoints: [
      "執勤情境快速變化",
      "武力使用需要正確判斷",
      "高風險事件難以在真實環境反覆演練",
      "單警與多人協同皆需要訓練",
      "訓練需要可控制、可回放與可評估",
    ],
    approach:
      "以情境模擬取代高風險現場的反覆實兵演練，教官端可即時控制情境變化並回放檢討，讓單警與多人協同訓練都能在可控環境中累積經驗。",
    applications: [
      "基礎射擊與武器操作",
      "情境判斷射擊",
      "執法現場應變",
      "高風險逮捕",
      "室內搜索",
      "多人戰術協同",
      "危機處置",
      "教官端情境控制與訓練回顧",
    ],
    capabilities: [
      "基礎射擊與武器操作",
      "情境判斷射擊",
      "執法現場應變",
      "高風險逮捕",
      "室內搜索",
      "多人戰術協同",
      "危機處置",
      "教官端情境控制與訓練回顧",
    ],
    products: [
      { name: "BXR Police System", href: "/zh-tw/products/police-system/" },
      { name: "BXR Police Box", href: "/zh-tw/products/police-box/" },
      { name: "SUT 系統（警勤適用模組）", href: "/zh-tw/products/sut/" },
    ],
    copyStatus: "adjusted",
    copyNote:
      "Hero 副標沿用首頁既有「警勤模擬訓練」摘要文字。訓練需求、應用情境與對應產品清單取自本輪任務" +
      "指示提供之內容，僅整理斷句與分類，未新增指示未列出的課目或產品。",
  },

  "fire-rescue": {
    slug: "fire-rescue",
    order: 3,
    code: "03",
    englishLabel: "FIRE & RESCUE SIMULATION",
    navTitle: "消防",
    title: "消防模擬訓練解決方案",
    heroSubtitle:
      "透過 XR 模擬技術重現火災、災害與高風險應變情境，讓受訓人員能在安全且可控制的環境中，反覆練習設備操作、現場判斷與應變流程。",
    seoTitle: "消防模擬訓練解決方案｜Big x Reality",
    seoDescription:
      "Big x Reality 消防模擬訓練解決方案，透過虛實整合模擬技術重現火災與災害應變情境，支援設備操作、火場判斷與應變流程訓練。",
    overviewExcerpt:
      "火場搶救與大規模災害應變，不受場地與安全限制的擬真演練。",
    representativeApplication: "火場情境辨識與應變流程訓練",
    intro:
      "消防與災害應變訓練經常受到場地、安全、煙熱、耗材及情境重建等條件限制。Big x Reality 透過虛實整合模擬技術，將設備操作、火場判斷與應變流程轉化為可重複執行的訓練內容，協助訓練單位在降低實體演練風險的同時，建立更具一致性的訓練流程。",
    painPoints: [
      "實火訓練具有安全與場地限制",
      "不同災害情境難以頻繁重建",
      "設備操作與判斷流程需要反覆練習",
      "初學者需要在進入高風險場域前建立基礎經驗",
      "訓練單位需要一致且可重複的訓練內容",
    ],
    approach:
      "以 XR 模擬重現火災與災害情境，讓設備操作與應變流程的練習不再受限於實火訓練的場地、安全與耗材限制，同時保留一致、可重複的訓練標準。",
    applications: [
      "滅火器操作訓練",
      "初期火災應變",
      "火場情境辨識",
      "防災教育",
      "災害應變流程",
      "工業安全與職業安全",
      "特定場域客製化模擬（[能力範圍待確認]）",
    ],
    capabilities: [
      "滅火器操作訓練",
      "初期火災應變",
      "火場情境辨識",
      "防災教育",
      "災害應變流程",
      "工業安全與職業安全",
    ],
    products: [],
    copyStatus: "new-provisional",
    copyNote:
      "消防解決方案為新版新增內容，不屬於舊官網原始文案（舊官網無對應頁面可供沿用）。Hero H1、Hero " +
      "說明與頁面簡介段落為本輪任務指示提供之暫定文案，尚待正式核准，不得視為舊官網原文。目前無對應" +
      "產品／套裝方案資料，故「對應系統」區塊暫不顯示項目；「特定場域客製化模擬」標記為能力範圍待確認。",
  },

  "smart-city": {
    slug: "smart-city",
    order: 4,
    code: "04",
    englishLabel: "SMART CITY",
    navTitle: "智慧城市",
    title: "智慧城市解決方案",
    heroSubtitle: "城市數位孿生與應變指揮模擬，讓治理決策在虛擬城市中先行驗證。",
    seoTitle: "智慧城市解決方案｜Big x Reality",
    seoDescription:
      "Big x Reality 智慧城市解決方案，聚焦智慧交通、場域模擬、防災應變與職業安全訓練，整合 XR 模擬與地理場域資訊。",
    overviewExcerpt: "城市數位孿生與應變指揮模擬，讓治理決策在虛擬城市中先行驗證。",
    representativeApplication: "智慧交通與防災應變場域模擬",
    intro:
      "Big x Reality 智慧城市解決方案聚焦智慧交通、場域模擬、防災應變、職業安全與 XR 教育訓練，整合地理圖資或場域資訊，並依產業需求提供客製化模擬。",
    painPoints: [
      "城市場域規模大，實地演練與教育訓練成本高",
      "交通與應變場景難以在真實環境反覆測試",
      "跨局處協同應變需要共同的場域資訊基礎",
      "職業安全訓練需要貼近實際場域的情境",
    ],
    approach:
      "透過 XR 模擬與場域數位化，將城市場域、交通情境與應變流程轉化為可反覆測試的訓練與驗證環境，並依產業需求整合客製化系統。",
    applications: [
      "智慧交通操作與情境訓練",
      "防災應變與公共安全模擬",
      "產業與職業安全訓練",
      "XR 教育與訓練",
      "地理圖資或場域資訊整合",
      "客製化產業模擬",
    ],
    capabilities: [
      "智慧交通操作訓練",
      "防災與公共安全應變模擬",
      "產業及職業安全訓練",
      "XR 教育與訓練",
      "地理圖資或場域資訊整合",
      "客製化系統整合",
    ],
    products: [],
    copyStatus: "reused",
    copyNote:
      "Hero 副標與核心應用面向（智慧交通、科技軍警、智慧防災、職業安全，5G／AI／IoT 與軟硬體整合）沿用" +
      "公司既有資料描述之定位，僅重新分類至對應段落，未新增未經證實的技術宣稱。目前無對應產品／案例可" +
      "連結，故「對應產品」區塊暫不顯示項目。",
  },
};

export const solutionsOverview = {
  eyebrow: "SOLUTIONS",
  title: "解決方案",
  seoTitle: "解決方案｜Big x Reality",
  seoDescription:
    "Big x Reality 提供軍事、警勤、消防與智慧城市領域的 XR 模擬訓練及虛實整合解決方案。",
  intro:
    "Big x Reality 提供軍事、警勤、消防與智慧城市領域的 XR 模擬訓練及虛實整合解決方案。",
  exploreLabel: "探索解決方案",
  copyNote:
    "Hero 說明依舊官網英文索引可確認之核心語意（智慧城市、軍事與警勤應用的 AI XR 模擬解決方案）調整，" +
    "並在不偏離原意的前提下納入本次新增的消防領域。",
};
