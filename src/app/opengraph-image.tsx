import { ImageResponse } from "next/og";

export const alt = "Andrew Wilkes portfolio preview";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 18% 10%, rgba(96,165,250,0.28), transparent 360px), radial-gradient(circle at 88% 82%, rgba(251,146,60,0.16), transparent 360px), linear-gradient(135deg, #09090b 0%, #111827 52%, #1c1917 100%)",
          color: "#f8fafc",
          display: "flex",
          fontFamily: "Arial, Helvetica, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%"
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "22px",
            display: "flex",
            flexDirection: "column",
            gap: "34px",
            padding: "58px",
            width: "100%"
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "22px"
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "rgba(147,197,253,0.14)",
                border: "1px solid rgba(147,197,253,0.45)",
                borderRadius: "14px",
                color: "#bfdbfe",
                display: "flex",
                fontSize: "30px",
                fontWeight: 700,
                height: "72px",
                justifyContent: "center",
                width: "72px"
              }}
            >
              AW
            </div>
            <div
              style={{
                color: "#93c5fd",
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase"
              }}
            >
              Software Engineer
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}
          >
            <div
              style={{
                color: "#ffffff",
                fontSize: "82px",
                fontWeight: 760,
                letterSpacing: "-0.035em",
                lineHeight: 0.95
              }}
            >
              Andrew Wilkes
            </div>
            <div
              style={{
                color: "#d1d5db",
                fontSize: "34px",
                lineHeight: 1.28,
                maxWidth: "900px"
              }}
            >
              Reliable web applications, data-rich interfaces, and practical tools for
              technical teams.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
