import { storage } from "../server/storage";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const stories = await storage.getStories();

const outputDir = path.resolve(__dirname, "../client/public/data");
await mkdir(outputDir, { recursive: true });

await writeFile(
  path.join(outputDir, "stories.json"),
  JSON.stringify(stories, null, 2)
);

console.log(`✅ stories.json gerado com ${stories.length} histórias`);
