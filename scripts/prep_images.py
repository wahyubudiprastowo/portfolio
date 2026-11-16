#!/usr/bin/env python3
"""Prepare GTA-style hero images for the portfolio.

Input : upload/pasted_image_1794805024173.png (1086x1448, GTA VI style art)
Output: public/gta-portrait.webp  (full art, 800px wide, for the polaroid)
        public/gta-faces.webp     (square face crop, for the sticker card)
"""
from PIL import Image
import os

SRC = "/home/z/my-project/upload/pasted_image_1794805024173.png"
OUT_DIR = "/home/z/my-project/public"

im = Image.open(SRC).convert("RGB")
W, H = im.size  # 1086 x 1448

# ---- 1. Full portrait, resized to 800 wide ----
full = im.resize((800, round(H * 800 / W)), Image.LANCZOS)
full.save(os.path.join(OUT_DIR, "gta-portrait.webp"), "WEBP", quality=82, method=6)

# ---- 2. Square face crop (both faces + shoulders) ----
# Faces (original 1086x1448): woman eyes ~ (430, 545) ; man face ~ (690, 490)
cx0, cy0, cx1, cy1 = 280, 350, 840, 910  # 560x560 square around both faces
crop = im.crop((cx0, cy0, cx1, cy1))
crop = crop.resize((640, 640), Image.LANCZOS)
crop.save(os.path.join(OUT_DIR, "gta-faces.webp"), "WEBP", quality=82, method=6)

for f in ["gta-portrait.webp", "gta-faces.webp"]:
    p = os.path.join(OUT_DIR, f)
    print(f, os.path.getsize(p) // 1024, "KB")

# small preview strip for visual check
prev = Image.new("RGB", (800 + 320 + 30, max(1064, 640)), (20, 20, 22))
prev.paste(full, (0, 0))
prev.paste(crop, (830, 0))
prev.save("/tmp/gta_preview.jpg", "JPEG", quality=70)
print("preview saved")
