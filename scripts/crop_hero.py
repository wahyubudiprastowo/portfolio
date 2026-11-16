"""Crop the GTA-style portrait into a hero-optimized image (popolab-style hero visual).

- gta-hero.webp : tight crop around the two characters (portrait, overlaps the mega text)
- gta-hero-faces.webp : tighter faces crop (used as OG / small character card)
Prints final dimensions so the component can use exact width/height.
"""
from PIL import Image

SRC = "/home/z/my-project/public/gta-portrait.webp"
img = Image.open(SRC).convert("RGB")
W, H = img.size
print("source:", W, "x", H)

# Main hero crop: keep both characters, trim door edge on the left and sky on top.
hero = img.crop((70, 258, W, H))
hero.save("/home/z/my-project/public/gta-hero.webp", "WEBP", quality=88, method=6)
print("gta-hero.webp:", hero.size)

# Faces crop (square-ish) for the OG / character sticker.
faces = img.crop((150, 300, 800, 950))
faces.save("/home/z/my-project/public/gta-hero-faces.webp", "WEBP", quality=86, method=6)
print("gta-hero-faces.webp:", faces.size)
