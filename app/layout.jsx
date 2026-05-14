import "./globals.css";

export const metadata = {
  title: "Advanta365 | Microsoft 365 Adoption and Rollout Strategy",
  description:
    "Advanta365 helps organizations plan, govern, roll out, and sustain Microsoft 365 adoption across SharePoint Online, Microsoft Teams, OneDrive, and the modern digital workplace.",
  openGraph: {
    title: "Advanta365 | Microsoft 365 Adoption and Rollout Strategy",
    description:
      "Structured Microsoft 365 adoption, governance, rollout, and enablement for modern enterprises.",
    type: "website"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
