#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
TEMP_BASE="/tmp/idsw-archive-build"

for TAG in 2024 2025; do
  echo "===== Building archive for tag: $TAG ====="

  BUILD_DIR="$TEMP_BASE/$TAG"
  rm -rf "$BUILD_DIR"
  mkdir -p "$BUILD_DIR"

  # Export the repo at the given tag
  git -C "$REPO_DIR" archive "$TAG" | tar -x -C "$BUILD_DIR"

  # Patch astro.config.mjs to add base path
  # We need to inject `base: '/$TAG'` into the defineConfig call
  cd "$BUILD_DIR"

  # Use node to rewrite the config reliably
  node -e "
    const fs = require('fs');
    let config = fs.readFileSync('astro.config.mjs', 'utf8');
    // Add base option into defineConfig({...})
    config = config.replace(
      /defineConfig\(\{/,
      \"defineConfig({\n  base: '/${TAG}',\"
    );
    fs.writeFileSync('astro.config.mjs', config);
    console.log('Patched astro.config.mjs:');
    console.log(config);
  "

  # Install dependencies and build
  echo "Installing dependencies for $TAG..."
  npm install --legacy-peer-deps 2>&1 | tail -5

  echo "Building $TAG..."
  # Skip astro check to avoid type-check failures on old code; just build
  npx astro build 2>&1 | tail -10

  # Post-process: fix absolute paths that weren't rewritten by Astro's base config.
  # Static assets referenced as /foo.svg or /icons/bar.svg need to become /$TAG/foo.svg etc.
  echo "Post-processing HTML to fix absolute asset paths..."
  find "$BUILD_DIR/dist" -name '*.html' -exec node -e "
    const fs = require('fs');
    const file = process.argv[1];
    let html = fs.readFileSync(file, 'utf8');
    // Rewrite src=\"/...\" and href=\"/...\" that don't already have the tag prefix or are external
    html = html.replace(/(src|href)=\"\/((?!${TAG}\/|_astro\/|https?:)[^\"]*)\"/g, '\$1=\"/${TAG}/\$2\"');
    fs.writeFileSync(file, html);
  " {} \;

  # Copy build output to public directory
  DEST="$REPO_DIR/public/$TAG"
  rm -rf "$DEST"
  cp -r "$BUILD_DIR/dist/" "$DEST"

  echo "===== Archive for $TAG built and placed in public/$TAG ====="
  echo ""

  cd "$REPO_DIR"
done

# Cleanup
rm -rf "$TEMP_BASE"
echo "Done! Archives are in public/2024 and public/2025"
