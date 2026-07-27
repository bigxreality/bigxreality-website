# ASSETS_NEEDED — 素材需求清單（首頁，第一批）

本文件列出目前 `/zh-tw/`、`/en/`、`/ja/` 首頁已建置但仍使用 placeholder 呈現的素材。
所有圖片皆透過 Content Collections（`src/content/siteSettings/*.json`、
`src/content/solutions/*.md`、`src/content/caseStudies/*.md`）以 `image: { src, alt }`
資料驅動，正式素材到位後只需要：
1. 將檔案放進 `public/images/home/`（檔名需與各 `.json`/`.md` 中 `image.src` 相符）
2. 視需要調整 `alt` 文字
不需要改動任何 `.astro` 元件程式碼。

## 總覽

| ID | 頁面／區塊 | 內容 | 比例 | 建議尺寸 | 數量 | 優先級 |
|---|---|---|---|---|---|---|
| brand-logo | 全站 Header／Footer | Big x Reality 品牌標誌（向量） | 依原始比例 | SVG + 512×512 PNG | 1 | P0 |
| home-hero-main | 首頁 Hero | 真實 XR 訓練主視覺 | 16:9 桌機 / 4:5 手機 | 2560×1440 / 1440×1800 | 1（可逐步擴充為輪播） | P0 |
| home-about-main | 首頁 關於 Big x Reality | 系統整合能力示意 | 4:3 | 1600×1200 | 1 | P1 |
| solution-law-enforcement | 解決方案卡片 | 警勤模擬訓練實景 | 4:3 | 1600×1200 | 1 | P0 |
| solution-defense | 解決方案卡片 | 軍事模擬訓練實景 | 4:3 | 1600×1200 | 1 | P1 |
| solution-smart-city | 解決方案卡片 | 智慧城市指揮中心示意 | 4:3 | 1600×1200 | 1 | P1 |
| solution-fire-rescue | 解決方案卡片 | 消防防救災訓練實景 | 4:3 | 1600×1200 | 1 | P0 |
| case-airport | 精選案例卡片 | 機場空側駕駛模擬訓練導入 | 4:3 | 1600×1200 | 1 | P1 |
| case-police | 精選案例卡片 | 警察局勤務情境訓練中心 | 4:3 | 1600×1200 | 1 | P1 |
| case-fire | 精選案例卡片 | 火災搶救指揮模擬系統 | 4:3 | 1600×1200 | 1 | P1 |

**本批統計**：P0 3 張、P1 6 張，共 9 張（另加品牌標誌 1 組）。

## 之後階段會用到、但這次尚未建立內容的素材

以下類型已在 Content Collections schema（`src/content.config.ts`）中定義好欄位，
但因對應頁面尚未開發（依十二階段規劃排在後面），這次沒有建立實際內容條目：

- **Products（產品系統）**：每項產品需要去背產品圖／規格圖，見規格書第六節 10 項產品清單
- **News／Insights 內頁**：封面圖、內文多張圖片（image gallery）、YouTube 影片 ID（不需另外準備影片檔，僅需 YouTube 連結）
- **FAQ**：無圖片需求
- **合作單位 Logo（Trusted By）**：資料欄位已保留於 `siteSettings.trustedBy`（目前為純文字），
  尚未使用任何機關標誌圖檔；若日後要放上標誌，需先取得各單位授權同意

## 每張圖片的規格要求

### home-hero-main
1. **內容**：受訓者實際使用 Big x Reality XR 訓練系統的畫面，需可見硬體裝置與虛擬訓練環境疊加。
2. **構圖**：主體置中或偏右，左側需留白供 Hero 文字使用。
3. **素材種類**：實拍照片，後製加入克制的 XR overlay（grid／tracking node／marker）。
4. **桌機／手機**：桌機 16:9（2560×1440），手機需另外提供 4:5（1440×1800）直式構圖，非單純裁切放大。
5. **後製**：統一色調、隱藏機敏裝備細節、確認肖像授權。

### home-about-main
1. **內容**：能代表系統整合能力的畫面（控制室、教官操作介面、多螢幕儀表板皆可）。
2. **構圖**：4:3，四周留白。
3. **素材種類**：實拍照片或系統介面截圖。
4. **桌機／手機**：可共用同一張。

### solution-law-enforcement／solution-defense／solution-smart-city／solution-fire-rescue
1. **內容**：對應四大解決方案的實景訓練畫面。
2. **構圖**：主體置中，四邊留白（卡片圓角會裁切邊緣）。
3. **素材種類**：實拍照片為主；smart-city 可用系統介面截圖或合成視覺。
4. **桌機／手機**：可共用同一張 4:3。
5. **後製**：統一色調，law-enforcement／fire-rescue 為 P0（先做這兩類）。

### case-airport／case-police／case-fire
1. **內容**：對應三個實際案例場域或使用畫面。
2. **構圖**：4:3，可用場域全景或操作特寫。
3. **素材種類**：實拍照片，優先使用實際驗收畫面。
4. **桌機／手機**：可共用同一張。
5. **後製**：需確認客戶是否同意案例公開露出於官網首頁。

## 圖片元件實作說明

- 目前以 `src/components/PlaceholderImage.astro` 顯示尺寸正確、標註用途的佔位視覺框（含 ID 與 alt 文字），不是隨意的灰色色塊。
- 正式素材到位後，將 `PlaceholderImage` 換成 Astro 內建 `<Image>` 元件（自動支援 WebP/AVIF、
  響應式尺寸、非首屏 lazy loading，Hero 圖可設定 `loading="eager"` 並預先載入）。
- 所有圖片路徑與 alt 皆由 Content Collections 管理，非寫死在元件裡。
