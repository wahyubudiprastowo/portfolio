import { writeFileSync } from "fs";
import { DEFAULT_CONTENT } from "../src/lib/site-content";
writeFileSync(
  "public/content.json",
  JSON.stringify(DEFAULT_CONTENT, null, 2) + "\n",
);
console.log("content.json written,", Object.keys(DEFAULT_CONTENT).length, "top-level keys");
