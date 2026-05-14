import { ImageResponse } from "next/og";
import { siteConfig } from "./seo-config";

export const runtime = "edge";
export const alt = "Advanta365 Microsoft 365 adoption command center";
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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#07111f",
          color: "#ffffff",
          fontFamily: "Inter, Arial, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "7px"
            }}
          >
            <div style={{ display: "flex", gap: "7px" }}>
              <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#39a7ff" }} />
              <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#18d6c6" }} />
            </div>
            <div style={{ display: "flex", gap: "7px" }}>
              <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#6ce09d" }} />
              <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#f3b74f" }} />
            </div>
          </div>
          <div style={{ fontSize: "42px", fontWeight: 800 }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", gap: "56px", alignItems: "flex-end" }}>
          <div style={{ width: "660px" }}>
            <div
              style={{
                marginBottom: "24px",
                color: "#72e7dc",
                fontSize: "24px",
                fontWeight: 800,
                textTransform: "uppercase"
              }}
            >
              Microsoft 365 adoption, governance, and rollout strategy
            </div>
            <div style={{ fontSize: "76px", lineHeight: 0.98, fontWeight: 850 }}>
              Make Microsoft 365 easier to adopt.
            </div>
          </div>

          <div
            style={{
              width: "330px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.08)"
            }}
          >
            {["Governance by design", "Role-based enablement", "Adoption scorecards"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: "54px",
                  padding: "0 16px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.1)",
                  fontSize: "24px",
                  fontWeight: 700
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
