import { mkdirSync, writeFileSync } from "node:fs";
const line = "It's 3am. The whole house is asleep except me, and I'm a fridge. I don't even get to sleep.";
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
