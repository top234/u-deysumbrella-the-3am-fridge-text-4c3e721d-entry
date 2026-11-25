import { mkdirSync, writeFileSync } from "node:fs";
const line = "It's 3am. I'm the only one in this house still awake, and I'm a fridge. I don't even get to sleep.";
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
