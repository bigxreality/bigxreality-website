# Big x Reality — 官網 2.0

Astro + TypeScript + Tailwind CSS，靜態輸出。目前為開發階段，透過 GitHub Pages 部署預覽；
完成階段將改接 Netlify 做正式部署（含 Decap CMS）。詳見 `Big x Reality Website 2.0 — Claude
Code 執行規格書`。

## 目前線上預覽

推送到 `main` 或本開發分支後，GitHub Actions 會自動 build 並部署到 GitHub Pages：

- **繁中（預設）**: `https://bigxreality.github.io/bigxreality-website/zh-tw/`
- **英文**: `https://bigxreality.github.io/bigxreality-website/en/`
- **日文**: `https://bigxreality.github.io/bigxreality-website/ja/`

> 需要 repo 的 **Settings → Pages → Build and deployment → Source** 設定為
> **GitHub Actions**（僅需設定一次）。若尚未設定，Actions 執行會顯示對應錯誤訊息。

## 本階段範圍

依規格書第十四節，本次一次執行第 2–6 階段：專案基礎建置、全站共用元件、三語系路由架構、
首頁（AIDA 結構）。**規格書明列首頁不應出現**：FAQ 區塊、核心產品卡片區、全部產品列表 ——
因此「套裝方案／產品」區塊尚未加入首頁。Decap CMS `/admin` 依規格書第一節在 GitHub Pages
開發階段暫不串接，僅先規劃好 Content Collections 資料夾結構（見下方）。

## 開發

```bash
npm install
npm run dev       # http://localhost:4321/bigxreality-website/zh-tw/
npm run build     # 正式建置到 dist/
npm run preview   # 預覽 build 後的靜態檔案
npm run check     # astro check（型別檢查）
```

## 專案結構

```
astro.config.mjs        # site/base（GitHub Pages 專案頁路徑）、output: "static"
tailwind.config.cjs      # 設計系統 tokens（色彩／字級／間距／斷點，規格書第十節，直接採用）
src/
  content.config.ts      # Content Collections schema
  content/
    solutions/           # 4 大解決方案（zh-tw 完整，en/ja 導覽用詞已翻譯，內文標記待翻譯）
    caseStudies/          # 精選案例
    news/                 # 最新消息（首頁僅顯示標題/日期/分類）
    products/             # 已建 schema，尚無內容條目（規格書第八階段）
    insights/ faq/         # 已建 schema，尚無內容條目
    siteSettings/          # 每語系一份：導覽、Hero、About、WhyXR、最終CTA、Footer 等文案
  components/            # Header / Footer / LanguageSwitcher / Breadcrumb / CTASection /
                          # HeroSlider / SolutionCard / CaseCard / NewsCard / SEOHead 等
  i18n/utils.ts           # locales、語系網址工具
  pages/
    index.astro           # 根路徑：依記憶語系或瀏覽器語言導向（非強制、非 IP 導向）
    [locale]/index.astro  # 首頁（zh-tw / en / ja 共用同一份模板）
.github/workflows/deploy-pages.yml
ASSETS_NEEDED.md          # 圖片素材需求清單
docs/homepage-copy-changes.md      # 文案沿用／修改紀錄
docs/homepage-image-requirements.md # 舊版（Next.js）紀錄，已由 ASSETS_NEEDED.md 取代
```

## 多語系

- 網址結構：`/zh-tw/`、`/en/`、`/ja/`，語系根路徑本身即首頁（不使用 `/zh-tw/home`）
- 語言切換器記住選擇（`localStorage`），且首次進站僅依瀏覽器語言「建議」導向，不強制、不依 IP
- en / ja 的導覽選單與按鈕已翻譯；尚無官方翻譯的內文一律標記 `[Translation pending]` /
  `[翻訳準備中]`，未自行編造行銷文案

## 設計系統

色彩、字級、間距、RWD 斷點（`sm=390 / md=768 / lg=1024 / xl=1440`）依規格書第十節直接採用，
寫在 `tailwind.config.cjs`。字體為 Inter（英文/數字）+ Noto Sans TC（中文），透過
`@fontsource/*` 自我託管，不使用襯線或裝飾字體。
