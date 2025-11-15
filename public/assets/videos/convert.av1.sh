#!/bin/bash

# Browse all .webm files that do not contain ".light"
for file in *.webm; do
    if [[ "$file" != *.light.webm ]]; then
        base="${file%.webm}"
        ffmpeg -i "$file" -vf "scale=-2:720,fps=30" -c:v libaom-av1 -b:v 0 -crf 30 -c:a libopus "${base}.light.av1.webm" -y # -y for overwrite without prompt
        echo "Converting : $file -> ${base}.light.av1.webm"
    fi
done
echo "Conversion done."