import { defineConditions, definePreset, defineSemanticTokens } from "@pandacss/dev";
import type { Preset } from "@pandacss/dev";
import { breakpoints } from "./breakpoints.js";
import { conditions, createThemeConditions } from "./conditions.js";
import { semanticColors, semanticTokens } from "./semantic-tokens/index.js";
import { mergeThemeColors } from "./themes/index.js";
import type { MonasTheme } from "./themes/index.js";
import { tokens } from "./tokens/index.js";

export interface MonasPresetOptions {
  themes?: readonly MonasTheme[];
}

export function createMonasPreset(options?: MonasPresetOptions): Preset {
  const extraThemes = options?.themes ?? [];

  if (extraThemes.length === 0) {
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

  const extraConditions = Object.assign(
    {},
    ...extraThemes.map((theme) => createThemeConditions(theme.name))
  ) as Record<string, string>;

  return definePreset({
    name: "@monas/preset",
    conditions: defineConditions({
      extend: {
        ...conditions.extend,
        ...extraConditions
      }
    }),
    theme: {
      extend: {
        breakpoints,
        tokens,
        semanticTokens: defineSemanticTokens({
          colors: mergeThemeColors(semanticColors, extraThemes)
        })
      }
    }
  });
}

export const monasPreset: Preset = createMonasPreset();

export { breakpoints } from "./breakpoints.js";
export { colorModes, conditions, createThemeConditions } from "./conditions.js";
export type { ColorMode } from "./conditions.js";
export * from "./semantic-tokens/index.js";
export * from "./themes/index.js";
export * from "./tokens/index.js";

export default monasPreset;
