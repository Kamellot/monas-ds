import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/dev";
import { breakpoints } from "./breakpoints.js";
import { conditions } from "./conditions.js";

export function createMonasPreset(): Preset {
  return definePreset({
    name: "@monas/preset",
    conditions,
    theme: {
      extend: {
        breakpoints
      }
    }
  });
}

export const monasPreset: Preset = createMonasPreset();

export default monasPreset;
