export interface TokenEntry {
  name: string;
  value: string;
  description: string;
}

export interface SemanticTokenEntry {
  name: string;
  description: string;
  conditions: {
    base: string;
    _light: string;
    _dark: string;
    _ocean: string;
  };
}

interface TokenLeaf {
  value: string | number;
  description?: string;
}

interface SemanticLeaf {
  value: {
    base: string;
    _light: string;
    _dark: string;
    _ocean: string;
  };
  description?: string;
}

function isLeaf(node: unknown): node is TokenLeaf {
  return (
    typeof node === "object" &&
    node !== null &&
    "value" in node &&
    (typeof node.value === "string" || typeof node.value === "number")
  );
}

function isSemanticLeaf(node: unknown): node is SemanticLeaf {
  return (
    typeof node === "object" &&
    node !== null &&
    "value" in node &&
    typeof node.value === "object" &&
    node.value !== null &&
    "base" in node.value
  );
}

export function flatten(group: object | undefined, prefix = ""): TokenEntry[] {
  if (!group) return [];
  return Object.entries(group).flatMap(([key, node]) => {
    const name = prefix ? `${prefix}.${key}` : key;
    if (isLeaf(node)) {
      return [{ name, value: String(node.value), description: node.description ?? "" }];
    }
    return flatten(node as object, name);
  });
}

export function flattenSemantic(group: object | undefined, prefix = ""): SemanticTokenEntry[] {
  if (!group) return [];
  return Object.entries(group).flatMap(([key, node]) => {
    const name = prefix ? (key === "DEFAULT" ? prefix : `${prefix}.${key}`) : key;
    if (isSemanticLeaf(node)) {
      return [
        {
          name,
          description: node.description ?? "",
          conditions: node.value
        }
      ];
    }
    return flattenSemantic(node as object, name);
  });
}

export function resolveColorAlias(alias: string, primitiveColors: TokenEntry[]): string {
  const cleaned = alias.replace(/^\{colors\./, "").replace(/\}$/, "");
  return primitiveColors.find((token) => token.name === cleaned)?.value ?? alias;
}
