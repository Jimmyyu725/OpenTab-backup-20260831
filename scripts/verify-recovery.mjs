import { readFile, readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const index = JSON.parse(await readFile(join(root, "RECOVERY_INDEX.json"), "utf8"));
if (index.tool !== "webcrack 2.16.0" || index.inputs.length !== 58) throw new Error("Incomplete recovery index");
if (index.inputs.some((item) => item.status !== "recovered")) throw new Error("One or more bundles failed recovery");

async function walk(path) {
  const entries = await readdir(path, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const child = join(path, entry.name);
    files.push(...(entry.isDirectory() ? await walk(child) : [child]));
  }
  return files;
}

const outputs = await walk(join(root, "recovered"));
const readableEntries = outputs.filter((path) => path.endsWith("/deobfuscated.js"));
if (readableEntries.length !== 58) throw new Error(`Expected 58 readable entries, got ${readableEntries.length}`);
for (const path of readableEntries) {
  const result = spawnSync(process.execPath, ["--check", path], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(`${path}: ${result.stderr.trim()}`);
}
const bundles = index.inputs.filter((item) => item.bundle_detected).length;
console.log(`OK recovery inputs=${index.inputs.length} outputs=${outputs.length} bundles=${bundles} syntax=${readableEntries.length}`);
