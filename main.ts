import { mkdirSync, writeFileSync } from "node:fs";
const line = "It's 3am. Everyone's asleep and I'm still humming — the only one in this house who never clocks out.";
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
