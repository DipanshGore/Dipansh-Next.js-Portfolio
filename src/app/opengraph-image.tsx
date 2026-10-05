// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { PERSONAL_INFO } from "@/lib/data";

// Route segment config
export const runtime = "nodejs";
export const alt = "Dipansh Gore - Full-Stack Engineer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #09090b, #052e16)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle background grid pattern simulation */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.2,
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 24px",
            background: "rgba(16, 185, 129, 0.2)",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            borderRadius: "100px",
            color: "#34d399",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.05em",
            marginBottom: "40px",
            textTransform: "uppercase",
          }}
        >
          Available for Full-Time Roles
        </div>

        <h1
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "white",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {PERSONAL_INFO.name}
        </h1>

        <h2
          style={{
            fontSize: 42,
            fontWeight: 500,
            color: "#a1a1aa", // text-zinc-400
            marginTop: "20px",
            marginBottom: "0",
          }}
        >
          {PERSONAL_INFO.title}
        </h2>

        <div
          style={{
            display: "flex",
            marginTop: "auto",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", color: "#d4d4d8", fontSize: 28 }}>
            Next.js App Router
          </div>
          <div style={{ display: "flex", color: "#3f3f46", fontSize: 28 }}>•</div>
          <div style={{ display: "flex", color: "#d4d4d8", fontSize: 28 }}>
            React 19
          </div>
          <div style={{ display: "flex", color: "#3f3f46", fontSize: 28 }}>•</div>
          <div style={{ display: "flex", color: "#d4d4d8", fontSize: 28 }}>
            Real-Time Systems
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}