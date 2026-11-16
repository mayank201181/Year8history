// iOS home-screen icon. iOS rounds the corners itself (and paints transparent
// corners black), so this one is a full-bleed square: "Y8" over "HISTORY",
// in gold on ink navy, like the spine of a book.
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #233056 0%, #5b3a7a 100%)",
          color: "#e9c46a",
        }}
      >
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1, letterSpacing: -2 }}>Y8</div>
        <div style={{ display: "flex", width: 104, height: 3, marginTop: 10, marginBottom: 10, background: "#e9c46a", borderRadius: 2 }} />
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 4 }}>HISTORY</div>
      </div>
    ),
    { ...size },
  );
}
