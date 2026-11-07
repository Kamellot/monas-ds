export interface TokenEntry {
  name: string;
  value: string;
  description: string;
}

interface TokenLeaf {
  value: string | number;
  description?: string;
}

function isLeaf(node: unknown): node is TokenLeaf {
  return typeof node === "object" && node !== null && "value" in node;
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

