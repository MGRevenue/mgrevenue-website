#!/usr/bin/env bash
# Builds the web-ready image and video set from the credited originals in assets/.
# One treatment for every picture: warm monochrome mapped from near-black to warm ink.
set -euo pipefail
cd "$(dirname "$0")/.."
out=assets/img
mkdir -p "$out"

treat=(-colorspace Gray -sigmoidal-contrast 3,50% +level-colors '#0b0a08,#f4efe4')
jpg=(-strip -interlace Plane -sampling-factor 4:2:0 -quality 80)

# National Library, full-bleed band (21:9)
magick assets/prishtina-public-library.jpg -gravity north -crop 1920x823+0+120 +repage "${treat[@]}" "${jpg[@]}" "$out/library-1920.jpg"
magick "$out/library-1920.jpg" -resize 1100x "${jpg[@]}" "$out/library-1100.jpg"

# Mother Teresa Boulevard, 3:2 landscape
magick assets/mother-teresa-boulevard-10th-anniversary.jpg -gravity center -crop 1914x1276+0+0 +repage -resize 1200x800 "${treat[@]}" "${jpg[@]}" "$out/boulevard-1200.jpg"

# Dardania from above, square
magick assets/dardania-neighbhorhood-prishtina.jpg -gravity center -crop 1080x1080+0+0 +repage -resize 560x560 "${treat[@]}" "${jpg[@]}" "$out/dardania-560.jpg"

# Newborn monument at night, square
magick assets/newborn-monument-in-pristina-2025-repainting-by.jpg -gravity west -crop 1221x1221+0+0 +repage -resize 640x640 "${treat[@]}" "${jpg[@]}" "$out/newborn-640.jpg"

# Hero slot loop: 8 s over the library domes, cropped 5:2, same treatment, no audio
vf="crop=1280:512:0:104,scale=720:288,format=gray,curves=all='0/0.04 0.5/0.52 1/0.95',colorchannelmixer=rr=1.0:gg=0.975:bb=0.92,format=yuv420p"
ffmpeg -v error -y -ss 42 -t 8 -i .taste-skill/src/library-drone.webm -an -vf "$vf" -c:v libvpx-vp9 -b:v 0 -crf 38 -row-mt 1 "$out/domes.webm"
ffmpeg -v error -y -ss 42 -t 8 -i .taste-skill/src/library-drone.webm -an -vf "$vf" -c:v libx264 -profile:v main -crf 27 -preset slow -movflags +faststart "$out/domes.mp4"
ffmpeg -v error -y -ss 42 -i .taste-skill/src/library-drone.webm -frames:v 1 -vf "$vf" -q:v 4 "$out/domes-poster.jpg"

ls -la "$out"
