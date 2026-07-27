# 首頁圖片狀態 — /zh-tw/

> 重要限制說明：本輪任務要求「所有首頁照片暫時使用原官網既有照片候補」。但本次執行環境的網路政策
> 阻擋了對外連線 `bigxreality.com`（sandbox 的 outbound proxy 直接拒絕 CONNECT），改用 WebFetch
> 工具嘗試抓取時，官網本身的防護機制也回傳 403（包含根網域，非只有 `/tw/home` 這一頁）。因此**這一輪
> 無法真正下載到官網的原始照片**，所有圖片狀態如實標記為 `missing`（非官網照片，也非外部圖庫/AI生成
> 圖片，僅為清楚標註用途的暫時佔位圖），而非謊報為 `original-site`。等你提供官網真實圖檔後，只需
> 用同檔名覆蓋 `public/images/home/` 內對應檔案即可，不需要修改任何程式碼。

| 圖片檔名 | 狀態 | 說明 |
|---|---|---|
| `hero/home-hero-desktop.jpg` | missing | 首頁 Hero 桌機版，需替換為官網最具代表性的 XR 訓練照片 |
| `hero/home-hero-mobile.jpg` | missing | 手機版直式構圖，非桌機圖裁切，需另外提供 |
| `about/home-about-company.jpg` | missing | 公司簡介區塊主圖，目前使用中 |
| `about/home-about-training.jpg` | missing | 備用圖，目前首頁未使用 |
| `xr-training/home-xr-reality.jpg` | missing | Why XR 區塊：真實訓練畫面 |
| `xr-training/home-xr-virtual.jpg` | missing | Why XR 區塊：XR 虛擬訓練畫面 |
| `xr-training/home-xr-data.jpg` | missing | Why XR 區塊：教官／訓練數據畫面 |
| `solutions/home-solution-police.jpg` | missing | 解決方案卡片：警勤模擬訓練 |
| `solutions/home-solution-military.jpg` | missing | 解決方案卡片：軍事模擬訓練 |
| `solutions/home-solution-smart-city.jpg` | missing | 解決方案卡片：智慧城市應用 |
| `solutions/home-solution-fire.jpg` | missing | 解決方案卡片：消防防救災訓練 |
| `packages/home-package-sut.jpg` | missing | 已備妥資料與資料夾，首頁目前未渲染套裝方案區塊 |
| `packages/home-package-police-box.jpg` | missing | 同上 |
| `packages/home-package-ai-military.jpg` | missing | 同上 |
| `packages/home-package-uav.jpg` | missing | 同上 |
| `cases/home-case-01.jpg` | missing | 精選案例：機場空側駕駛模擬訓練導入 |
| `cases/home-case-02.jpg` | missing | 精選案例：警察局勤務情境訓練中心 |
| `cases/home-case-03.jpg` | missing | 精選案例：火災搶救指揮模擬系統 |
| `news/home-news-default.jpg` | missing | 新聞預設圖，目前首頁新聞區塊為純文字，此圖尚未渲染 |
| `cta/home-contact-cta.jpg` | missing | 最終 CTA 區塊背景，搭配深色遮罩與 XR Grid |

## 狀態定義

- `missing` — 無真實照片，僅為標註清楚用途的暫時佔位圖（非外部圖庫、非 AI 生成）
- `temporary` — 已有可用照片，但預期之後會替換
- `approved` — 確認為正式上線版本
- `replace-later` — 堪用但優先級較低，可稍後替換

## 佔位圖產生方式

所有佔位圖由 `scripts/generate-placeholders.py`（一次性腳本，非 build 流程的一部分）產生：純色底
搭配對角條紋與清楚標示的用途文字（PLACEHOLDER · TEMPORARY + 區塊名稱 + 中文說明），可與正式照片
明顯區分，避免被誤用為正式素材。
