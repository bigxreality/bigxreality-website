import type { MediaStatus } from "@/data/homepage-media";

export type MediaEntry = {
  src: string;
  alt: string;
  status: MediaStatus;
  note?: string;
};

function entry(src: string, alt: string, note?: string): MediaEntry {
  return { src, alt, status: "missing", note };
}

export const solutionsMedia = {
  overview: {
    heroDesktop: entry("/images/solutions/overview/solutions-hero-desktop.jpg", "Big x Reality 解決方案總覽"),
    heroMobile: entry("/images/solutions/overview/solutions-hero-mobile.jpg", "Big x Reality 解決方案總覽（手機版）"),
    militaryCover: entry("/images/solutions/overview/solution-military-cover.jpg", "軍事模擬訓練代表畫面"),
    policeCover: entry("/images/solutions/overview/solution-police-cover.jpg", "警勤模擬訓練代表畫面"),
    fireRescueCover: entry("/images/solutions/overview/solution-fire-rescue-cover.jpg", "消防模擬訓練代表畫面"),
    smartCityCover: entry("/images/solutions/overview/solution-smart-city-cover.jpg", "智慧城市應用代表畫面"),
  },
  military: {
    heroDesktop: entry("/images/solutions/military/military-hero-desktop.jpg", "軍事模擬訓練 Hero 主視覺"),
    heroMobile: entry("/images/solutions/military/military-hero-mobile.jpg", "軍事模擬訓練 Hero 主視覺（手機版）"),
    sutTraining: entry("/images/solutions/military/military-sut-training.jpg", "SUT 小部隊戰術訓練畫面"),
    uavTraining: entry("/images/solutions/military/military-uav-training.jpg", "無人機戰術訓練畫面"),
    weaponsTraining: entry("/images/solutions/military/military-weapons-training.jpg", "個人武器操作模擬畫面"),
    drivingTraining: entry("/images/solutions/military/military-driving-training.jpg", "軍用載具駕駛模擬畫面"),
    commandTraining: entry("/images/solutions/military/military-command-training.jpg", "兵棋推演與指揮決策畫面"),
  },
  police: {
    heroDesktop: entry("/images/solutions/police/police-hero-desktop.jpg", "警勤模擬訓練 Hero 主視覺"),
    heroMobile: entry("/images/solutions/police/police-hero-mobile.jpg", "警勤模擬訓練 Hero 主視覺（手機版）"),
    scenarioTraining: entry("/images/solutions/police/police-scenario-training.jpg", "警勤情境訓練畫面"),
    shootingTraining: entry("/images/solutions/police/police-shooting-training.jpg", "基礎射擊與情境判斷射擊畫面"),
    teamTraining: entry("/images/solutions/police/police-team-training.jpg", "多人戰術協同訓練畫面"),
    instructorView: entry("/images/solutions/police/police-instructor-view.jpg", "教官端情境控制畫面"),
  },
  fireRescue: {
    heroDesktop: entry("/images/solutions/fire-rescue/fire-rescue-hero-desktop.jpg", "消防模擬訓練 Hero 主視覺"),
    heroMobile: entry("/images/solutions/fire-rescue/fire-rescue-hero-mobile.jpg", "消防模擬訓練 Hero 主視覺（手機版）"),
    extinguisherTraining: entry("/images/solutions/fire-rescue/fire-extinguisher-training.jpg", "滅火器操作訓練畫面"),
    scenarioTraining: entry("/images/solutions/fire-rescue/fire-scenario-training.jpg", "火場情境辨識訓練畫面"),
    responseTraining: entry("/images/solutions/fire-rescue/fire-response-training.jpg", "災害應變流程訓練畫面"),
    safetyEducation: entry("/images/solutions/fire-rescue/fire-safety-education.jpg", "防災教育畫面"),
  },
  smartCity: {
    heroDesktop: entry("/images/solutions/smart-city/smart-city-hero-desktop.jpg", "智慧城市解決方案 Hero 主視覺"),
    heroMobile: entry("/images/solutions/smart-city/smart-city-hero-mobile.jpg", "智慧城市解決方案 Hero 主視覺（手機版）"),
    transportation: entry("/images/solutions/smart-city/smart-city-transportation.jpg", "智慧交通操作訓練畫面"),
    disasterPrevention: entry("/images/solutions/smart-city/smart-city-disaster-prevention.jpg", "防災應變模擬畫面"),
    occupationalSafety: entry("/images/solutions/smart-city/smart-city-occupational-safety.jpg", "職業安全訓練畫面"),
    xrApplication: entry("/images/solutions/smart-city/smart-city-xr-application.jpg", "XR 教育與訓練應用畫面"),
  },
} as const;
