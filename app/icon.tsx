// Browser-tab icon: a rounded crimson → amber square with a white hourglass.
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #9f1239 0%, #c2410c 100%)",
          borderRadius: 8,
        }}
      >
        <svg width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 1 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12 L 78 12" />
            <path d="M22 88 L 78 88" />
            <path d="M30 13 C 30 38 46 44 50 50 C 54 56 70 62 70 87" />
            <path d="M70 13 C 70 38 54 44 50 50 C 46 56 30 62 30 87" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
