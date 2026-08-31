import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [mode, input = mode === "baseline" ? "original" : mode === "modified" ? "extension" : "rollback-test"] = process.argv.slice(2);
if (!new Set(["baseline", "modified", "rollback"]).has(mode)) {
  throw new Error("Usage: node scripts/verify.mjs <baseline|modified|rollback> <directory>");
}
const target = resolve(projectRoot, input);

async function walk(path) {
  const entries = await readdir(path, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const child = join(path, entry.name);
    files.push(...(entry.isDirectory() ? await walk(child) : [child]));
  }
  return files;
}

const manifest = JSON.parse(await readFile(join(target, "manifest.json"), "utf8"));
if (manifest.version !== "11.0.41") throw new Error(`Unexpected version ${manifest.version}`);
if (manifest.background?.service_worker !== "serviceworker.js") throw new Error("Missing MV3 service worker");
if (manifest.chrome_url_overrides?.newtab !== "newtab/index.html") throw new Error("Missing new-tab override");
await readFile(join(target, manifest.background.service_worker));
await readFile(join(target, manifest.chrome_url_overrides.newtab));
await readFile(join(target, manifest.action.default_popup));

const files = (await walk(target)).filter((path) => !path.endsWith("/.DS_Store"));
const jsFiles = files.filter((path) => path.endsWith(".js"));
for (const path of jsFiles) {
  const result = spawnSync(process.execPath, ["--check", path], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(`${relative(target, path)}: ${result.stderr.trim()}`);
}

const checksumsText = await readFile(join(projectRoot, "ORIGINAL_SHA256SUMS.txt"), "utf8");
const checksumLines = checksumsText.trimEnd().split("\n");
const expected = new Map(checksumLines.map((line) => [line.slice(66), line.slice(0, 64)]));
for (const path of files) {
  const rel = relative(target, path);
  if (mode === "modified" && rel === "manifest.json") continue;
  const hash = createHash("sha256").update(await readFile(path)).digest("hex");
  if (expected.get(rel) !== hash) throw new Error(`Checksum mismatch: ${rel}`);
}
if (mode !== "modified" && files.length !== expected.size) {
  throw new Error(`File count mismatch: ${files.length} != ${expected.size}`);
}

if (mode === "modified") {
  if (manifest.name !== "Infinity New Tab Pro (Recovered 11.0.41)") throw new Error("Recovered-copy name not applied");
  if ("key" in manifest || "update_url" in manifest) throw new Error("Store identity/update fields still present");
} else {
  if (manifest.name !== "__MSG_name_pro__") throw new Error("Stock localized name not restored");
  if (!manifest.key || !manifest.update_url) throw new Error("Stock identity/update fields not restored");
}

const treeHash = createHash("sha256").update(checksumsText).digest("hex");
console.log(`OK mode=${mode} files=${files.length} js=${jsFiles.length} manifest=${manifest.version} tree_sha256=${treeHash}`);
