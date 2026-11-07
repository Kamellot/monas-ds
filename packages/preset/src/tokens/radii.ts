import { defineTokens } from "@pandacss/dev";

export const radii = defineTokens.radii({
  none: { value: "0rem", description: "Sharp square corners" },
  xs: { value: "0.125rem", description: "2px subtle radius" },
  sm: { value: "0.25rem", description: "4px small radius" },
  md: { value: "0.375rem", description: "6px medium radius" },
  lg: { value: "0.5rem", description: "8px large radius" },
  xl: { value: "0.75rem", description: "12px extra-large radius" },
  "2xl": { value: "1rem", description: "16px 2x-large radius" },
  "3xl": { value: "1.5rem", description: "24px 3x-large radius" },
  full: { value: "9999px", description: "Pill / circular radius" }
});

export const borderWidths = defineTokens.borderWidths({
  0: { value: "0px", description: "No border width" },
  1: { value: "1px", description: "1px standard border width" },
  2: { value: "2px", description: "2px emphasized border width" },
  4: { value: "4px", description: "4px heavy border width" },
  8: { value: "8px", description: "8px structural border width" }
});

