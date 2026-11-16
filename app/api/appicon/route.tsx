// PWA app icon as a PNG, drawn on demand (no binary assets in the repo).
//   /api/appicon?size=192            rounded "any" icon
//   /api/appicon?size=512&maskable=1 full-bleed maskable icon (lettering in the safe zone)
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const MIN = 48;
const MAX = 1024;
const FALLBACK = 512;
const BRAND = "#233056";
const BRAND_2 = "#5b3a7a";
const GOLD = "#e9c46a";

function sizeFrom(raw: string | null): number {
  const n = Number(raw);
  if (!raw || !Number.isFinite(n)) return FALLBACK;
  return Math.round(Math.min(MAX, Math.max(MIN, n)));
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const size = sizeFrom(searchParams.get("size"));
  const maskable = searchParams.get("maskable") === "1";
  // Maskable icons may be cropped to a circle of 80% diameter, so the lettering is
  // scaled to sit well inside the safe zone. "any" icons get rounded corners.
  const k = maskable ? 0.72 : 1;
  const big = Math.round(size * 0.42 * k);
  const small = Math.round(size * 0.125 * k);
  const rule = Math.round(size * 0.56 * k);

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
          background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_2} 100%)`,
          borderRadius: maskable ? 0 : Math.round(size * 0.22),
          color: GOLD,
        }}
      >
        <div style={{ display: "flex", fontSize: big, fontWeight: 700, lineHeight: 1, letterSpacing: -Math.round(big * 0.03) }}>Y8</div>
        <div
          style={{
            display: "flex",
            width: rule,
            height: Math.max(2, Math.round(size * 0.016)),
            marginTop: Math.round(size * 0.05 * k),
            marginBottom: Math.round(size * 0.05 * k),
            background: GOLD,
            borderRadius: 4,
          }}
        />
        <div style={{ display: "flex", fontSize: small, letterSpacing: Math.round(small * 0.18) }}>HISTORY</div>
      </div>
    ),
    {
      width: size,
      height: size,
      headers: { "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable" },
    },
  );
}
