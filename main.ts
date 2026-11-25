// The 3am fridge, playing therapist: at 3am you don't open the
// fridge hungry, you open it hoping for answers — and the little humming
// box can only offer leftovers plus a verdict on your life choices.
const SETUP = "3am. You stare into me like I'll fix your life.";
const PUNCH = "Best I can do is cold pizza and judgment.";

const line = `${SETUP} ${PUNCH}`;

import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
