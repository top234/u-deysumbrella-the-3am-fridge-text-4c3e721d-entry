import { mkdirSync, writeFileSync } from "node:fs";
// The fridge works the night shift and never gets to go home.
const setup = "It's 3am. Everyone's asleep and I'm still humming —";
const punch = "the only appliance in this house that never clocks out.";
const line = `${setup} ${punch}`;
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
