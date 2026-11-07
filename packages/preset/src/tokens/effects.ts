import { defineTokens } from "@pandacss/dev";

export const shadows = defineTokens.shadows({
  none: { value: "none", description: "No shadow" },
  xs: {
    value: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    description: "Subtle low-elevation shadow"
  },
  sm: {
    value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    description: "Small card elevation shadow"
  },
  md: {
    value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    description: "Medium dropdown elevation shadow"
  },
  lg: {
    value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    description: "Large popover elevation shadow"
  },
  xl: {
    value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    description: "Extra-large modal elevation shadow"
  },
  "2xl": {
    value: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    description: "Highest dialog elevation shadow"
  }
});

export const durations = defineTokens.durations({
  fastest: { value: "50ms", description: "Instant micro-interaction duration" },
  faster: { value: "100ms", description: "Fast state change duration" },
  fast: { value: "150ms", description: "Standard control transition duration" },
  normal: { value: "200ms", description: "Default UI transition duration" },
  slow: { value: "300ms", description: "Overlay entrance duration" },
  slower: { value: "400ms", description: "Large layout transition duration" },
  slowest: { value: "500ms", description: "Elaborate choreography duration" }
});

export const easings = defineTokens.easings({
  default: {
    value: "cubic-bezier(0.4, 0, 0.2, 1)",
    description: "Standard smooth acceleration/deceleration curve"
  },
  linear: { value: "linear", description: "Constant rate curve" },
  in: { value: "cubic-bezier(0.4, 0, 1, 1)", description: "Ease-in exiting curve" },
  out: { value: "cubic-bezier(0, 0, 0.2, 1)", description: "Ease-out entering curve" },
  inOut: {
    value: "cubic-bezier(0.4, 0, 0.2, 1)",
    description: "Symmetrical ease-in-out curve"
  }
});

export const zIndex = defineTokens.zIndex({
  hide: { value: -1, description: "Below base stacking context" },
  base: { value: 0, description: "Default base stacking level" },
  docked: { value: 10, description: "Docked elements level" },
  dropdown: { value: 1000, description: "Dropdown menu level" },
  sticky: { value: 1100, description: "Sticky header level" },
  banner: { value: 1200, description: "Top notification banner level" },
  overlay: { value: 1300, description: "Backdrop overlay level" },
  modal: { value: 1400, description: "Modal dialog level" },
  popover: { value: 1500, description: "Floating popover level" },
  toast: { value: 1600, description: "Toast notification level" },
  tooltip: { value: 1700, description: "Tooltip highest level" }
});

export const opacity = defineTokens.opacity({
  0: { value: "0", description: "0% opacity (invisible)" },
  5: { value: "0.05", description: "5% opacity" },
  10: { value: "0.1", description: "10% opacity" },
  20: { value: "0.2", description: "20% opacity" },
  25: { value: "0.25", description: "25% opacity" },
  30: { value: "0.3", description: "30% opacity" },
  40: { value: "0.4", description: "40% opacity" },
  50: { value: "0.5", description: "50% opacity" },
  60: { value: "0.6", description: "60% opacity" },
  70: { value: "0.7", description: "70% opacity" },
  75: { value: "0.75", description: "75% opacity" },
  80: { value: "0.8", description: "80% opacity" },
  90: { value: "0.9", description: "90% opacity" },
  95: { value: "0.95", description: "95% opacity" },
  100: { value: "1", description: "100% opacity (opaque)" }
});

