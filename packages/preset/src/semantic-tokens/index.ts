import { defineSemanticTokens } from "@pandacss/dev";
import type { Preset } from "@pandacss/dev";
import { semanticColors } from "./colors.js";

type PresetSemanticTokens = NonNullable<NonNullable<Preset["theme"]>["semanticTokens"]>;

export const semanticTokens: PresetSemanticTokens = defineSemanticTokens({
  colors: semanticColors
});

export { semanticColors };
