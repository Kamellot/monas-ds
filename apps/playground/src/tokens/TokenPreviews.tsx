import type { CSSProperties, ReactNode } from "react";
import {
  borderWidths,
  colors,
  durations,
  easings,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacity,
  radii,
  shadows,
  sizes,
  spacing,
  zIndex
} from "@monas/preset";
import { flatten } from "./flatten";
import type { TokenEntry } from "./flatten";

const ui = {
  muted: "#6b7280",
  border: "#e5e7eb",
  mono: "ui-monospace, SFMono-Regular, Menlo, monospace"
};

const row: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "140px 1fr",
  alignItems: "center",
  gap: 16,
  padding: "8px 0",
  borderBottom: `1px solid ${ui.border}`
};

function Section({
  title,
  count,
  children
}: {
  title: string;
  count: number;
  children: ReactNode;
}) {
  return (
    <section style={{ marginBottom: 56 }}>
      <h2 style={{ margin: "0 0 4px" }}>{title}</h2>
      <p style={{ margin: "0 0 16px", color: ui.muted, fontSize: 14 }}>{count} tokens</p>
      {children}
    </section>
  );
}

function Label({ token }: { token: TokenEntry }) {
  return (
    <div style={{ fontFamily: ui.mono, fontSize: 12 }}>
      <div>{token.name}</div>
      <div style={{ color: ui.muted }}>{token.value}</div>
    </div>
  );
}

function Rows({
  tokens,
  render
}: {
  tokens: TokenEntry[];
  render: (token: TokenEntry) => ReactNode;
}) {
  return (
    <div>
      {tokens.map((token) => (
        <div key={token.name} style={row}>
          <Label token={token} />
          {render(token)}
        </div>
      ))}
    </div>
  );
}

function Swatch({ token }: { token: TokenEntry }) {
  return (
    <div title={token.description} style={{ width: 84 }}>
      <div
        style={{
          height: 48,
          borderRadius: 6,
          background: token.value,
          border: `1px solid ${ui.border}`
        }}
      />
      <div style={{ fontFamily: ui.mono, fontSize: 11, marginTop: 4 }}>
        {token.name.split(".").pop()}
      </div>
      <div style={{ fontFamily: ui.mono, fontSize: 10, color: ui.muted }}>{token.value}</div>
    </div>
  );
}

