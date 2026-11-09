import { defineConditions } from "@pandacss/dev";
import type { Preset } from "@pandacss/dev";

export const colorModes = ["light", "dark"] as const;
export type ColorMode = (typeof colorModes)[number];

export function createThemeConditions(themeName: string): Record<string, string> {
  return {
    [themeName]: `:where([data-theme="${themeName}"]) &, &:where([data-theme="${themeName}"])`,
    [`${themeName}Light`]: `[data-theme="${themeName}"][data-mode="light"] &, [data-mode="light"] [data-theme="${themeName}"]:not([data-mode="dark"]) &, [data-theme="${themeName}"] [data-mode="light"]:not([data-theme]) &, &[data-theme="${themeName}"][data-mode="light"]`,
    [`${themeName}Dark`]: `[data-theme="${themeName}"][data-mode="dark"] &, [data-mode="dark"] [data-theme="${themeName}"]:not([data-mode="light"]) &, [data-theme="${themeName}"] [data-mode="dark"]:not([data-theme]) &, &[data-theme="${themeName}"][data-mode="dark"]`
  };
}

export const conditions: NonNullable<Preset["conditions"]> = defineConditions({
  extend: {
    light:
      '[data-mode="light"] &, &[data-mode="light"], [data-theme="light"] &, &[data-theme="light"]',
    dark: '[data-mode="dark"] &, &[data-mode="dark"], [data-theme="dark"] &, &[data-theme="dark"]',
    hover: "&:is(:hover, [data-hover])",
    focus: "&:is(:focus, [data-focus])",
    focusVisible: "&:is(:focus-visible, [data-focus-visible])",
    focusWithin: "&:focus-within",
    active: "&:is(:active, [data-active], [data-state=active])",
    disabled: "&:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])",
    invalid: "&:is(:invalid, [data-invalid], [aria-invalid=true])",
    readOnly: "&:is(:read-only, [readonly], [data-readonly], [aria-readonly=true])",
    required: "&:is(:required, [required], [aria-required=true])",
    checked: "&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])",
    indeterminate:
      "&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])",
    selected: "&:is([data-selected], [aria-selected=true])",
    pressed: "&:is([data-pressed], [aria-pressed=true])",
    expanded: "&:is([data-expanded], [aria-expanded=true], [data-state=open])",
    open: "&:is([open], [data-open], [data-state=open])",
    closed: "&:is([data-closed], [data-state=closed])",
    loading: "&:is([data-loading], [aria-busy=true])",
    highlighted: "&[data-highlighted]",
    placeholderShown: "&:is(:placeholder-shown, [data-placeholder-shown])",
    empty: "&:is(:empty, [data-empty])",
    horizontal: "&:is([data-orientation=horizontal], [aria-orientation=horizontal])",
    vertical: "&:is([data-orientation=vertical], [aria-orientation=vertical])",
    ltr: "[dir=ltr] &",
    rtl: "[dir=rtl] &",
    groupHover: ".group:is(:hover, [data-hover]) &",
    groupFocus: ".group:is(:focus, [data-focus]) &",
    groupFocusVisible: ".group:is(:focus-visible, [data-focus-visible]) &",
    groupActive: ".group:is(:active, [data-active]) &",
    groupDisabled: ".group:is(:disabled, [disabled], [data-disabled], [aria-disabled=true]) &",
    peerHover: ".peer:is(:hover, [data-hover]) ~ &",
    peerFocus: ".peer:is(:focus, [data-focus]) ~ &",
    peerFocusVisible: ".peer:is(:focus-visible, [data-focus-visible]) ~ &",
    peerDisabled: ".peer:is(:disabled, [disabled], [data-disabled], [aria-disabled=true]) ~ &",
    peerInvalid: ".peer:is(:invalid, [data-invalid], [aria-invalid=true]) ~ &",
    peerChecked:
      ".peer:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) ~ &",
    motionReduce: "@media (prefers-reduced-motion: reduce)",
    motionSafe: "@media (prefers-reduced-motion: no-preference)",
    print: "@media print",
    portrait: "@media (orientation: portrait)",
    landscape: "@media (orientation: landscape)",
    highContrast: "@media (forced-colors: active), (prefers-contrast: more)"
  }
});
