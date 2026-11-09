import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/dev";
import { breakpoints } from "./breakpoints.js";
import { conditions } from "./conditions.js";
import { semanticTokens } from "./semantic-tokens/index.js";
import { tokens } from "./tokens/index.js";

export function createMonasPreset(): Preset {
  return definePreset({
    name: "@monas/preset",
    conditions,
    theme: {
      extend: {
        breakpoints,
        tokens,
        semanticTokens
      }
    }
  });
}

export const monasPreset: Preset = createMonasPreset();

export { breakpoints } from "./breakpoints.js";
export { conditions, themes } from "./conditions.js";
export type { ThemeName } from "./conditions.js";
export * from "./semantic-tokens/index.js";
export * from "./tokens/index.js";

export default monasPreset;
