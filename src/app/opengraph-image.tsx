import { ImageResponse } from "next/og";

export const alt =
  "TerraViva – Agricoltura Biologica e Stagionale a Reggiolo, Emilia-Romagna";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0d1c10",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Top badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#a3e635",
            }}
          />
          <span
            style={{
              color: "#a3e635",
              fontSize: "13px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            Biologico Certificato · Reggiolo, RE · Dal 1987
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          <div
            style={{
              color: "#f4f0e6",
              fontSize: "148px",
              fontWeight: 700,
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
            }}
          >
            Terra
          </div>
          <div
            style={{
              color: "#f4f0e6",
              fontSize: "148px",
              fontWeight: 700,
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
            }}
          >
            Viva
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              color: "rgba(244,240,230,0.4)",
              fontSize: "18px",
              letterSpacing: "0.06em",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Agricoltura Biologica e Stagionale
          </span>
          <div
            style={{
              background: "#a3e635",
              padding: "10px 22px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#0d1c10",
            }}
          >
            terraviva-reggiolo.it
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
