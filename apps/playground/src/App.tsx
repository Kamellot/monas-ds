import { useEffect, useState } from "react";
import { colorModes, fonts, oceanTheme } from "@monas/preset";
import type { ColorMode } from "@monas/preset";
import { TokenPreviews } from "./tokens/TokenPreviews";
import "./app.css";

const AVAILABLE_THEMES = ["default", oceanTheme.name] as const;
type PlaygroundTheme = (typeof AVAILABLE_THEMES)[number];

export function App() {
  const [theme, setTheme] = useState<PlaygroundTheme>("default");
  const [mode, setMode] = useState<ColorMode>("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.mode = mode;
  }, [theme, mode]);

  return (
    <main style={{ fontFamily: fonts.body.value, maxWidth: 960, margin: "0 auto", padding: 32 }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: 32
        }}
      >
        <div>
          <h1 style={{ fontFamily: fonts.heading.value, margin: "0 0 4px" }}>Monas Playground</h1>
          <p style={{ margin: 0, color: "var(--colors-text-muted)" }}>
            Semantic &amp; primitive token previews, rendered from @monas/preset.
          </p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <div
            role="group"
            aria-label="Global theme switcher"
            style={{
              display: "flex",
              gap: 6,
              padding: 4,
              borderRadius: 8,
              background: "var(--colors-bg-subtle)",
              border: "1px solid var(--colors-border)"
            }}
          >
            {AVAILABLE_THEMES.map((name) => {
              const active = theme === name;
              return (
                <button
                  key={name}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setTheme(name)}
                  style={{
                    fontFamily: fonts.body.value,
                    fontSize: 13,
                    fontWeight: active ? 600 : 500,
                    padding: "6px 12px",
                    borderRadius: 6,
                    border: "none",
                    cursor: "pointer",
                    background: active ? "var(--colors-primary)" : "transparent",
                    color: active ? "var(--colors-on-primary)" : "var(--colors-text)"
                  }}
                >
                  theme: {name}
                </button>
              );
            })}
          </div>
          <div
            role="group"
            aria-label="Global color mode switcher"
            style={{
              display: "flex",
              gap: 6,
              padding: 4,
              borderRadius: 8,
              background: "var(--colors-bg-subtle)",
              border: "1px solid var(--colors-border)"
            }}
          >
            {colorModes.map((name) => {
              const active = mode === name;
              return (
                <button
                  key={name}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setMode(name)}
                  style={{
                    fontFamily: fonts.body.value,
                    fontSize: 13,
                    fontWeight: active ? 600 : 500,
                    padding: "6px 12px",
                    borderRadius: 6,
                    border: "none",
                    cursor: "pointer",
                    background: active ? "var(--colors-primary)" : "transparent",
                    color: active ? "var(--colors-on-primary)" : "var(--colors-text)"
                  }}
                >
                  mode: {name}
                </button>
              );
            })}
          </div>
        </div>
      </header>
      <TokenPreviews />
    </main>
  );
}
