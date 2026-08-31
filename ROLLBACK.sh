#!/bin/zsh
set -euo pipefail
ROOT=${0:A:h}
TARGET=${1:-extension}
if [[ "$TARGET" != /* ]]; then
  TARGET="$ROOT/$TARGET"
fi
cp "$ROOT/original/manifest.json" "$TARGET/manifest.json"
node - "$TARGET/manifest.json" <<'JS'
const fs = require("node:fs");
const manifest = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
if (manifest.name !== "__MSG_name_pro__" || !manifest.key || !manifest.update_url) process.exit(1);
console.log(`RESTORED manifest.name=${manifest.name} key=present update_url=present target=${process.argv[2]}`);
JS
