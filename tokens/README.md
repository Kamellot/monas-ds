# Monas W3C DTCG Token Specification

Monas structures all design tokens according to the [W3C Design Tokens Community Group (DTCG) Format Specification](https://design-tokens.github.io/community-group/format/), validated against [`./dtcg.schema.json`](./dtcg.schema.json) and compiled into zero-runtime PandaCSS configurations inside `@monas/preset`.

---

## 1. Core DTCG Properties

Every token node or group adheres strictly to the DTCG reserved `$`-prefixed keys:

| Property | Required | Description |
| :--- | :--- | :--- |
| `$value` | **Yes** (leaf nodes) | Raw primitive value, composite object, or alias reference (`"{group.token}"`). |
| `$type` | **Yes** (node or inherited from parent group) | Token classification (`color`, `dimension`, `fontFamily`, `fontWeight`, `duration`, `cubicBezier`, `number`, `shadow`, `border`, `typography`, `transition`). |
| `$description` | Optional | Human- and AI-readable intent of the token. |
| `$extensions` | Optional | Vendor-scoped metadata under `"com.monas"` for cascade tiering and multi-theme conditions. |

---

## 2. Three-Tier Token Cascade Architecture

Monas enforces a strict 3-tier token hierarchy to guarantee theme isolation and conflict-free overrides:

```text
[Tier 1: Primitive Tokens]  ──►  [Tier 2: Semantic Tokens]  ──►  [Tier 3: Component Tokens]
   (colors.gray.900)               (colors.bg.surface)           (button.background.default)
```

### Tier 1: Primitive Tokens (`primitive`)
Raw, context-agnostic values (palettes, spacing scales, typography scales, radii). Primitive tokens **never** reference other tokens and **never** change across themes.

```json
{
  "$schema": "./dtcg.schema.json",
  "$extensions": {
    "com.monas": { "tier": "primitive" }
  },
  "colors": {
    "$type": "color",
    "gray": {
      "50": { "$value": "#f9fafb", "$description": "Lightest neutral gray" },
      "900": { "$value": "#111827", "$description": "Darkest neutral gray" }
    },
    "blue": {
      "600": { "$value": "#2563eb", "$description": "Core brand blue" },
      "700": { "$value": "#1d4ed8", "$description": "Deep brand blue" }
    }
  },
  "spacing": {
    "$type": "dimension",
    "1": { "$value": "0.25rem" },
    "2": { "$value": "0.5rem" },
    "4": { "$value": "1rem" }
  }
}
```

### Tier 2: Semantic Tokens (`semantic`)
Role-based tokens mapped to primitives using DTCG `{group.token}` alias syntax. Multi-theme variants (`_dark`, `_ocean`, etc.) are declared in `$extensions["com.monas"].conditions` and compile to PandaCSS `semanticTokens` driven by `[data-theme="<theme>"] &` selectors.

```json
{
  "$schema": "./dtcg.schema.json",
  "$extensions": {
    "com.monas": { "tier": "semantic" }
  },
  "colors": {
    "$type": "color",
    "bg": {
      "canvas": {
        "$value": "{colors.gray.50}",
        "$description": "Default page background surface",
        "$extensions": {
          "com.monas": {
            "conditions": {
              "default": "{colors.gray.50}",
              "_dark": "{colors.gray.900}"
            }
          }
        }
      }
    },
    "primary": {
      "DEFAULT": {
        "$value": "{colors.blue.600}",
        "$extensions": {
          "com.monas": {
            "conditions": {
              "default": "{colors.blue.600}",
              "_dark": "{colors.blue.600}"
            }
          }
        }
      },
      "hover": {
        "$value": "{colors.blue.700}",
        "$extensions": {
          "com.monas": {
            "conditions": {
              "default": "{colors.blue.700}",
              "_dark": "{colors.blue.700}"
            }
          }
        }
      }
    }
  }
}
```

### Tier 3: Component Tokens (`component`)
Scoped exclusively to individual components and mapped to Tier 2 semantic tokens. Component recipes consume Tier 3 tokens so consumers can re-theme a single component (e.g., `button.background.default`) without mutating global semantic tokens.

```json
{
  "$schema": "./dtcg.schema.json",
  "$extensions": {
    "com.monas": { "tier": "component" }
  },
  "button": {
    "background": {
      "$type": "color",
      "default": {
        "$value": "{colors.primary.DEFAULT}",
        "$description": "Primary solid button background"
      },
      "hover": {
        "$value": "{colors.primary.hover}",
        "$description": "Primary solid button hover background"
      }
    }
  }
}
```

---

## 3. Naming & File Conventions

- **File Extension**: All token source files must use the `.tokens.json` suffix and include `"$schema"` pointing to `dtcg.schema.json`.
- **Group Naming**: Use `camelCase` for group keys (`fontSizes`, `lineHeights`, `borderWidths`), `DEFAULT` for base semantic scales, and numeric or `kebab-case` keys for scale steps (`50`–`950`, `sm`, `md`, `lg`).
- **No Circular Aliases**: Tier 3 references Tier 2; Tier 2 references Tier 1. Upward or circular references are forbidden.

