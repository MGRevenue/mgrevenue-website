#!/usr/bin/env bash
# Builds the web-ready image and video set from the credited originals in assets/
# (see assets/credits.json). One colour grade for every picture, so photographs from
# different sources read as one set in one warm light. Originals are stored at 2560px
# wide; the crops below are in those pixels.
set -euo pipefail
cd "$(dirname "$0")/.."
out=assets/img
mkdir -p "$out"

# The grade, built once as a Hald colour lookup table and applied to the stills and the
# headline loop alike. Warm hues (skin, wood, brick) keep 72% of their colour; cool hues
# (blue shirts, green casts) fall toward 18%, so nothing argues with the gold palette.
# Then a gentle S-curve, and black and white mapped to warm black #0b0a08 and cream #f4efe4
# so shadows sink into the page and highlights never go blue-white.
grade=$(mktemp --suffix=.png)
trap 'rm -f "$grade"' EXIT
magick hald:8 \
  -fx 'lum=0.2126*r+0.7152*g+0.0722*b; cool=max(0,min(1,(max(g,b)-r)*4)); sat=0.72-0.54*cool; lum+(u-lum)*sat' \
  -sigmoidal-contrast 3.5,50% +level-colors '#0b0a08,#f4efe4' "$grade"
treat=("$grade" -hald-clut)
jpg=(-strip -interlace Plane -sampling-factor 4:2:0 -quality 80)

# Contact centre, full-bleed band (21:9). Cropped past the whiteboard on the left
# so no handwriting is legible; keeps both headsets and the screen.
magick assets/contact-centre.jpg -crop 2080x891+480+220 +repage -resize 1920x823 "${treat[@]}" "${jpg[@]}" "$out/calls-1920.jpg"
magick "$out/calls-1920.jpg" -resize 1100x "${jpg[@]}" "$out/calls-1100.jpg"

# Small team at a table, 3:2 landscape. Cropped right of the glass reflection.
magick assets/small-team.jpg -crop 1640x1093+920+507 +repage -resize 1200x800 "${treat[@]}" "${jpg[@]}" "$out/team-1200.jpg"

# Working session, hands only, square
magick assets/working-session.jpg -gravity center -crop 1715x1715+0+0 +repage -resize 720x720 "${treat[@]}" "${jpg[@]}" "$out/session-720.jpg"

# At the laptop, square, for the off-white close
magick assets/at-the-laptop.jpg -gravity center -crop 1709x1709+0+0 +repage -resize 640x640 "${treat[@]}" "${jpg[@]}" "$out/laptop-640.jpg"

# Hero slot loop: 8 s of typing hands, cropped 5:2, same grade, no audio.
# Seamless: the last second cross-fades into the first, so the loop has no jump.
src=.taste-skill/src/typing.webm
tone="[0:v]fps=30,crop=1920:768:0:156,scale=720:288,format=rgb24[c];[c][1:v]haldclut,format=yuv420p"
loop="${tone},split=3[h][b][t];[h]trim=0:1,setpts=PTS-STARTPTS[head];[b]trim=1:8,setpts=PTS-STARTPTS[body];[t]trim=8:9,setpts=PTS-STARTPTS[tail];[tail][head]xfade=transition=fade:duration=1:offset=0[seam];[seam][body]concat=n=2:v=1:a=0,format=yuv420p[v]"
ffmpeg -v error -y -ss 3 -t 9 -i "$src" -i "$grade" -an -filter_complex "$loop" -map '[v]' -c:v libvpx-vp9 -b:v 0 -crf 38 -row-mt 1 "$out/typing.webm"
ffmpeg -v error -y -ss 3 -t 9 -i "$src" -i "$grade" -an -filter_complex "$loop" -map '[v]' -c:v libx264 -profile:v main -crf 27 -preset slow -movflags +faststart "$out/typing.mp4"
ffmpeg -v error -y -i "$out/typing.mp4" -frames:v 1 -q:v 4 "$out/typing-poster.jpg"

ls -la "$out"
