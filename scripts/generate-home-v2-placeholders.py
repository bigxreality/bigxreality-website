"""
One-off script to generate clearly-labeled temporary placeholder images for
the zh-tw homepage rebuild (see chat task "依照指定內容重製 Big x Reality
中文首頁"). Not a build step — run manually.
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


def make_image(path, width, height, label, subtitle, fmt="WEBP"):
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
            "/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc", max(11, width // 55)
        )
    except OSError:
        font_label = ImageFont.load_default()
        font_sub = ImageFont.load_default()

    pad = max(16, width // 30)
    band_h = int(height * 0.30)
    draw.rectangle([0, height - band_h, width, height], fill=(10, 10, 10))
    draw.rectangle([0, 0, width, 6], fill=BRAND)

    line_h = int(band_h // 3.4)
    draw.text((pad, height - band_h + pad // 2), "PLACEHOLDER · TEMPORARY", font=font_label, fill=BRAND)
    draw.text((pad, height - band_h + pad // 2 + line_h), label, font=font_sub, fill=TEXT_MAIN)

    # Wrap subtitle across up to 2 lines so the content requirement is legible.
    max_chars = max(20, (width - pad * 2) // (font_sub.size // 2))
    words = subtitle
    lines = []
    while words:
        lines.append(words[:max_chars])
        words = words[max_chars:]
        if len(lines) == 2:
            if words:
                lines[-1] = lines[-1][: max_chars - 1] + "…"
            break
    for i, line in enumerate(lines):
        draw.text(
            (pad, height - band_h + pad // 2 + line_h * (2 + i) - (line_h // 3) * i),
            line,
            font=font_sub,
            fill=TEXT_SUB,
        )

    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path, fmt, quality=78, method=6)
    print(f"wrote {path} ({os.path.getsize(path)//1024} KB)")


images = [
    ("hero/home-hero-xr-simulation-training.webp", 2560, 1440,
     "HERO · XR SIMULATION TRAINING 16:9",
     "待替換：多人配戴VR/XR頭戴裝置、手持模擬武器訓練的橫式照片"),
    ("about/home-xr-training-overview.webp", 1600, 1200,
     "BRAND · XR TRAINING OVERVIEW 4:3",
     "待替換：單人配戴XR頭戴裝置／戰術背心操作訓練設備的形象照"),
    ("xr-training/home-training-challenges-background.webp", 1920, 1080,
     "TRAINING CHALLENGES · BACKGROUND 16:9",
     "待替換：深色訓練場景／射擊場或模擬場域局部／具空間深度的低彩度照片"),
    ("xr-training/home-multi-user-xr-training.webp", 1920, 1080,
     "WHY XR · MULTI-USER TRAINING 16:9",
     "待替換：三至四人共同進行XR訓練，或教官在旁監看訓練狀況的照片"),
    ("capabilities/home-instructor-system-capabilities.webp", 1600, 1067,
     "CORE CAPABILITIES · INSTRUCTOR SYSTEM 3:2",
     "待替換：教官站在大型螢幕、兵棋圖台或控制平台前，與多人共同觀看訓練資訊"),
    ("products/home-product-sut.webp", 1200, 900, "PRODUCT · SUT 4:3", "SUT 小部隊戰術訓練系統（待替換）"),
    ("products/home-product-police-box.webp", 1200, 900, "PRODUCT · POLICE BOX 4:3", "POLICE BOX 可攜式警勤訓練系統（待替換）"),
    ("products/home-product-full-scale-police.webp", 1200, 900, "PRODUCT · FULL-SCALE POLICE 4:3", "全配式警勤訓練系統（待替換）"),
    ("products/home-product-wargaming-table.webp", 1200, 900, "PRODUCT · WARGAMING TABLE 4:3", "兵棋圖台系統（待替換）"),
    ("products/home-product-mortar-observation.webp", 1200, 900, "PRODUCT · MORTAR OBSERVATION 4:3", "迫擊砲觀測模擬系統（待替換）"),
    ("products/home-product-sniper.webp", 1200, 900, "PRODUCT · SNIPER 4:3", "狙擊模擬系統（待替換）"),
    ("products/home-product-machine-gun.webp", 1200, 900, "PRODUCT · MACHINE GUN 4:3", "機槍模擬系統（待替換）"),
    ("products/home-product-hmmwv.webp", 1200, 900, "PRODUCT · HMMWV 4:3", "悍馬車載具訓練系統（待替換）"),
    ("products/home-product-tactical-boat.webp", 1200, 900, "PRODUCT · TACTICAL BOAT 4:3", "快艇載具訓練系統（待替換）"),
    ("proof/home-real-world-deployment.webp", 1920, 1080,
     "PROOF · REAL-WORLD DEPLOYMENT 16:9",
     "待替換：實際展示、軍警參觀或大型訓練活動照片（非棚拍）"),
    ("cta/home-final-cta-training.webp", 1920, 820,
     "FINAL CTA · TRAINING 21:9",
     "待替換：多人訓練剪影／XR訓練空間／深藍黑背景搭配紅色品牌光線"),
    ("news-brand-award.webp", 1200, 675, "NEWS · BRAND AWARD 16:9", "Big x Reality 榮獲國家品牌玉山獎（待替換）"),
    ("news-smart-city-trend.webp", 1200, 675, "NEWS · SMART CITY TREND 16:9", "智慧城市應變指揮系統趨勢觀察（待替換）"),
    ("news-xr-decision.webp", 1200, 675, "NEWS · XR DECISION MAKING 16:9", "XR 模擬訓練如何提升決策成效（待替換）"),
]

for rel_path, w, h, label, subtitle in images:
    make_image(os.path.join(ROOT, rel_path), w, h, label, subtitle)

# Re-encode the 4 existing solution placeholders as .webp under the exact
# filenames this round's spec asks for, instead of duplicating a second
# image-generation pipeline. Same placeholder graphic, new extension.
solution_reencodes = [
    ("solutions/home-solution-military.jpg", "solutions/home-solution-military.webp"),
    ("solutions/home-solution-police.jpg", "solutions/home-solution-police.webp"),
    ("solutions/home-solution-fire.jpg", "solutions/home-solution-fire.webp"),
    ("solutions/home-solution-smart-city.jpg", "solutions/home-solution-smart-city.webp"),
]
for src_rel, dst_rel in solution_reencodes:
    src = os.path.join(ROOT, src_rel)
    dst = os.path.join(ROOT, dst_rel)
    with Image.open(src) as im:
        im.save(dst, "WEBP", quality=78, method=6)
    print(f"re-encoded {src_rel} -> {dst_rel} ({os.path.getsize(dst)//1024} KB)")
