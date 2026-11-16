// Browser-tab icon: a rounded ink-navy → plum square with "Y8" in gold.
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
          background: "linear-gradient(135deg, #233056 0%, #5b3a7a 100%)",
          borderRadius: 8,
          color: "#e9c46a",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        Y8
      </div>
    ),
    { ...size },
  );
}
