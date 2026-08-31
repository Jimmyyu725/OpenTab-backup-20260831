#!/bin/zsh
set -euo pipefail
ROOT=${0:A:h}
TARGET=${1:-extension}
if [[ "$TARGET" != /* ]]; then
  TARGET="$ROOT/$TARGET"
fi
cp "$ROOT/original/manifest.json" "$TARGET/manifest.json"
cp -R "$ROOT/original/_locales/." "$TARGET/_locales/"
cp -R "$ROOT/original/chatai/_locales/." "$TARGET/chatai/_locales/"
NODE=${NODE:-$(command -v node 2>/dev/null || true)}
[[ -n "$NODE" ]] || NODE="$HOME/.nvm/versions/node/v24.15.0/bin/node"
"$NODE" - "$TARGET/manifest.json" <<'JS'
const fs = require("node:fs");
const manifest = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
if (manifest.name !== "__MSG_name_pro__" || !manifest.key || !manifest.update_url) process.exit(1);
console.log(`RESTORED extension_brand=stock manifest.name=${manifest.name} locales=stock key=present update_url=present target=${process.argv[2]}`);
JS
