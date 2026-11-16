// PWA app icon as a PNG, drawn on demand (no binary assets in the repo).
//   /api/appicon?size=192            rounded "any" icon
//   /api/appicon?size=512&maskable=1 full-bleed maskable icon (glyph in the safe zone)
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const MIN = 48;
const MAX = 1024;
const FALLBACK = 512;
const BRAND = "#9f1239";
const BRAND_2 = "#c2410c";

function sizeFrom(raw: string | null): number {
  const n = Number(raw);
  if (!raw || !Number.isFinite(n)) return FALLBACK;
  return Math.round(Math.min(MAX, Math.max(MIN, n)));
}

/** A bold hourglass (stroked paths), so no font is needed. */
function Pi({ px }: { px: number }) {
  return (
    <svg width={px} height={px} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#ffffff" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12 L 78 12" />
        <path d="M22 88 L 78 88" />
        <path d="M30 13 C 30 38 46 44 50 50 C 54 56 70 62 70 87" />
        <path d="M70 13 C 70 38 54 44 50 50 C 46 56 30 62 30 87" />
      </g>
      <path d="M38 80 L 62 80 L 50 66 Z" fill="#ffffff" />
    </svg>
  );
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const size = sizeFrom(searchParams.get("size"));
  const maskable = searchParams.get("maskable") === "1";
  // Maskable icons may be cropped to a circle of 80% diameter. The π's ink spans
  // about 67% × 52% of its box, so a 60% box keeps it within a ~26% radius of the
  // centre (safe zone: 40%). "any" icons get rounded corners and a larger glyph.
  const glyph = Math.round(size * (maskable ? 0.6 : 0.66));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_2} 100%)`,
          borderRadius: maskable ? 0 : Math.round(size * 0.22),
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: glyph,
            height: glyph,
            marginTop: Math.round(glyph * 0.04),
          }}
        >
          <Pi px={glyph} />
        </div>
      </div>
    ),
    {
      width: size,
      height: size,
      headers: { "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable" },
    },
  );
}
