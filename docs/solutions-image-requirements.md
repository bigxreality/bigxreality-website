# 解決方案圖片需求清單 — /zh-tw/solutions/

所有圖片透過 `src/data/solutions-media.ts` 集中管理，元件不寫死路徑。實際檔案位於
`public/images/solutions/`，替換素材時用同檔名覆蓋即可。

> 說明：本輪同樣因無法連線存取官網（見 `docs/solutions-copy-source.md`），無法取得舊官網
> 原始照片，所有圖片狀態如實標記為 `temporary`（清楚標示用途的暫時佔位圖，非圖庫、非 AI 生成），
> 而非謊報為已盤點的候補圖。

| ID | 頁面 | 圖片內容 | 比例 | 建議尺寸 | 現有候補圖 | 狀態 | 優先級 |
|---|---|---|---|---|---|---|---|
| solutions-hero | 總覽 | 解決方案總覽 Hero | 16:9 桌機 / 4:5 手機 | 2560×1440 / 1440×1800 | 待盤點 | temporary | P0 |
| solution-military-cover | 總覽 | 軍事解決方案代表畫面 | 4:3 | 1600×1200 | 待盤點 | temporary | P1 |
| solution-police-cover | 總覽 | 警勤解決方案代表畫面 | 4:3 | 1600×1200 | 待盤點 | temporary | P1 |
| solution-fire-rescue-cover | 總覽 | 消防解決方案代表畫面 | 4:3 | 1600×1200 | 待盤點 | missing | P1 |
| solution-smart-city-cover | 總覽 | 智慧城市解決方案代表畫面 | 4:3 | 1600×1200 | 待盤點 | temporary | P1 |
| military-hero | 軍事 | 小部隊 XR 訓練 | 16:9 桌機 / 4:5 手機 | 2560×1440 / 1440×1800 | 待盤點 | temporary | P0 |
| military-sut-training | 軍事 | SUT 小部隊戰術訓練 | 4:3 | 1600×1200 | 待盤點 | temporary | P1 |
| military-uav-training | 軍事 | 無人機戰術訓練 | 4:3 | 1600×1200 | 待盤點 | temporary | P2 |
| military-weapons-training | 軍事 | 個人武器操作模擬 | 4:3 | 1600×1200 | 待盤點 | temporary | P2 |
| military-driving-training | 軍事 | 軍用載具駕駛模擬 | 4:3 | 1600×1200 | 待盤點 | temporary | P2 |
| military-command-training | 軍事 | 兵棋推演與指揮決策 | 4:3 | 1600×1200 | 待盤點 | temporary | P2 |
| police-hero | 警勤 | 警勤情境訓練 | 16:9 桌機 / 4:5 手機 | 2560×1440 / 1440×1800 | 待盤點 | temporary | P0 |
| police-scenario-training | 警勤 | 警勤情境訓練畫面 | 4:3 | 1600×1200 | 待盤點 | temporary | P1 |
| police-shooting-training | 警勤 | 射擊與情境判斷訓練 | 4:3 | 1600×1200 | 待盤點 | temporary | P2 |
| police-team-training | 警勤 | 多人戰術協同訓練 | 4:3 | 1600×1200 | 待盤點 | temporary | P2 |
| police-instructor-view | 警勤 | 教官端情境控制畫面 | 4:3 | 1600×1200 | 待盤點 | temporary | P2 |
| fire-hero | 消防 | XR 消防應變訓練 | 16:9 桌機 / 4:5 手機 | 2560×1440 / 1440×1800 | 待盤點 | missing | P0 |
| fire-extinguisher-training | 消防 | 滅火器操作訓練 | 4:3 | 1600×1200 | 待盤點 | missing | P1 |
| fire-scenario-training | 消防 | 火場情境辨識訓練 | 4:3 | 1600×1200 | 待盤點 | missing | P1 |
| fire-response-training | 消防 | 災害應變流程訓練 | 4:3 | 1600×1200 | 待盤點 | missing | P2 |
| fire-safety-education | 消防 | 防災教育畫面 | 4:3 | 1600×1200 | 待盤點 | missing | P2 |
| smart-city-hero | 智慧城市 | 智慧交通或防災應用 | 16:9 桌機 / 4:5 手機 | 2560×1440 / 1440×1800 | 待盤點 | temporary | P0 |
| smart-city-transportation | 智慧城市 | 智慧交通操作訓練 | 4:3 | 1600×1200 | 待盤點 | temporary | P1 |
| smart-city-disaster-prevention | 智慧城市 | 防災應變模擬 | 4:3 | 1600×1200 | 待盤點 | temporary | P1 |
| smart-city-occupational-safety | 智慧城市 | 職業安全訓練 | 4:3 | 1600×1200 | 待盤點 | temporary | P2 |
| smart-city-xr-application | 智慧城市 | XR 教育與訓練應用 | 4:3 | 1600×1200 | 待盤點 | temporary | P2 |

**本批統計**：P0 5 張、P1 8 張、P2 13 張，共 26 張（另加總覽頁 4 張代表畫面，實際檔案共 30 張）。
消防領域因舊官網無對應頁面，5 張圖片狀態皆為 `missing`（非 `temporary`），需要全新拍攝或授權素材。

## 圖片內容要求（依任務指示）

**軍事**：需可見實際軍事訓練、Big x Reality 系統、VR/XR 訓練設備、戰術動作或操作流程。
不可使用：遊戲角色、虛構槍戰素材、未授權軍徽、一般圖庫的外國 VR 玩家。

**警勤／消防／智慧城市**：比照軍事的真實性原則，避免遊戲化或圖庫感素材，需能辨識為
Big x Reality 實際系統或真實訓練場域。

## 資料夾與說明文件

`public/images/solutions/{overview,military,police,fire-rescue,smart-city,shared}/`，
每個資料夾附 `README.md`（用途、比例、命名規則、可否直接替換同名圖片）。`shared/` 目前為空，
以 `.gitkeep` 保留於 Git。
