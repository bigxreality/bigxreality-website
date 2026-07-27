# 解決方案架構 — /zh-tw/solutions/

## 五個正式路由（本輪僅繁中）

| 路由 | 頁面 |
|---|---|
| `/zh-tw/solutions/` | 解決方案總覽 |
| `/zh-tw/solutions/military/` | 01 軍事 |
| `/zh-tw/solutions/police/` | 02 警勤 |
| `/zh-tw/solutions/fire-rescue/` | 03 消防 |
| `/zh-tw/solutions/smart-city/` | 04 智慧城市 |

固定順序：軍事 → 警勤 → 消防 → 智慧城市。排序唯一來源是
`src/data/solutions.ts` 的 `solutionOrder`，首頁 Solution Card、總覽頁導航、
Header／Footer／Mobile Navigation 皆共用此順序（Header/Footer 的導覽連結本身只有
「解決方案」單一入口，不逐一列出四個子項）。

## 頁面結構

### 總覽頁 `/zh-tw/solutions/`
1. Hero（Eyebrow + H1 + 簡介）
2. 四個大型橫向敘事區塊（`NarrativeBlock`），依 `solutionOrder` 交錯排列
   （奇數項目大圖在右／內容在左，偶數項目相反；手機版一律單欄）
3. Contact CTA

不含：各領域完整產品列表、完整特色、完整案例（依規格書要求，總覽只做入口）。

### 四個獨立頁面（軍事／警勤／消防／智慧城市）
共同骨架，但各頁組成不同（見下方「各頁差異」）：

1. `DetailHero`（Eyebrow 英文標籤 + H1 + 副標 + 桌機/手機 Hero 圖）
2. Breadcrumb（首頁 / 解決方案 / 當前領域）
3. 領域簡介或現況需求（各頁不同組合）
4. 應用情境／核心能力（`CapabilityGrid`）
5. 對應產品或系統（`ProductLinks`，無資料時顯示待確認說明而非空白或假資料）
6. 其他解決方案導航（`OtherSolutionsNav`，依 `solutionOrder` 排除當前頁）
7. Contact CTA（沿用首頁 `CTASection` 與其背景圖）

### 各頁差異（避免四頁換皮）
| 頁面 | 獨有區塊 | 沒有的區塊 |
|---|---|---|
| 軍事 | 訓練層級階梯（`CapabilityLadder`：個人操作→班組協同→小部隊戰術→指揮決策→跨系統整合） | 無領域簡介前言段落（直接進入痛點） |
| 警勤 | 領域簡介前言段落 | 無訓練層級階梯 |
| 消防 | 「新版新增內容」提示橫幅（brand 色框，明確標示文字待確認） | 無訓練層級階梯；對應系統為空（顯示待確認說明） |
| 智慧城市 | 8 大應用面向合併呈現於單一 `CapabilityGrid`（智慧交通／防災／職業安全／XR教育／場域資訊整合／客製化整合） | 無訓練層級階梯；相關案例／產品為空（顯示待確認說明） |

## 共用元件

**zh-tw 頁面**：`src/components/solutions/`：`DetailHero`、`NarrativeBlock`、`PainPointsList`、
`CapabilityGrid`、`CapabilityLadder`（僅軍事使用）、`ProductLinks`、`OtherSolutionsNav`。

**en/ja 頁面**：`RichSolutionPage`（單頁模板，接收 `locale`／`slug` 決定內容）、
`RichSolutionsOverview`（總覽模板）、`RichSections`（渲染 About／條列小節／Specialties）。
沿用 `DetailHero`、`NarrativeBlock` 與 zh-tw 共用。

全語系共用：`Header`、`Footer`、`Breadcrumb`、`CTASection`、`SEOHead`、`Layout`。

## 資料層

- `src/data/solutions.ts` — `solutionOrder`（排序唯一來源）+ 每個領域的完整內容物件
  （Hero 文案、SEO、痛點、應用情境、核心能力、產品清單、文案來源狀態）
- `src/data/solutions-media.ts` — 每個頁面的圖片路徑集中管理（`status` 欄位標記
  missing/temporary/approved/replace-later，同 `homepage-media.ts` 的模式）

首頁的 Solution Card 資料仍來自 Content Collections（`src/content/solutions/*.md`，
`itemSlug` 欄位已改為 `military`/`police`/`fire-rescue`/`smart-city` 以對應新路由），
但排序與連結目標皆指向本輪新建的獨立頁面。

## 語言架構

### 已完成三語系的頁面
`/solutions/`、`/solutions/military/`、`/solutions/police/`、`/solutions/smart-city/`
現已在 `zh-tw`／`en`／`ja` 三個語系都存在：

```
/zh-tw/solutions/           /en/solutions/           /ja/solutions/
/zh-tw/solutions/military/  /en/solutions/military/  /ja/solutions/military/
/zh-tw/solutions/police/    /en/solutions/police/    /ja/solutions/police/
/zh-tw/solutions/smart-city/ /en/solutions/smart-city/ /ja/solutions/smart-city/
```

英文內容逐字取自官方英文網站（使用者提供），日文為 Claude 依英文原文翻譯（官方無日文頁面）。
這三個語系的內容深度與結構不同：zh-tw 沿用先前輪次的「痛點／能力／產品」模型，en/ja 則採用
官方原文的「About + 條列小節 + Specialties」模型（見 `src/components/solutions/RichSolutionPage.astro`
與 `RichSections.astro`），因為來源內容本身形式不同，這是刻意的設計決定，非不一致的錯誤。

由於這三頁三語系皆存在，SEOHead／Header／LanguageSwitcher 皆使用預設的 `availableLocales`
（三語系全開），hreflang 與語言切換器在這四個頁面上可正常於三語系間切換。

### 僅 zh-tw 的頁面
`/zh-tw/solutions/fire-rescue/` —— 官方英文網站沒有獨立的消防頁面（僅在 Smart City 頁面中
提及消防為其中一個應用小節），因此本輪**沒有**建立 `/en/solutions/fire-rescue/` 或
`/ja/solutions/fire-rescue/`，避免無中生有捏造官方沒有的頁面。此頁的 `SEOHead`／`Header`
明確傳入 `availableLocales={["zh-tw"]}`，語言切換器與首頁的消防 Solution Card 在 en/ja
版本上會退回該語系首頁，不會產生 404 或假翻譯。

首頁 Solution Card 的連結邏輯（`src/pages/[locale]/index.astro`）：軍事／警勤／智慧城市在
三語系皆連到真實頁面；消防僅 zh-tw 連到真實頁面，en/ja 版退回該語系首頁。

## 舊網址轉址

`/tw/solutions`（及 `/tw/solutions/`）已建立靜態轉址頁
（`src/pages/tw/solutions/index.astro`，沿用 `LegacyRedirect` 元件：
`<meta http-equiv="refresh">` + 絕對網址 `canonical`）導向 `/zh-tw/solutions/`。
若日後切換 Netlify，可在 `public/_redirects` 加入對應 301 規則（該檔案已存在，
用於首頁階段的舊網址轉址，可比照擴充）。

## Sitemap

`src/pages/sitemap.xml.ts` 已更新，納入解決方案總覽與四個獨立頁面（僅 zh-tw）。
