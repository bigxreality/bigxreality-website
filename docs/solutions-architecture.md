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

**注意（後續輪次更新）**：警勤與智慧城市取得官方繁中全文後，已改用 en/jp 共用的
`RichSolutionPage` 富內容模板渲染（見下方「共用元件」），下方「共同骨架」與「各頁差異」表格
僅適用於**軍事**與**消防**（仍沿用舊的痛點／能力／產品模型，因為尚未取得對應官方全文）。

軍事／消防共同骨架：

1. `DetailHero`（Eyebrow 英文標籤 + H1 + 副標 + 桌機/手機 Hero 圖）
2. Breadcrumb（首頁 / 解決方案 / 當前領域）
3. 領域簡介或現況需求（各頁不同組合）
4. 應用情境／核心能力（`CapabilityGrid`）
5. 對應產品或系統（`ProductLinks`，無資料時顯示待確認說明而非空白或假資料）
6. 其他解決方案導航（`OtherSolutionsNav`，依 `solutionOrder` 排除當前頁）
7. Contact CTA（沿用首頁 `CTASection` 與其背景圖）

軍事／消防差異：
| 頁面 | 獨有區塊 | 沒有的區塊 |
|---|---|---|
| 軍事 | 訓練層級階梯（`CapabilityLadder`：個人操作→班組協同→小部隊戰術→指揮決策→跨系統整合） | 無領域簡介前言段落（直接進入痛點） |
| 消防 | 「新版新增內容」提示橫幅（brand 色框，明確標示文字待確認） | 無訓練層級階梯；對應系統為空（顯示待確認說明） |

警勤／智慧城市（`RichSolutionPage`）骨架：`DetailHero` → Breadcrumb →
`RichSections`（About／條列小節／Specialties）→ `OtherSolutionsNav`（zh-tw 專屬，
en/jp 版不顯示，因為那兩語系目前只有 3 個解決方案、沒有跨頁導航需求）→ Contact CTA。

## 共用元件

**軍事／消防（zh-tw 專屬舊模型）**：`src/components/solutions/`：`DetailHero`、`NarrativeBlock`、
`PainPointsList`、`CapabilityGrid`、`CapabilityLadder`（僅軍事使用）、`ProductLinks`、
`OtherSolutionsNav`。

**警勤／智慧城市（zh-tw／en／jp 共用富內容模型）**：`RichSolutionPage`（單頁模板，接收
`locale`／`slug` 決定內容，`locale="zh-tw"` 時額外渲染 `OtherSolutionsNav`）、
`RichSolutionsOverview`（僅 en/jp 使用的總覽模板；zh-tw 總覽頁仍用舊模型）、`RichSections`
（渲染 About／條列小節／Specialties）。沿用 `DetailHero`、`NarrativeBlock` 與舊模型共用。

全語系共用：`Header`、`Footer`、`Breadcrumb`、`CTASection`、`SEOHead`、`Layout`。

## 資料層

- `src/data/solutions.ts` — `solutionOrder`（排序唯一來源）+ 每個領域的完整內容物件
  （Hero 文案、SEO、痛點、應用情境、核心能力、產品清單、文案來源狀態）。軍事／消防的實際
  渲染仍讀這份資料；警勤／智慧城市的物件則保留作為總覽頁摘要卡片與 `OtherSolutionsNav`
  的資料來源，詳細內文改讀 `solutions-rich.ts`。
- `src/data/solutions-rich.ts` — `richSolutionOrder`（en/jp 排序，僅 3 項、無消防）+
  `solutionsRich`（`Record<Locale, Partial<Record<slug, content>>>`：en／jp 各有軍事／
  警勤／智慧城市三項完整內容，zh-tw 目前只有警勤／智慧城市兩項——軍事尚待官方全文）
- `src/data/solutions-media.ts` — 每個頁面的圖片路徑集中管理（`status` 欄位標記
  missing/temporary/approved/replace-later，同 `homepage-media.ts` 的模式）

首頁的 Solution Card 資料仍來自 Content Collections（`src/content/solutions/*.md`，
`itemSlug` 欄位已改為 `military`/`police`/`fire-rescue`/`smart-city` 以對應新路由），
但排序與連結目標皆指向本輪新建的獨立頁面。

## 語言架構

### 已完成三語系的頁面
`/solutions/`、`/solutions/military/`、`/solutions/police/`、`/solutions/smart-city/`
現已在 `zh-tw`／`en`／`jp` 三個語系都存在：

```
/zh-tw/solutions/           /en/solutions/           /jp/solutions/
/zh-tw/solutions/military/  /en/solutions/military/  /jp/solutions/military/
/zh-tw/solutions/police/    /en/solutions/police/    /jp/solutions/police/
/zh-tw/solutions/smart-city/ /en/solutions/smart-city/ /jp/solutions/smart-city/
```

（日文網址路徑代號為 `jp`，非 `ja`——`<html lang>` 與 hreflang 仍使用正確的 BCP-47 代碼
`ja`／`ja-JP`，兩者刻意分開，見 `src/i18n/utils.ts` 的 `locales` 與 `localeHtmlLang`。）

英文內容逐字取自官方英文網站（使用者提供），日文為 Claude 依英文原文翻譯（官方無日文頁面）。
警勤／智慧城市的 zh-tw 內容後續已比照 en/jp 改為官方原文的「About + 條列小節 + Specialties」
模型（使用者提供之官方繁中全文，見 `docs/solutions-copy-source.md`）；軍事與消防的 zh-tw 頁面
則仍沿用先前輪次的「痛點／能力／產品」模型（`src/data/solutions.ts`），因為尚未取得對應的官方
全文。三語系共用同一套 `RichSolutionPage`／`RichSections` 元件（見
`src/components/solutions/RichSolutionPage.astro`），只是 `solutionsRich` 資料依語系與頁面
逐步補齊，並非設計上的不一致。

由於這三頁三語系皆存在，SEOHead／Header／LanguageSwitcher 皆使用預設的 `availableLocales`
（三語系全開），hreflang 與語言切換器在這四個頁面上可正常於三語系間切換。

### 僅 zh-tw 的頁面
`/zh-tw/solutions/fire-rescue/` —— 官方英文網站沒有獨立的消防頁面（僅在 Smart City 頁面中
提及消防為其中一個應用小節），因此本輪**沒有**建立 `/en/solutions/fire-rescue/` 或
`/jp/solutions/fire-rescue/`，避免無中生有捏造官方沒有的頁面。此頁的 `SEOHead`／`Header`
明確傳入 `availableLocales={["zh-tw"]}`，語言切換器與首頁的消防 Solution Card 在 en/jp
版本上會退回該語系首頁，不會產生 404 或假翻譯。

首頁 Solution Card 的連結邏輯（`src/pages/[locale]/index.astro`）：軍事／警勤／智慧城市在
三語系皆連到真實頁面；消防僅 zh-tw 連到真實頁面，en/jp 版退回該語系首頁。

## 舊網址轉址

`/tw/solutions`（及 `/tw/solutions/`）已建立靜態轉址頁
（`src/pages/tw/solutions/index.astro`，沿用 `LegacyRedirect` 元件：
`<meta http-equiv="refresh">` + 絕對網址 `canonical`）導向 `/zh-tw/solutions/`。
若日後切換 Netlify，可在 `public/_redirects` 加入對應 301 規則（該檔案已存在，
用於首頁階段的舊網址轉址，可比照擴充）。

## Sitemap

`src/pages/sitemap.xml.ts` 已更新，納入解決方案總覽與四個獨立頁面（僅 zh-tw）。