function Colors() {
  const tokens = flatten(colors);
  const groups = new Map<string, TokenEntry[]>();
  for (const token of tokens) {
    const group = token.name.includes(".") ? (token.name.split(".")[0] ?? "base") : "base";
    groups.set(group, [...(groups.get(group) ?? []), token]);
  }
  return (
    <Section title="colors" count={tokens.length}>
      {[...groups].map(([group, entries]) => (
        <div key={group} style={{ marginBottom: 24 }}>
          <h3 style={{ margin: "0 0 8px", fontSize: 14 }}>{group}</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {entries.map((token) => (
              <Swatch key={token.name} token={token} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}

function Fonts() {
  const tokens = flatten(fonts);
  return (
    <Section title="fonts" count={tokens.length}>
      <Rows
        tokens={tokens}
        render={(token) => (
          <div style={{ fontFamily: token.value, fontSize: 24 }}>
            The quick brown fox jumps over the lazy dog 0123456789
          </div>
        )}
      />
    </Section>
  );
}

function FontSizes() {
  const tokens = flatten(fontSizes);
  return (
    <Section title="fontSizes" count={tokens.length}>
      <Rows
        tokens={tokens}
        render={(token) => <div style={{ fontSize: token.value }}>Monas Design System</div>}
      />
    </Section>
  );
}

function FontWeights() {
  const tokens = flatten(fontWeights);
  return (
    <Section title="fontWeights" count={tokens.length}>
      <Rows
        tokens={tokens}
        render={(token) => (
          <div style={{ fontSize: 24, fontWeight: Number(token.value) }}>Monas Design System</div>
        )}
      />
    </Section>
  );
}

function LineHeights() {
  const tokens = flatten(lineHeights);
  return (
    <Section title="lineHeights" count={tokens.length}>
      <Rows
        tokens={tokens}
        render={(token) => (
          <p style={{ margin: 0, maxWidth: 480, lineHeight: token.value, background: "#eff6ff" }}>
            Design tokens are the single source of truth for every visual decision. Line height
            controls the vertical rhythm of multi-line text.
          </p>
        )}
      />
    </Section>
  );
}

function LetterSpacings() {
  const tokens = flatten(letterSpacings);
  return (
    <Section title="letterSpacings" count={tokens.length}>
      <Rows
        tokens={tokens}
        render={(token) => (
          <div style={{ fontSize: 20, letterSpacing: token.value }}>Monas Design System</div>
        )}
      />
    </Section>
  );
}

function Bars({ title, group }: { title: string; group: object }) {
  const tokens = flatten(group);
  return (
    <Section title={title} count={tokens.length}>
      <Rows
        tokens={tokens}
        render={(token) => (
          <div
            style={{
              width: token.value,
              maxWidth: "100%",
              height: 16,
              background: "#2563eb",
              borderRadius: 2
            }}
          />
        )}
      />
    </Section>
  );
}

function Radii() {
  const tokens = flatten(radii);
  return (
    <Section title="radii" count={tokens.length}>
      <Rows
        tokens={tokens}
        render={(token) => (
          <div
            style={{
              width: 96,
              height: 56,
              background: "#dbeafe",
              border: "1px solid #2563eb",
              borderRadius: token.value
            }}
          />
        )}
      />
    </Section>
  );
}

function BorderWidths() {
  const tokens = flatten(borderWidths);
  return (
    <Section title="borderWidths" count={tokens.length}>
      <Rows
        tokens={tokens}
        render={(token) => (
          <div
            style={{
              width: 96,
              height: 56,
              borderRadius: 6,
              border: `${token.value} solid #111827`
            }}
          />
        )}
      />
    </Section>
  );
}

function Shadows() {
  const tokens = flatten(shadows);
  return (
    <Section title="shadows" count={tokens.length}>
      <Rows
        tokens={tokens}
        render={(token) => (
          <div
            style={{
              width: 120,
              height: 64,
              borderRadius: 8,
              background: "#fff",
              boxShadow: token.value
            }}
          />
        )}
      />
    </Section>
  );
}

function Durations() {
  const tokens = flatten(durations);
  return (
    <Section title="durations" count={tokens.length}>
      <p style={{ margin: "0 0 12px", color: ui.muted, fontSize: 14 }}>Hover a row to animate.</p>
      <div>
        {tokens.map((token) => (
          <div key={token.name} className="motion-row" style={row}>
            <Label token={token} />
            <div style={{ background: "#f3f4f6", borderRadius: 999, height: 16 }}>
              <div className="motion-dot" style={{ transitionDuration: token.value }} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Easings() {
  const tokens = flatten(easings);
  return (
    <Section title="easings" count={tokens.length}>
      <p style={{ margin: "0 0 12px", color: ui.muted, fontSize: 14 }}>
        Hover a row to animate (500ms).
      </p>
      <div>
        {tokens.map((token) => (
          <div key={token.name} className="motion-row" style={row}>
            <Label token={token} />
            <div style={{ background: "#f3f4f6", borderRadius: 999, height: 16 }}>
              <div
                className="motion-dot"
                style={{ transitionDuration: "500ms", transitionTimingFunction: token.value }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ZIndex() {
  const tokens = flatten(zIndex);
  return (
    <Section title="zIndex" count={tokens.length}>
      <div style={{ position: "relative", height: 64 + tokens.length * 20, isolation: "isolate" }}>
        {tokens.map((token, index) => (
          <div
            key={token.name}
            style={{
              position: "absolute",
              top: index * 20,
              left: index * 28,
              width: 160,
              height: 56,
              padding: 8,
              boxSizing: "border-box",
              borderRadius: 6,
              background: "#fff",
              border: "1px solid #111827",
              fontFamily: ui.mono,
              fontSize: 11,
              zIndex: Number(token.value)
            }}
          >
            {token.name} ({token.value})
          </div>
        ))}
      </div>
    </Section>
  );
}

function Opacity() {
  const tokens = flatten(opacity);
  return (
    <Section title="opacity" count={tokens.length}>
      <Rows
        tokens={tokens}
        render={(token) => (
          <div
            style={{
              width: 160,
              height: 32,
              borderRadius: 6,
              background: "#2563eb",
              opacity: Number(token.value)
            }}
          />
        )}
      />
    </Section>
  );
}

export function TokenPreviews() {
  return (
    <>
      <Colors />
      <Fonts />
      <FontSizes />
      <FontWeights />
      <LineHeights />
      <LetterSpacings />
      <Bars title="spacing" group={spacing} />
      <Bars title="sizes" group={sizes} />
      <Radii />
      <BorderWidths />
      <Shadows />
      <Durations />
      <Easings />
      <ZIndex />
      <Opacity />
    </>
  );
}
