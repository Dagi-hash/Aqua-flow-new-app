import os, math
from PIL import Image, ImageDraw, ImageFilter

# Draws the AquaFlow glass-of-water icon into www/icons/ (run before `npx cap add android`).
OUT = 'www/icons/'
os.makedirs(OUT, exist_ok=True)
S = 1024                                   # drawn big, then scaled down

def lerp(a, b, t): return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def draw(scale_content, rounded):
    img = Image.new('RGB', (S, S), (9, 13, 22))
    px = ImageDraw.Draw(img)
    for y in range(S):                      # deep navy gradient
        px.line([(0, y), (S, y)], fill=lerp((14, 24, 44), (6, 9, 16), y / S))
    layer = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    c = S / 2
    k = scale_content
    top_w, bot_w, h = 470 * k, 350 * k, 600 * k
    y0 = c - h / 2 + 10 * k
    y1 = y0 + h
    poly = [(c - top_w/2, y0), (c + top_w/2, y0), (c + bot_w/2, y1), (c - bot_w/2, y1)]
    # water (clip to glass)
    wy = y0 + h * 0.36
    mask = Image.new('L', (S, S), 0)
    md = ImageDraw.Draw(mask)
    md.polygon(poly, fill=255)
    top_cut = Image.new('L', (S, S), 255)
    ImageDraw.Draw(top_cut).polygon([(0, 0), (S, 0)] + [(x, wy + math.sin((x - c) / (95 * k) * math.pi) * 16 * k) for x in range(S, -1, -4)], fill=0)
    water = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    wd = ImageDraw.Draw(water)
    for y in range(int(y0), int(y1) + 1):
        t = max(0.0, (y - wy) / (y1 - wy))
        wd.line([(0, y), (S, y)], fill=lerp((0, 242, 254), (0, 122, 173), t) + (255,))
    full = Image.composite(water, Image.new('RGBA', (S, S), (0, 0, 0, 0)), Image.composite(mask, Image.new('L', (S, S), 0), top_cut))
    layer = Image.alpha_composite(layer, full)
    d = ImageDraw.Draw(layer)
    # glass body tint + outline + highlight
    tint = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(tint).polygon(poly, fill=(255, 255, 255, 22))
    layer = Image.alpha_composite(layer, tint)
    d = ImageDraw.Draw(layer)
    d.line(poly + [poly[0]], fill=(200, 245, 255, 255), width=int(22 * k), joint='curve')
    for p in poly: d.ellipse([p[0]-11*k, p[1]-11*k, p[0]+11*k, p[1]+11*k], fill=(200, 245, 255, 255))
    d.line([(c - top_w/2 + 55*k, y0 + 70*k), (c - bot_w/2 + 55*k, y1 - 90*k)], fill=(190, 235, 250, 255), width=int(14 * k))
    # bubbles
    for bx, by, br in [(c - 40*k, wy + 150*k, 18*k), (c + 50*k, wy + 90*k, 12*k), (c + 10*k, wy + 230*k, 9*k)]:
        d.ellipse([bx-br, by-br, bx+br, by+br], outline=(255, 255, 255, 200), width=int(5*k))
    img = img.convert('RGBA')
    img = Image.alpha_composite(img, layer).convert('RGB')
    if rounded:
        m = Image.new('L', (S, S), 0)
        ImageDraw.Draw(m).rounded_rectangle([0, 0, S-1, S-1], radius=int(S * 0.22), fill=255)
        bg = Image.new('RGB', (S, S), (9, 13, 22))
        img = Image.composite(img, bg, m)
    return img

full = draw(1.0, True)
safe = draw(0.74, False)                   # maskable: content stays inside the 80% safe zone
full.resize((512, 512), Image.LANCZOS).save(OUT + 'icon-512.png')
full.resize((192, 192), Image.LANCZOS).save(OUT + 'icon-192.png')
full.resize((180, 180), Image.LANCZOS).save(OUT + 'apple-touch-icon.png')
full.resize((32, 32), Image.LANCZOS).save(OUT + 'favicon-32.png')
safe.resize((512, 512), Image.LANCZOS).save(OUT + 'maskable-512.png')
print('icons.py: done')
