import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { webcrack } from "webcrack";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = join(root, "original");
const outputRoot = join(root, "recovered");

async function walk(path) {
  const entries = await readdir(path, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const child = join(path, entry.name);
    files.push(...(entry.isDirectory() ? await walk(child) : [child]));
  }
  return files;
}

await mkdir(outputRoot, { recursive: true });
const inputs = (await walk(sourceRoot)).filter((path) => path.endsWith(".js")).sort();
const results = [];

for (const [index, input] of inputs.entries()) {
  const rel = relative(sourceRoot, input);
  const code = await readFile(input, "utf8");
  const output = join(outputRoot, `${rel}.recovered`);
  await mkdir(output, { recursive: true });
  const record = {
    input: rel,
    input_bytes: Buffer.byteLength(code),
    input_sha256: createHash("sha256").update(code).digest("hex"),
    output: relative(root, output),
  };
  try {
    const recovered = await webcrack(code, { jsx: false, unpack: true });
    await recovered.save(output);
    record.status = "recovered";
    record.bundle_detected = Boolean(recovered.bundle);
  } catch (error) {
    try {
      const recovered = await webcrack(code, { jsx: false, unpack: false });
      await recovered.save(output);
      record.status = "readable-fallback";
      record.bundle_detected = false;
      record.unpack_error = error instanceof Error ? error.message : String(error);
    } catch (fallbackError) {
      record.status = "failed";
      record.error = fallbackError instanceof Error ? fallbackError.message : String(fallbackError);
    }
  }
  if (record.status !== "failed") {
    record.output_files = (await walk(output)).length;
    record.output_bytes = (await walk(output)).reduce(async (sumPromise, path) => {
      const sum = await sumPromise;
      return sum + (await stat(path)).size;
    }, Promise.resolve(0));
  }
  results.push(record);
  await writeFile(join(root, "RECOVERY_INDEX.json"), `${JSON.stringify({ tool: "webcrack 2.16.0", inputs: results }, null, 2)}\n`);
  console.log(`[${index + 1}/${inputs.length}] ${record.status} ${rel}`);
}

const counts = Object.groupBy(results, (item) => item.status);
const summary = Object.fromEntries(Object.entries(counts).map(([key, value]) => [key, value.length]));
console.log(`OK recovery ${JSON.stringify(summary)}`);
