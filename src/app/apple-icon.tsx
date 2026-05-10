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
          background: "#0d1c10",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0px",
        }}
      >
        <div
          style={{
            color: "#f4f0e6",
            fontSize: "92px",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
          }}
        >
          TV
        </div>
        <div
          style={{
            color: "#a3e635",
            fontSize: "14px",
            fontWeight: 700,
            fontFamily: "Arial, sans-serif",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginTop: "12px",
          }}
        >
          bio
        </div>
      </div>
    ),
    { ...size }
  );
}
