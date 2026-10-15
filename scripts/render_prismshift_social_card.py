#!/usr/bin/env python3
"""Lay out a social preview from actual game art/capture; no generated game pixels."""
import argparse
import hashlib
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--capture', type=Path, required=True)
parser.add_argument('--assets', type=Path, required=True)
parser.add_argument('--output', type=Path, required=True)
args = parser.parse_args()
canvas = Image.new('RGB', (1200, 630), '#09071d')
draw = ImageDraw.Draw(canvas)
font = lambda size, name='SpaceGrotesk-SemiBold.ttf': ImageFont.truetype(str(args.assets / name), size)
prism = Image.open(args.assets / 'prism.png').convert('RGBA')
prism.thumbnail((110, 140), Image.Resampling.LANCZOS)
canvas.paste(prism, (48 + (110 - prism.width) // 2, 35), prism)
draw.text((180, 72), 'A RHYTHM PUZZLE', font=font(18), fill='#80daff', anchor='lt')
draw.text((180, 101), 'IPHONE + APPLE TV', font=font(18), fill='#cad2e8', anchor='lt')
heading = font(68, 'Unbounded-Bold.ttf')
for y, text in [(215, 'PRISM'), (302, 'SHIFT')]:
    assert draw.textbbox((0, 0), text, font=heading)[2] < 410
    draw.text((48, y), text, font=heading, fill='#f2f5ff', anchor='lt')
draw.text((48, 418), 'Build the light.', font=font(25), fill='#f2f5ff', anchor='lt')
draw.text((48, 454), 'Break the darkness.', font=font(25), fill='#80daff', anchor='lt')
with Image.open(args.capture) as raw:
    assert raw.size == (3840, 2160), 'Use a native widescreen gameplay capture.'
    screenshot = raw.convert('RGB').resize((664, 374), Image.Resampling.LANCZOS)
draw.rectangle((486, 160, 1157, 541), fill='#34456d')
canvas.paste(screenshot, (490, 164))
draw.text((490, 130), 'ACTUAL DEVELOPMENT GAMEPLAY', font=font(15), fill='#a6b6cf', anchor='lt')
draw.line((48, 562, 1154, 562), fill='#263353', width=1)
draw.text((48, 586), 'NONCOMMERCIAL HOMEBREW  /  IN DEVELOPMENT',
          font=font(17, 'SpaceGrotesk-Regular.ttf'), fill='#a6b6cf', anchor='lt')
args.output.parent.mkdir(parents=True, exist_ok=True)
canvas.save(args.output)
print(json.dumps({'output': str(args.output), 'dimensions': list(canvas.size),
    'captureSHA256': hashlib.sha256(args.capture.read_bytes()).hexdigest(),
    'imageSHA256': hashlib.sha256(args.output.read_bytes()).hexdigest(),
    'edits': 'Document layout, uniform scaling and outside labels; actual game pixels unretouched.'}, indent=2))
