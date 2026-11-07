import { defineTokens } from "@pandacss/dev";
import type { Preset } from "@pandacss/dev";
import { colors } from "./colors.js";
import { durations, easings, opacity, shadows, zIndex } from "./effects.js";
import { borderWidths, radii } from "./radii.js";
import { sizes, spacing } from "./spacing.js";
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from "./typography.js";

type PresetTokens = NonNullable<NonNullable<Preset["theme"]>["tokens"]>;

export const tokens: PresetTokens = defineTokens({
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  spacing,
  sizes,
  radii,
  borderWidths,
  shadows,
  durations,
  easings,
  zIndex,
  opacity
});

export {
  borderWidths,
  colors,
  durations,
  easings,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacity,
  radii,
  shadows,
  sizes,
  spacing,
  zIndex
};
