# 首頁圖片需求清單 — /zh-tw/

所有圖片透過 `src/data/homepage-media.ts` 集中管理（路徑、alt、狀態），元件不寫死路徑。
實際檔案放在 `public/images/home/` 對應子資料夾。替換素材時，用同檔名覆蓋即可，不需要改程式碼。

| 圖片檔名 | 區塊 | 目前素材 | 建議比例 | 建議尺寸 | 狀態 | 未來是否替換 |
|---|---|---|---|---|---|---|
| `hero/home-hero-desktop.jpg` | Hero（桌機） | 暫時佔位圖 | 16:9 | 2560×1440 | missing | 是 |
| `hero/home-hero-mobile.jpg` | Hero（手機） | 暫時佔位圖 | 4:5 | 1440×1800 | missing | 是 |
| `about/home-about-company.jpg` | 公司簡介 | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `about/home-about-training.jpg` | 公司簡介（備用，未使用） | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `xr-training/home-xr-reality.jpg` | Why XR — 真實訓練 | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `xr-training/home-xr-virtual.jpg` | Why XR — XR 虛擬訓練 | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `xr-training/home-xr-data.jpg` | Why XR — 訓練數據 | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `solutions/home-solution-police.jpg` | 解決方案 — 警勤模擬訓練 | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `solutions/home-solution-military.jpg` | 解決方案 — 軍事模擬訓練 | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `solutions/home-solution-smart-city.jpg` | 解決方案 — 智慧城市應用 | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `solutions/home-solution-fire.jpg` | 解決方案 — 消防防救災訓練 | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `packages/home-package-sut.jpg` | 套裝方案（已備妥，首頁未渲染） | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `packages/home-package-police-box.jpg` | 套裝方案（同上） | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `packages/home-package-ai-military.jpg` | 套裝方案（同上） | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `packages/home-package-uav.jpg` | 套裝方案（同上） | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `cases/home-case-01.jpg` | 精選案例 — 機場空側 | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `cases/home-case-02.jpg` | 精選案例 — 警察局訓練中心 | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `cases/home-case-03.jpg` | 精選案例 — 火災搶救指揮 | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `news/home-news-default.jpg` | 最新消息預設圖（尚未渲染） | 暫時佔位圖 | 4:3 | 1600×1200 | missing | 是 |
| `cta/home-contact-cta.jpg` | 最終 CTA 背景 | 暫時佔位圖 | 16:9 | 1920×900 | missing | 是 |

詳細狀態定義與每張圖的替換說明，見 `docs/homepage-image-status.md`。
資料夾用途、比例建議與命名規則，見各資料夾內的 `README.md`（`public/images/home/<folder>/README.md`）。

---

## 舊版（Next.js）紀錄

本文件曾在 Next.js 版本階段記錄過另一套圖片需求（`lib/data/homepage-media.ts` 對應的 `packages`
套裝方案區塊等）。該版本已隨技術棧改為 Astro 而移除，內容不再適用，已由上方表格取代。
