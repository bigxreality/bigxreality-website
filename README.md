# Big x Reality — 官網

Next.js (App Router) + TypeScript + Tailwind CSS v4。

## 本階段範圍

僅完成繁中首頁 `/tw/home`。其他頁面、路由與 CMS 架構尚未建置，導覽與頁尾中的其他連結
（`/tw/solutions`、`/tw/products` 等）目前為佔位路徑，尚未有對應頁面。

## 開發

```bash
npm install
npm run dev
```

啟動後開啟 <http://localhost:3000/tw/home>（根路徑 `/` 會自動導向此頁）。

```bash
npm run build   # 正式建置
npm run lint    # ESLint
```

## 專案結構

- `app/tw/home/page.tsx` — 首頁路由，含 metadata／SEO 設定
- `components/home/` — 首頁各區塊元件（Header、Hero、About、WhyXr、Solutions、Packages、CaseStudies、News、TrustedBy、ContactCta、Footer）
- `components/ui/` — 共用元件（Button、Tag、Card、PlaceholderImage、Reveal）
- `lib/data/homepage-content.ts` — 首頁文案資料（來源與修改紀錄見 `docs/homepage-copy-changes.md`）
- `lib/data/homepage-media.ts` — 首頁圖片資料表（資料驅動，desktop/mobile 分離，見 `docs/homepage-image-requirements.md`）
- `docs/homepage-copy-changes.md` — 文案沿用／修改紀錄
- `docs/homepage-image-requirements.md` — 圖片需求清單與後製規格

## 設計系統

色彩、字級、間距與 RWD 斷點對應 `Design_system_decisions_finalized.pdf`，實作於 `app/globals.css`
的 Tailwind v4 `@theme`。中文/內文字體為 Noto Sans TC，品牌與系統標籤（英文品牌字、eyebrow、型號、
數字、tracking label）使用 PT Mono，皆透過 `next/font/google` 自我託管。
