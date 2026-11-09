import type { Preset } from "@pandacss/dev";
import { oceanColors, oceanTheme } from "./ocean.js";

type PresetSemanticTokens = NonNullable<NonNullable<Preset["theme"]>["semanticTokens"]>;
type SemanticColorScale = NonNullable<PresetSemanticTokens["colors"]>;

export interface MonasTheme {
  name: string;
  colors: SemanticColorScale;
}

interface SemanticLeafNode {
  value: Record<string, string>;
  description?: string;
}

function isSemanticLeafNode(node: unknown): node is SemanticLeafNode {
  return (
    typeof node === "object" &&
    node !== null &&
    "value" in node &&
    typeof node.value === "object" &&
    node.value !== null
  );
}

function mergeColorTrees(
  baseTree: Record<string, unknown>,
  themeName: string,
  themeTree: Record<string, unknown>
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...baseTree };

  for (const [key, themeNode] of Object.entries(themeTree)) {
    const baseNode = result[key];

    if (isSemanticLeafNode(themeNode)) {
      const existingValue = isSemanticLeafNode(baseNode) ? baseNode.value : {};
      const lightVal = themeNode.value._light ?? themeNode.value.base;
      const darkVal = themeNode.value._dark ?? lightVal;
      const nextConditions: Record<string, string> = { ...existingValue };

      if (lightVal) {
        nextConditions[`_${themeName}`] = lightVal;
        nextConditions[`_${themeName}Light`] = lightVal;
      }
      if (darkVal) {
        nextConditions[`_${themeName}Dark`] = darkVal;
      }

      result[key] = {
        ...(isSemanticLeafNode(baseNode) ? baseNode : themeNode),
        value: nextConditions
      };
    } else if (typeof themeNode === "object" && themeNode !== null) {
      const baseGroup =
        typeof baseNode === "object" && baseNode !== null && !isSemanticLeafNode(baseNode)
          ? (baseNode as Record<string, unknown>)
          : {};
      result[key] = mergeColorTrees(baseGroup, themeName, themeNode as Record<string, unknown>);
    }
  }

  return result;
}

export function mergeThemeColors(
  baseColors: SemanticColorScale,
  themes: readonly MonasTheme[]
): SemanticColorScale {
  let merged = { ...(baseColors as Record<string, unknown>) };
  for (const theme of themes) {
    merged = mergeColorTrees(merged, theme.name, theme.colors as Record<string, unknown>);
  }
  return merged as SemanticColorScale;
}

export { oceanColors, oceanTheme };
