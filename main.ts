// The GPS Swears It Was a Shortcut — make.fun entry (program/v1).
// Writes the GPS's one-line excuse for the wrong road to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
// The joke, in the GPS's own voice: it blames the map ("the map swore"),
// stays smug and defensive throughout, and lands on a fresh, specific
// detail — a wedding — instead of the usual "recalculating" gag. The turn
// the reader does not see coming: the GPS drove straight through the
// ceremony and still claims it improved the day.
const entry =
  "The map swore this was a shortcut, so I took it — straight through a wedding. The bride waved, the groom cried, and honestly, we were the best thing that happened to that ceremony.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
