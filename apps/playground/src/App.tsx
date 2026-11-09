import { useEffect, useState } from "react";
import { fonts, themes } from "@monas/preset";
import type { ThemeName } from "@monas/preset";
import { TokenPreviews } from "./tokens/TokenPreviews";
import "./app.css";

export function App() {
  const [theme, setTheme] = useState<ThemeName>("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

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
          {themes.map((name) => {
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
                {name}
              </button>
            );
          })}
        </div>
      </header>
      <TokenPreviews />
    </main>
  );
}
