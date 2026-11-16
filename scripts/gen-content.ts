// Regenerates public/content.json from DEFAULT_CONTENT.
// Run: bun scripts/gen-content.ts
import { writeFileSync } from "node:fs";
import { DEFAULT_CONTENT } from "../src/lib/site-content";

writeFileSync(
  "public/content.json",
  JSON.stringify(DEFAULT_CONTENT, null, 2) + "\n",
  "utf8",
);
console.log("public/content.json written —", Object.keys(DEFAULT_CONTENT).join(", "));
