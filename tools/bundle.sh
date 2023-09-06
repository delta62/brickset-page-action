#!/usr/bin/env bash

EXTENSION="link-to-brickset"
OUT_DIR="dist"
VERSION=$(jq --raw-output .version manifest.json)
ARCHIVE_FILE="${EXTENSION}_${VERSION}.xpi"
OUTPUT_FILE="$OUT_DIR/$ARCHIVE_FILE"

if [ ! -d "$OUT_DIR" ]; then
    mkdir "$OUT_DIR"
fi

echo "Bundling $EXTENSION v$VERSION..."
zip "$OUTPUT_FILE" \
    assets/* \
    manifest.json \
    content-script.js \
    background.js

echo "Created $OUTPUT_FILE"
echo "Done!"
