"""Build the site's YL monogram as SVG, ICO, and an Apple touch icon."""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
BACKGROUND = "#fffcf2"
INK = "#92400e"
GLYPHS = [
    [(6, 15), (14, 15), (22, 28), (30, 15), (38, 15), (26, 35), (26, 49), (18, 49), (18, 35)],
    [(40, 15), (48, 15), (48, 41), (59, 41), (59, 49), (40, 49)],
]
# Optical centering: move the monogram left while keeping the background fixed.
GLYPHS = [[(x - 2, y) for x, y in glyph] for glyph in GLYPHS]

svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n'
svg += f'  <rect width="64" height="64" rx="12" fill="{BACKGROUND}"/>\n'
for glyph in GLYPHS:
    points = " ".join(f"{x},{y}" for x, y in glyph)
    svg += f'  <polygon points="{points}" fill="{INK}"/>\n'
svg += '</svg>\n'
(ROOT / "favicon.svg").write_text(svg, encoding="utf-8")

scale = 16
image = Image.new("RGBA", (64 * scale, 64 * scale))
draw = ImageDraw.Draw(image)
draw.rounded_rectangle((0, 0, 64 * scale - 1, 64 * scale - 1), radius=12 * scale, fill=BACKGROUND)
for glyph in GLYPHS:
    draw.polygon([(x * scale, y * scale) for x, y in glyph], fill=INK)
image.save(ROOT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
# Home-screen icons use an opaque square; the operating system supplies its mask.
touch = Image.new("RGBA", image.size, BACKGROUND)
touch.alpha_composite(image)
touch.convert("RGB").resize((180, 180), Image.Resampling.LANCZOS).save(ROOT / "apple-touch-icon.png")
