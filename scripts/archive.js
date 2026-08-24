#!/usr/bin/env node

/**
 * IDSW Conference Archival Script
 *
 * Usage:
 *   node scripts/archive.js <YEAR>
 *   npm run archive -- 2026
 *
 * This script builds the current conference website with base path `/<YEAR>`
 * and copies the standalone static production build into `public/<YEAR>/`.
 */

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const yearArg = process.argv[2];

if (!yearArg || !/^\d{4}$/.test(yearArg)) {
  console.error("❌ Error: Please specify a 4-digit year to archive.");
  console.error("   Example: npm run archive -- 2026");
  process.exit(1);
}

const year = yearArg;
const tempOutDir = path.join(rootDir, `.archive-build-${year}`);
const destDir = path.join(rootDir, "public", year);

console.log(`\n📦 ==============================================`);
console.log(`🚀 Starting archival build for IDSW ${year}`);
console.log(`==============================================\n`);

try {
  // 1. Type check
  console.log("🔍 Running type diagnostics (`astro check`)...");
  execSync("npx astro check", { cwd: rootDir, stdio: "inherit" });

  // 2. Build with base path
  console.log(`\n🔨 Building static bundle with base path: '/${year}'...`);
  if (fs.existsSync(tempOutDir)) {
    fs.rmSync(tempOutDir, { recursive: true, force: true });
  }

  execSync(`npx astro build --base /${year} --outDir "${tempOutDir}"`, {
    cwd: rootDir,
    stdio: "inherit",
  });

  // 3. Move output to public/<year>
  console.log(`\n📂 Moving archive into 'public/${year}'...`);
  if (fs.existsSync(destDir)) {
    console.log(`   Replacing existing archive in public/${year}...`);
    fs.rmSync(destDir, { recursive: true, force: true });
  }
  fs.mkdirSync(destDir, { recursive: true });
  fs.cpSync(tempOutDir, destDir, { recursive: true });

  // Remove any nested previous year archives that Astro copied from public/
  for (const item of fs.readdirSync(destDir)) {
    if (/^\d{4}$/.test(item)) {
      fs.rmSync(path.join(destDir, item), { recursive: true, force: true });
    }
  }

  // 4. Cleanup temp directory
  fs.rmSync(tempOutDir, { recursive: true, force: true });

  // 5. Verification
  const indexHtmlPath = path.join(destDir, "index.html");
  if (!fs.existsSync(indexHtmlPath)) {
    throw new Error(`Archival failed: index.html not found in public/${year}`);
  }

  const files = fs.readdirSync(destDir);
  console.log(
    `\n✅ Successfully created archive in 'public/${year}'! (${files.length} items)`,
  );
  console.log(`\nNext steps:`);
  console.log(
    `1. Test the archive locally: \`npm run dev\` and visit \`http://localhost:4321/${year}/index.html\``,
  );
  console.log(
    `2. Commit the archive: \`git add public/${year} && git commit -m "Archive ${year} edition"\``,
  );
  console.log(`3. Tag the release: \`git tag ${year}\`\n`);
} catch (error) {
  if (fs.existsSync(tempOutDir)) {
    fs.rmSync(tempOutDir, { recursive: true, force: true });
  }
  console.error(`\n❌ Failed to archive ${year}:`, error.message);
  process.exit(1);
}
