import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advanta365.com"),
  title: {
    default:
      "ADVANTA365 — Enterprise Microsoft 365 Adoption, Governance & Rollout",
    template: "%s | ADVANTA365",
  },
  description:
    "ADVANTA365 — Enterprise Microsoft 365 Adoption, Governance & Rollout Framework. Comprehensive operating model for large organizations deploying Microsoft 365 at scale.",
  keywords: [
    "Microsoft 365",
    "adoption",
    "governance",
    "enterprise",
    "SharePoint",
    "Teams",
    "framework",
    "implementation",
  ],
  authors: [{ name: "ADVANTA365" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "ADVANTA365 — Enterprise Microsoft 365 Framework",
    description:
      "Enterprise-grade Microsoft 365 adoption, governance, implementation, and enablement framework.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663677163857/g8wGKX5v4ST4YMyg6HYL47/favicon-VjzaoUzzqBZw6AXtUMMWaR.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADVANTA365 — Enterprise Microsoft 365 Framework",
    description:
      "Enterprise-grade Microsoft 365 adoption, governance, and enablement framework.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663677163857/g8wGKX5v4ST4YMyg6HYL47/favicon-VjzaoUzzqBZw6AXtUMMWaR.webp",
    ],
  },
  icons: {
    icon: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677163857/g8wGKX5v4ST4YMyg6HYL47/favicon-VjzaoUzzqBZw6AXtUMMWaR.webp",
        type: "image/webp",
        sizes: "32x32",
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677163857/g8wGKX5v4ST4YMyg6HYL47/favicon-H7Z8tUbL6UHeFwN2z6g6tN.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663677163857/g8wGKX5v4ST4YMyg6HYL47/favicon-H7Z8tUbL6UHeFwN2z6g6tN.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D7377",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ADVANTA365",
  url: "https://advanta365.com",
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677163857/g8wGKX5v4ST4YMyg6HYL47/favicon-H7Z8tUbL6UHeFwN2z6g6tN.png",
  description:
    "Enterprise Microsoft 365 adoption, governance, implementation, and enablement framework",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" style={{ margin: 0, padding: 0 }}>
        <Providers>{children}</Providers>
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
