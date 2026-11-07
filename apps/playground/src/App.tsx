import { fonts } from "@monas/preset";
import { TokenPreviews } from "./tokens/TokenPreviews";
import "./app.css";

export function App() {
  return (
    <main style={{ fontFamily: fonts.body.value, maxWidth: 960, margin: "0 auto", padding: 32 }}>
      <h1 style={{ fontFamily: fonts.heading.value }}>Monas Playground</h1>
      <p>Primitive token previews, rendered from @monas/preset.</p>
      <TokenPreviews />
    </main>
  );
}
