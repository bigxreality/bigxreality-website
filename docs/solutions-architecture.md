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

`src/components/solutions/`：`DetailHero`、`NarrativeBlock`、`PainPointsList`、
`CapabilityGrid`、`CapabilityLadder`（僅軍事使用）、`ProductLinks`、`OtherSolutionsNav`。
另沿用全站既有元件：`Header`、`Footer`、`Breadcrumb`、`CTASection`、`SEOHead`、`Layout`。

## 資料層

- `src/data/solutions.ts` — `solutionOrder`（排序唯一來源）+ 每個領域的完整內容物件
  （Hero 文案、SEO、痛點、應用情境、核心能力、產品清單、文案來源狀態）
- `src/data/solutions-media.ts` — 每個頁面的圖片路徑集中管理（`status` 欄位標記
  missing/temporary/approved/replace-later，同 `homepage-media.ts` 的模式）

首頁的 Solution Card 資料仍來自 Content Collections（`src/content/solutions/*.md`，
`itemSlug` 欄位已改為 `military`/`police`/`fire-rescue`/`smart-city` 以對應新路由），
但排序與連結目標皆指向本輪新建的獨立頁面。

## 語言架構（本輪僅繁中）

英文／日文路由結構已預留但尚未建置內容：
```
/en/solutions/ /en/solutions/military/ ...
/ja/solutions/ /ja/solutions/military/ ...
```
在內容完成前：
- Header／Footer／語言切換器在 zh-tw 解決方案相關頁面上，切換到 en/ja 時會退回該語系
  首頁（`/en/`、`/ja/`），不會導向不存在的頁面或造成 404
  （`SEOHead`／`Header`／`LanguageSwitcher` 新增 `availableLocales` prop 控制此行為）
- 首頁的 Solution Card 在 en/ja 版本上，連結同樣退回該語系首頁，未連到不存在的
  `/en/solutions/military/` 等路徑
- hreflang 只對 zh-tw 解決方案頁輸出 zh-tw 版本（`availableLocales={["zh-tw"]}`），
  不會產生指向不存在頁面的 hreflang 標籤

## 舊網址轉址

`/tw/solutions`（及 `/tw/solutions/`）已建立靜態轉址頁
（`src/pages/tw/solutions/index.astro`，沿用 `LegacyRedirect` 元件：
`<meta http-equiv="refresh">` + 絕對網址 `canonical`）導向 `/zh-tw/solutions/`。
若日後切換 Netlify，可在 `public/_redirects` 加入對應 301 規則（該檔案已存在，
用於首頁階段的舊網址轉址，可比照擴充）。

## Sitemap

`src/pages/sitemap.xml.ts` 已更新，納入解決方案總覽與四個獨立頁面（僅 zh-tw）。
