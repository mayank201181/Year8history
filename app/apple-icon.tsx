// iOS home-screen icon. iOS rounds the corners itself (and paints transparent
// corners black), so this one is a full-bleed square.
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
          background: "linear-gradient(135deg, #9f1239 0%, #c2410c 100%)",
        }}
      >
        <svg width={100} height={100} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={12} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12 L 78 12" />
            <path d="M22 88 L 78 88" />
            <path d="M30 13 C 30 38 46 44 50 50 C 54 56 70 62 70 87" />
            <path d="M70 13 C 70 38 54 44 50 50 C 46 56 30 62 30 87" />
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 2,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: "#9f1239",
            fontSize: 22,
            letterSpacing: 2,
          }}
        >
          Y8
        </div>
      </div>
    ),
    { ...size },
  );
}
