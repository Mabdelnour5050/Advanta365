import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://advanta365.com"),
  title: "Advanta365 | Microsoft 365 Adoption and Rollout Strategy",
  description:
    "Advanta365 helps organizations plan, govern, roll out, and sustain Microsoft 365 adoption across SharePoint Online, Microsoft Teams, OneDrive, and the modern digital workplace.",
  keywords: [
    "Microsoft 365 adoption",
    "SharePoint Online governance",
    "Microsoft Teams rollout",
    "OneDrive training",
    "modern workplace change management"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Advanta365 | Microsoft 365 Adoption and Rollout Strategy",
    description:
      "Structured Microsoft 365 adoption, governance, rollout, and enablement for modern enterprises.",
    url: "https://advanta365.com",
    siteName: "Advanta365",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanta365 | Microsoft 365 Adoption and Rollout Strategy",
    description:
      "Structured Microsoft 365 adoption, governance, rollout, and enablement for modern enterprises."
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
