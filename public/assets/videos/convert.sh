#!/bin/bash

# Parcours de tous les fichiers .webm qui ne contiennent pas ".light"
for file in *.webm; do
    if [[ "$file" != *.light.webm ]]; then
        base="${file%.webm}"
        ffmpeg -i "$file" -vf "scale=-2:720,fps=30" -c:v libvpx-vp9 -b:v 0 -crf 30 -c:a libopus "${base}.light.webm"
        echo "Converti : $file -> ${base}.light.webm"
    fi
done
echo "Conversion terminée."