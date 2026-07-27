"""One-off script to generate labeled temporary placeholder images for the
Solutions section. Same approach as generate-placeholders.py — not stock
photos, not AI-generated, plain labeled color fields."""
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "images", "solutions")

BG = (20, 24, 33)
STRIPE = (25, 31, 42)
TEXT_MAIN = (139, 147, 161)
TEXT_SUB = (86, 93, 104)
BRAND = (208, 39, 83)


def make_image(path, width, height, label, subtitle):
    img = Image.new("RGB", (width, height), BG)
    draw = ImageDraw.Draw(img)

    stripe_w = max(10, width // 40)
    for x in range(-height, width, stripe_w * 2):
        draw.line([(x, height), (x + height, 0)], fill=STRIPE, width=stripe_w)

    try:
        font_label = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", max(14, width // 32)
        )
        font_sub = ImageFont.truetype(
            "/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc", max(11, width // 48)
        )
    except OSError:
        font_label = ImageFont.load_default()
        font_sub = ImageFont.load_default()

    pad = max(16, width // 30)
    band_h = int(height * 0.26)
    draw.rectangle([0, height - band_h, width, height], fill=(10, 10, 10))
    draw.rectangle([0, 0, width, 6], fill=BRAND)

    line_h = int(band_h // 3.2)
    draw.text((pad, height - band_h + pad // 2), "PLACEHOLDER · TEMPORARY", font=font_label, fill=BRAND)
    draw.text((pad, height - band_h + pad // 2 + line_h), label, font=font_sub, fill=TEXT_MAIN)
    draw.text((pad, height - band_h + pad // 2 + line_h * 2), subtitle, font=font_sub, fill=TEXT_SUB)

    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path, "JPEG", quality=72, optimize=True)
    print(f"wrote {path} ({os.path.getsize(path)//1024} KB)")


images = [
    ("overview/solutions-hero-desktop.jpg", 1920, 1080, "SOLUTIONS · HERO 16:9", "解決方案總覽 Hero（待替換）"),
    ("overview/solutions-hero-mobile.jpg", 960, 1200, "SOLUTIONS · HERO 4:5", "解決方案總覽 Hero 手機版（待替換）"),
    ("overview/solution-military-cover.jpg", 1600, 1200, "01 MILITARY 4:3", "軍事解決方案代表畫面（待替換）"),
    ("overview/solution-police-cover.jpg", 1600, 1200, "02 POLICE 4:3", "警勤解決方案代表畫面（待替換）"),
    ("overview/solution-fire-rescue-cover.jpg", 1600, 1200, "03 FIRE & RESCUE 4:3", "消防解決方案代表畫面（待替換）"),
    ("overview/solution-smart-city-cover.jpg", 1600, 1200, "04 SMART CITY 4:3", "智慧城市解決方案代表畫面（待替換）"),

    ("military/military-hero-desktop.jpg", 1920, 1080, "MILITARY · HERO 16:9", "軍事模擬訓練 Hero（待替換）"),
    ("military/military-hero-mobile.jpg", 960, 1200, "MILITARY · HERO 4:5", "軍事模擬訓練 Hero 手機版（待替換）"),
    ("military/military-sut-training.jpg", 1200, 900, "MILITARY · SUT 4:3", "SUT 小部隊戰術訓練（待替換）"),
    ("military/military-uav-training.jpg", 1200, 900, "MILITARY · UAV 4:3", "無人機戰術訓練（待替換）"),
    ("military/military-weapons-training.jpg", 1200, 900, "MILITARY · WEAPONS 4:3", "個人武器操作模擬（待替換）"),
    ("military/military-driving-training.jpg", 1200, 900, "MILITARY · DRIVING 4:3", "軍用載具駕駛模擬（待替換）"),
    ("military/military-command-training.jpg", 1200, 900, "MILITARY · COMMAND 4:3", "兵棋推演與指揮決策（待替換）"),

    ("police/police-hero-desktop.jpg", 1920, 1080, "POLICE · HERO 16:9", "警勤模擬訓練 Hero（待替換）"),
    ("police/police-hero-mobile.jpg", 960, 1200, "POLICE · HERO 4:5", "警勤模擬訓練 Hero 手機版（待替換）"),
    ("police/police-scenario-training.jpg", 1200, 900, "POLICE · SCENARIO 4:3", "警勤情境訓練（待替換）"),
    ("police/police-shooting-training.jpg", 1200, 900, "POLICE · SHOOTING 4:3", "射擊與情境判斷訓練（待替換）"),
    ("police/police-team-training.jpg", 1200, 900, "POLICE · TEAM 4:3", "多人戰術協同訓練（待替換）"),
    ("police/police-instructor-view.jpg", 1200, 900, "POLICE · INSTRUCTOR 4:3", "教官端情境控制畫面（待替換）"),

    ("fire-rescue/fire-rescue-hero-desktop.jpg", 1920, 1080, "FIRE & RESCUE · HERO 16:9", "消防模擬訓練 Hero（待替換）"),
    ("fire-rescue/fire-rescue-hero-mobile.jpg", 960, 1200, "FIRE & RESCUE · HERO 4:5", "消防模擬訓練 Hero 手機版（待替換）"),
    ("fire-rescue/fire-extinguisher-training.jpg", 1200, 900, "FIRE · EXTINGUISHER 4:3", "滅火器操作訓練（待替換）"),
    ("fire-rescue/fire-scenario-training.jpg", 1200, 900, "FIRE · SCENARIO 4:3", "火場情境辨識訓練（待替換）"),
    ("fire-rescue/fire-response-training.jpg", 1200, 900, "FIRE · RESPONSE 4:3", "災害應變流程訓練（待替換）"),
    ("fire-rescue/fire-safety-education.jpg", 1200, 900, "FIRE · SAFETY EDU 4:3", "防災教育（待替換）"),

    ("smart-city/smart-city-hero-desktop.jpg", 1920, 1080, "SMART CITY · HERO 16:9", "智慧城市 Hero（待替換）"),
    ("smart-city/smart-city-hero-mobile.jpg", 960, 1200, "SMART CITY · HERO 4:5", "智慧城市 Hero 手機版（待替換）"),
    ("smart-city/smart-city-transportation.jpg", 1200, 900, "SMART CITY · TRANSPORT 4:3", "智慧交通操作訓練（待替換）"),
    ("smart-city/smart-city-disaster-prevention.jpg", 1200, 900, "SMART CITY · DISASTER 4:3", "防災應變模擬（待替換）"),
    ("smart-city/smart-city-occupational-safety.jpg", 1200, 900, "SMART CITY · SAFETY 4:3", "職業安全訓練（待替換）"),
    ("smart-city/smart-city-xr-application.jpg", 1200, 900, "SMART CITY · XR 4:3", "XR 教育與訓練應用（待替換）"),
]

for rel_path, w, h, label, subtitle in images:
    make_image(os.path.join(ROOT, rel_path), w, h, label, subtitle)
