import { defineTokens } from "@pandacss/dev";

export const colors = defineTokens.colors({
  white: {
    value: "#ffffff",
    description: "Pure white"
  },
  black: {
    value: "#000000",
    description: "Pure black"
  },
  transparent: {
    value: "transparent",
    description: "Fully transparent color"
  },
  current: {
    value: "currentColor",
    description: "Inherits the current text color"
  },
  gray: {
    50: { value: "#f9fafb", description: "Lightest neutral gray" },
    100: { value: "#f3f4f6", description: "Subtle neutral gray surface" },
    200: { value: "#e5e7eb", description: "Light neutral gray border" },
    300: { value: "#d1d5db", description: "Muted neutral gray border" },
    400: { value: "#9ca3af", description: "Placeholder neutral gray" },
    500: { value: "#6b7280", description: "Mid-tone neutral gray" },
    600: { value: "#4b5563", description: "Secondary neutral gray text" },
    700: { value: "#374151", description: "Strong neutral gray text" },
    800: { value: "#1f2937", description: "Deep neutral gray surface" },
    900: { value: "#111827", description: "Darkest neutral gray" },
    950: { value: "#030712", description: "Near-black neutral gray" }
  },
  blue: {
    50: { value: "#eff6ff", description: "Lightest brand blue tint" },
    100: { value: "#dbeafe", description: "Soft brand blue surface" },
    200: { value: "#bfdbfe", description: "Light brand blue border" },
    300: { value: "#93c5fd", description: "Muted brand blue accent" },
    400: { value: "#60a5fa", description: "Bright brand blue accent" },
    500: { value: "#3b82f6", description: "Vibrant brand blue" },
    600: { value: "#2563eb", description: "Core brand blue" },
    700: { value: "#1d4ed8", description: "Deep brand blue" },
    800: { value: "#1e40af", description: "Dark brand blue" },
    900: { value: "#1e3a8a", description: "Darkest brand blue" },
    950: { value: "#172554", description: "Near-black brand blue" }
  },
  cyan: {
    50: { value: "#ecfeff", description: "Lightest ocean cyan tint" },
    100: { value: "#cffafe", description: "Soft ocean cyan surface" },
    200: { value: "#a5f3fc", description: "Light ocean cyan border" },
    300: { value: "#67e8f9", description: "Muted ocean cyan accent" },
    400: { value: "#22d3ee", description: "Bright ocean cyan accent" },
    500: { value: "#06b6d4", description: "Vibrant ocean cyan" },
    600: { value: "#0891b2", description: "Core ocean cyan" },
    700: { value: "#0e7490", description: "Deep ocean cyan" },
    800: { value: "#155e75", description: "Dark ocean cyan" },
    900: { value: "#164e63", description: "Darkest ocean cyan" },
    950: { value: "#083344", description: "Near-black ocean cyan" }
  },
  green: {
    50: { value: "#f0fdf4", description: "Lightest green tint" },
    100: { value: "#dcfce7", description: "Soft green surface" },
    200: { value: "#bbf7d0", description: "Light green border" },
    300: { value: "#86efac", description: "Muted green accent" },
    400: { value: "#4ade80", description: "Bright green accent" },
    500: { value: "#22c55e", description: "Vibrant green" },
    600: { value: "#16a34a", description: "Core green" },
    700: { value: "#15803d", description: "Deep green" },
    800: { value: "#166534", description: "Dark green" },
    900: { value: "#14532d", description: "Darkest green" },
    950: { value: "#052e16", description: "Near-black green" }
  },
  amber: {
    50: { value: "#fffbeb", description: "Lightest amber tint" },
    100: { value: "#fef3c7", description: "Soft amber surface" },
    200: { value: "#fde68a", description: "Light amber border" },
    300: { value: "#fcd34d", description: "Muted amber accent" },
    400: { value: "#fbbf24", description: "Bright amber accent" },
    500: { value: "#f59e0b", description: "Vibrant amber" },
    600: { value: "#d97706", description: "Core amber" },
    700: { value: "#b45309", description: "Deep amber" },
    800: { value: "#92400e", description: "Dark amber" },
    900: { value: "#78350f", description: "Darkest amber" },
    950: { value: "#451a03", description: "Near-black amber" }
  },
  red: {
    50: { value: "#fef2f2", description: "Lightest red tint" },
    100: { value: "#fee2e2", description: "Soft red surface" },
    200: { value: "#fecaca", description: "Light red border" },
    300: { value: "#fca5a5", description: "Muted red accent" },
    400: { value: "#f87171", description: "Bright red accent" },
    500: { value: "#ef4444", description: "Vibrant red" },
    600: { value: "#dc2626", description: "Core red" },
    700: { value: "#b91c1c", description: "Deep red" },
    800: { value: "#991b1b", description: "Dark red" },
    900: { value: "#7f1d1d", description: "Darkest red" },
    950: { value: "#450a0a", description: "Near-black red" }
  }
});

