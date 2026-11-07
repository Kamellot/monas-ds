import { defineTokens } from "@pandacss/dev";

export const fonts = defineTokens.fonts({
  heading: {
    value:
      '"General Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    description: "Heading font stack based on General Sans"
  },
  body: {
    value:
      '"General Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    description: "Body and UI font stack based on General Sans"
  },
  code: {
    value:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    description: "Code and tabular monospace font stack"
  }
});

export const fontSizes = defineTokens.fontSizes({
  xs: { value: "0.75rem", description: "12px extra-small font size" },
  sm: { value: "0.875rem", description: "14px small font size" },
  md: { value: "1rem", description: "16px base body font size" },
  lg: { value: "1.125rem", description: "18px large font size" },
  xl: { value: "1.25rem", description: "20px extra-large font size" },
  "2xl": { value: "1.5rem", description: "24px heading font size" },
  "3xl": { value: "1.875rem", description: "30px display heading font size" },
  "4xl": { value: "2.25rem", description: "36px hero heading font size" },
  "5xl": { value: "3rem", description: "48px display hero font size" }
});

export const fontWeights = defineTokens.fontWeights({
  light: { value: "300", description: "Light font weight" },
  normal: { value: "400", description: "Regular body font weight" },
  medium: { value: "500", description: "Medium UI label font weight" },
  semibold: { value: "600", description: "Semibold subheading font weight" },
  bold: { value: "700", description: "Bold heading font weight" }
});

export const lineHeights = defineTokens.lineHeights({
  none: { value: "1", description: "Single-line tight leading" },
  tight: { value: "1.25", description: "Compact heading leading" },
  snug: { value: "1.375", description: "Subheading leading" },
  normal: { value: "1.5", description: "Standard body leading" },
  relaxed: { value: "1.625", description: "Long-form reading leading" },
  loose: { value: "2", description: "Spacious leading" }
});

export const letterSpacings = defineTokens.letterSpacings({
  tighter: { value: "-0.05em", description: "Extra-tight display tracking" },
  tight: { value: "-0.025em", description: "Tight heading tracking" },
  normal: { value: "0em", description: "Default neutral tracking" },
  wide: { value: "0.025em", description: "Slightly wide tracking" },
  wider: { value: "0.05em", description: "Wide uppercase tracking" },
  widest: { value: "0.1em", description: "Maximum overline tracking" }
});
