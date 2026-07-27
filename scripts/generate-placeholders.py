"""
One-off script to generate clearly-labeled temporary placeholder images.
Not a build step — run manually, then delete or leave in scripts/.
These are NOT stock photos or AI-generated images; they are plain labeled
color fields standing in for real photography until it is supplied.
"""
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "images", "home")

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
    ("hero/home-hero-desktop.jpg", 1920, 1080, "HERO · DESKTOP 16:9", "Big x Reality XR 模擬訓練情境（待替換：官網代表性訓練照片）"),
    ("hero/home-hero-mobile.jpg", 960, 1200, "HERO · MOBILE 4:5", "同上，手機版直式構圖（待替換）"),
    ("about/home-about-company.jpg", 1200, 900, "ABOUT · COMPANY 4:3", "公司系統整合能力示意（待替換）"),
    ("about/home-about-training.jpg", 1200, 900, "ABOUT · TRAINING 4:3", "實際訓練場域畫面（待替換，備用）"),
    ("xr-training/home-xr-reality.jpg", 1200, 900, "XR TRAINING · REALITY 4:3", "真實訓練場景（待替換）"),
    ("xr-training/home-xr-virtual.jpg", 1200, 900, "XR TRAINING · VIRTUAL 4:3", "XR 虛擬訓練畫面（待替換）"),
    ("xr-training/home-xr-data.jpg", 1200, 900, "XR TRAINING · DATA 4:3", "教官／訓練數據畫面（待替換）"),
    ("solutions/home-solution-military.jpg", 1200, 900, "SOLUTION · MILITARY 4:3", "軍事模擬訓練實景（待替換）"),
    ("solutions/home-solution-police.jpg", 1200, 900, "SOLUTION · POLICE 4:3", "警勤模擬訓練實景（待替換）"),
    ("solutions/home-solution-fire.jpg", 1200, 900, "SOLUTION · FIRE 4:3", "消防防救災訓練實景（待替換）"),
    ("solutions/home-solution-smart-city.jpg", 1200, 900, "SOLUTION · SMART CITY 4:3", "智慧城市指揮中心示意（待替換）"),
    ("packages/home-package-sut.jpg", 1200, 900, "PACKAGE · SUT 4:3", "SUT 小部隊戰術訓練系統（待替換，首頁目前未渲染此區塊）"),
    ("packages/home-package-police-box.jpg", 1200, 900, "PACKAGE · POLICE BOX 4:3", "POLICE BOX 攜帶式警勤訓練器（待替換）"),
    ("packages/home-package-ai-military.jpg", 1200, 900, "PACKAGE · AI MILITARY 4:3", "軍事訓練套裝方案（待替換）"),
    ("packages/home-package-uav.jpg", 1200, 900, "PACKAGE · UAV 4:3", "無人機戰術訓練模組（待替換）"),
    ("cases/home-case-01.jpg", 1200, 900, "CASE 01 · AIRPORT 4:3", "機場空側駕駛模擬訓練導入（待替換）"),
    ("cases/home-case-02.jpg", 1200, 900, "CASE 02 · POLICE 4:3", "警察局勤務情境訓練中心（待替換）"),
    ("cases/home-case-03.jpg", 1200, 900, "CASE 03 · FIRE 4:3", "火災搶救指揮模擬系統（待替換）"),
    ("news/home-news-default.jpg", 1200, 900, "NEWS · DEFAULT 4:3", "新聞預設圖，無縮圖時使用（待替換）"),
    ("cta/home-contact-cta.jpg", 1920, 900, "CTA · CONTACT 16:9", "訓練照片＋深色遮罩＋XR Grid 背景（待替換）"),
]

for rel_path, w, h, label, subtitle in images:
    make_image(os.path.join(ROOT, rel_path), w, h, label, subtitle)
